-- =========================================================
-- Banco do testegratuitoenem (Supabase)
-- Rode tudo no SQL Editor do Supabase. Pode rodar de novo
-- sem problema: tudo é "if not exists" ou "or replace".
-- =========================================================

create extension if not exists pgcrypto with schema extensions;

-- ---------- 1. Progresso de cada pessoa ----------
-- Um registro por conta, com tudo o que o app guarda (plano, temas lidos,
-- tempo estudado, respostas, favoritos, correções) num campo JSON.
create table if not exists public.dados_usuario (
  user_id       uuid primary key references auth.users on delete cascade,
  dados         jsonb not null default '{}'::jsonb,
  atualizado_em timestamptz not null default now()
);
alter table public.dados_usuario enable row level security;

drop policy if exists "dono le os proprios dados" on public.dados_usuario;
create policy "dono le os proprios dados" on public.dados_usuario
  for select using (auth.uid() = user_id);

drop policy if exists "dono cria os proprios dados" on public.dados_usuario;
create policy "dono cria os proprios dados" on public.dados_usuario
  for insert with check (auth.uid() = user_id);

drop policy if exists "dono atualiza os proprios dados" on public.dados_usuario;
create policy "dono atualiza os proprios dados" on public.dados_usuario
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- ---------- 2. Códigos de produto (só o hash) ----------
-- Ninguém lê esta tabela pelo app: não há política de leitura.
create table if not exists public.codigos_produto (
  hash    text primary key,
  produto text not null
);
alter table public.codigos_produto enable row level security;

insert into public.codigos_produto (hash, produto) values
  ('ef65b30c4e9bc1b3cfddb1ac23e7e36cb828ea0fa8727fb7f007eba31063a76e', 'arsenal'),
  ('3082b362e7ae5c0a3653272485f4602e43920a4afc2943519dc3c8c3f4839d61', 'correcao'),
  ('632360ae5c2f148ba47883bc23442f17bb964078dcb9d1d110086e4f562a1f03', 'plano'),
  ('41d8bd91b09126d0a0930bbea14a2322f4c3409ab90b76f71a859fd857af21e2', 'exercicios')
on conflict (hash) do nothing;

-- ---------- 3. Produtos liberados para cada conta ----------
-- A pessoa só lê os próprios. Só a função abaixo escreve aqui.
create table if not exists public.acessos (
  user_id   uuid not null references auth.users on delete cascade,
  produto   text not null,
  criado_em timestamptz not null default now(),
  primary key (user_id, produto)
);
alter table public.acessos enable row level security;

drop policy if exists "dono le os proprios acessos" on public.acessos;
create policy "dono le os proprios acessos" on public.acessos
  for select using (auth.uid() = user_id);

-- ---------- 4. Resgatar um código na conta ----------
-- Confere o hash do código e grava o produto na conta de quem está logado.
-- Devolve o nome do produto, ou null se o código não existir.
create or replace function public.resgatar_codigo(codigo text)
returns text
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  p text;
begin
  if auth.uid() is null then
    raise exception 'É preciso estar logado';
  end if;
  select produto into p
    from public.codigos_produto
   where hash = encode(extensions.digest(upper(trim(codigo)), 'sha256'), 'hex');
  if p is null then
    return null;
  end if;
  insert into public.acessos (user_id, produto) values (auth.uid(), p)
  on conflict do nothing;
  return p;
end;
$$;

revoke all on function public.resgatar_codigo(text) from public, anon;
grant execute on function public.resgatar_codigo(text) to authenticated;

-- ---------- 5. Materiais em PDF (download dentro do app) ----------
-- Crie o bucket PRIVADO "materiais" (Storage > New bucket, desmarque Public) e suba os 9 PDFs:
-- Resumo-Matematica.pdf, Resumo-Fisica.pdf, Resumo-Quimica.pdf, Resumo-Biologia.pdf,
-- Resumo-Historia.pdf, Resumo-Geografia.pdf, Resumo-Filosofia.pdf, Resumo-Sociologia.pdf, Resumo-Linguagens.pdf
-- Só quem está logado consegue baixar (o app já só abre com conta). O arquivo nunca fica público.
insert into storage.buckets (id, name, public) values ('materiais', 'materiais', false)
on conflict (id) do nothing;

drop policy if exists "plano baixa materiais" on storage.objects;
create policy "plano baixa materiais" on storage.objects
  for select to authenticated
  using (bucket_id = 'materiais');


-- =========================================================
-- FUNIL ACELERA ENEM: liberação automática pelo webhook da Zuptos
-- Produtos: plano (front), exercicios (OB1), correcao (OB3), comunidade (upsell).
-- O material de redação (OB2) é entregue só pela plataforma, sem acesso no app.
-- =========================================================

-- ---------- 6. Compras feitas antes de a pessoa criar a conta ----------
-- O webhook grava aqui pelo e-mail da compra. Quando a pessoa cria a conta (ou entra),
-- sincronizar_acessos() copia para a tabela acessos. Reembolso apaga a linha.
create table if not exists public.acessos_email (
  email     text not null,
  produto   text not null,
  origem    text,                         -- id da venda na Zuptos
  criado_em timestamptz not null default now(),
  primary key (email, produto)
);
alter table public.acessos_email enable row level security;   -- sem política: só o servidor lê e escreve

-- ---------- 7. Registro de tudo que o webhook recebeu (auditoria) ----------
create table if not exists public.webhook_log (
  id        bigserial primary key,
  recebido  timestamptz not null default now(),
  evento    text,
  email     text,
  produto   text,
  acao      text,
  payload   jsonb
);
alter table public.webhook_log enable row level security;

-- ---------- 8. Liberar / revogar por e-mail (só o servidor com a chave service_role) ----------
create or replace function public.liberar_por_email(p_email text, p_produto text, p_origem text default null)
returns void language plpgsql security definer set search_path = public, auth as $$
declare uid uuid;
begin
  p_email := lower(trim(p_email));
  insert into public.acessos_email (email, produto, origem) values (p_email, p_produto, p_origem)
    on conflict (email, produto) do nothing;
  select id into uid from auth.users where lower(email) = p_email limit 1;
  if uid is not null then
    insert into public.acessos (user_id, produto) values (uid, p_produto) on conflict do nothing;
  end if;
end $$;

create or replace function public.revogar_por_email(p_email text, p_produto text)
returns void language plpgsql security definer set search_path = public, auth as $$
declare uid uuid;
begin
  p_email := lower(trim(p_email));
  delete from public.acessos_email where email = p_email and produto = p_produto;
  select id into uid from auth.users where lower(email) = p_email limit 1;
  if uid is not null then
    delete from public.acessos where user_id = uid and produto = p_produto;
  end if;
end $$;

revoke all on function public.liberar_por_email(text,text,text) from public, anon, authenticated;
revoke all on function public.revogar_por_email(text,text) from public, anon, authenticated;
grant execute on function public.liberar_por_email(text,text,text) to service_role;
grant execute on function public.revogar_por_email(text,text) to service_role;

-- ---------- 9. Quem acabou de entrar recebe o que comprou com o mesmo e-mail ----------
create or replace function public.sincronizar_acessos()
returns void language plpgsql security definer set search_path = public, auth as $$
begin
  if auth.uid() is null then return; end if;
  insert into public.acessos (user_id, produto)
    select auth.uid(), e.produto from public.acessos_email e
     where e.email = lower((select email from auth.users where id = auth.uid()))
  on conflict do nothing;
end $$;
revoke all on function public.sincronizar_acessos() from public, anon;
grant execute on function public.sincronizar_acessos() to authenticated;

-- ---------- 10. Notificações no celular (Web Push) ----------
create table if not exists public.push_inscricoes (
  endpoint  text primary key,
  user_id   uuid not null references auth.users on delete cascade,
  p256dh    text not null,
  auth      text not null,
  criado_em timestamptz not null default now()
);
alter table public.push_inscricoes enable row level security;
drop policy if exists "dono le as proprias inscricoes" on public.push_inscricoes;
create policy "dono le as proprias inscricoes" on public.push_inscricoes for select using (auth.uid() = user_id);
drop policy if exists "dono cria as proprias inscricoes" on public.push_inscricoes;
create policy "dono cria as proprias inscricoes" on public.push_inscricoes for insert with check (auth.uid() = user_id);
drop policy if exists "dono apaga as proprias inscricoes" on public.push_inscricoes;
create policy "dono apaga as proprias inscricoes" on public.push_inscricoes for delete using (auth.uid() = user_id);

-- Preferências de aviso de cada pessoa. O app grava; o envio (api/cron) lê.
create table if not exists public.notif_prefs (
  user_id        uuid primary key references auth.users on delete cascade,
  estudo_dias    int[]  not null default '{}',     -- 0=domingo ... 6=sábado
  estudo_hora    text   not null default '19:00',
  nome           text,
  simulado_dia   int,                              -- null = a pessoa não escolheu
  simulado_hora  text   not null default '10:00',
  ultimo_estudo  date,
  ultimo_simulado date,
  ultima_promo_simulado date,
  ultima_comunidade date,
  atualizado_em  timestamptz not null default now()
);
alter table public.notif_prefs enable row level security;
drop policy if exists "dono le as proprias prefs" on public.notif_prefs;
create policy "dono le as proprias prefs" on public.notif_prefs for select using (auth.uid() = user_id);
drop policy if exists "dono cria as proprias prefs" on public.notif_prefs;
create policy "dono cria as proprias prefs" on public.notif_prefs for insert with check (auth.uid() = user_id);
drop policy if exists "dono atualiza as proprias prefs" on public.notif_prefs;
create policy "dono atualiza as proprias prefs" on public.notif_prefs for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
-- (o app NÃO grava as colunas ultimo_*; só o servidor. Se quiser travar de vez, use uma função.)

-- ---------- 11. Exercícios em PDF: só quem comprou Exercícios e simulados baixa ----------
-- Suba no bucket "materiais" os arquivos Exercicios-Matematica.pdf, Exercicios-Fisica.pdf, ... (9 arquivos).
-- O resumo (Resumo-*.pdf) passa a exigir o produto "plano"; os exercícios, o produto "exercicios".
drop policy if exists "plano baixa materiais" on storage.objects;
create policy "plano baixa materiais" on storage.objects
  for select to authenticated
  using (
    bucket_id = 'materiais' and (
      (name like 'Resumo-%'     and exists (select 1 from public.acessos a where a.user_id = auth.uid() and a.produto = 'plano'))
      or
      (name like 'Exercicios-%' and exists (select 1 from public.acessos a where a.user_id = auth.uid() and a.produto = 'exercicios'))
    )
  );

-- ---------- 12. Uso da correção por foto (limite por conta, protege o custo da API) ----------
create table if not exists public.correcoes_uso (
  id        bigserial primary key,
  user_id   uuid not null references auth.users on delete cascade,
  criado_em timestamptz not null default now()
);
create index if not exists correcoes_uso_user_idx on public.correcoes_uso (user_id, criado_em);
alter table public.correcoes_uso enable row level security;   -- sem política: só o servidor lê e escreve

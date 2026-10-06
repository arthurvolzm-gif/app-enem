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

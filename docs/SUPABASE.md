# Configurar o Supabase (login e progresso salvo)

Sem isso os apps continuam funcionando, mas sem conta: tudo fica salvo só no aparelho.
Reserve uns 15 minutos.

## 1. Criar o projeto
supabase.com → **New project**. Use um projeto **novo**, separado do Focus Fit. Região: São Paulo.

## 2. Rodar o banco
Menu **SQL Editor** → **New query** → cole todo o arquivo `supabase/schema.sql` → **Run**.

Para conferir: em **Table Editor** aparecem `dados_usuario`, `acessos` e `codigos_produto` (esta última com 4 linhas).

## 3. Login por e-mail e senha
**Authentication → Sign In / Providers → Email**:
- Email: ligado.
- **Confirm email: desligado.** Ligado, a pessoa só consegue entrar depois de clicar no link do e-mail, e o e-mail padrão do Supabase só chega para membros da sua equipe. Desligado, ela cria a conta e já entra.

## 4. Endereço do site
**Authentication → URL Configuration**:
- Site URL: `https://testegratuitoenem.vercel.app`
- Redirect URLs: `https://testegratuitoenem.vercel.app/**`

## 5. Colar as chaves
**Project Settings → API Keys**: copie a **Project URL** e a **Publishable key** (`sb_publishable_...`).
Nunca use a `service_role`/secret key no site.

- No código: `shared/config.js` → `SUPABASE_URL` e `SUPABASE_KEY`.
- Na Vercel (Settings → Environment Variables), as mesmas duas: `SUPABASE_URL` e `SUPABASE_KEY`.
  Assim a correção por foto reconhece quem está logado com a Correção liberada.

## 6. "Esqueci a senha" (opcional, mas recomendado)
O e-mail de recuperação precisa de um SMTP próprio (Resend, Brevo etc.):
**Authentication → Emails → SMTP Settings**. Sem isso, o botão existe, mas o e-mail não chega.

## Como fica para o aluno
1. Compra na Ticto e recebe o link de entrega (ex.: `/redacao?k=CÓDIGO`).
2. Abre o link, **cria a conta** (nome, e-mail, senha). O produto é ligado à conta na hora.
3. Nas próximas vezes, só **entra** com e-mail e senha, em qualquer aparelho. A mesma conta vale para `/redacao` e `/materias`.
4. Tudo fica salvo na conta: plano, tempo estudado, temas lidos, respostas, favoritos e correções.

## Limite conhecido
O código do link de entrega pode ser repassado e ligado a outra conta. Se isso virar problema,
o próximo passo é o webhook da Ticto liberar o produto pelo e-mail da compra.

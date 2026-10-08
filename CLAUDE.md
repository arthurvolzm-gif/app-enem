# testegratuitoenem: contexto do projeto

Dois funis de ENEM para quem está no último mês antes da prova (urgência real), publicados
em `testegratuitoenem.vercel.app` a partir deste repositório. Cores: branco e verde.

## Estrutura
- `quiz1/index.html`: quiz de preparo para a **redação** → oferta do Arsenal de Redações (R$ 19,90).
- `quiz2/index.html`: quiz de preparo para as **matérias** → oferta dos 9 resumos em PDF + app Plano ENEM. Cores branco e azul escuro (`shared/quiz-azul.css`).
- `redacao/index.html`: app 1 (Arsenal + montador + correção por foto). Rota também em `/redação`.
- `materias/index.html` + `materias/app.css`: app 2 Plano ENEM (azul escuro): onboarding, plano, temas da semana, modo foco, resumos, progresso, conquistas, revisão espaçada, exercícios. Rota também em `/matérias`.
- Versão escura (preto + ciano): `/quiz2/escuro` e `/materias/escuro` (também `?tema=escuro`). A página detecta a URL, põe `html.escuro` e carrega `shared/escuro-quiz.css` / `shared/escuro-app.css`. Rotas em `vercel.json` (rewrites). Em `materias/app.css`, fundo branco é `var(--card)`: não escrever `background:#fff` em regra nova.
- `api/corrigir.js`: função Vercel que corrige a redação pela foto com a API do Claude.
- `shared/`: `quiz.css` e `quiz-base.js` (motor comum dos quizzes), `app.css`, `config.js`,
  `conta.js` (login Supabase e sincronização do progresso), `acesso.js` (códigos por produto, só hashes), `arsenal.js`, `questoes.js`.
- `shared/conteudo/<matéria>.js`: os 25 temas de cada matéria (fonte única dos PDFs e do app). `shared/materias.js` monta a lista do app.
- `materiais/gerar.cjs`: gera os PDFs de resumo (`node materiais/gerar.cjs [ids]`, saída em `materiais/pdf/`, fora do git). Cada tema tem 5 páginas, só conteúdo, sem exercícios (pedido do usuário): visão geral, desenvolvimento, aprofundamento, erros comuns e revisão com checklist. O conteúdo estendido fica em `materiais/ext/<id>-N.cjs` (chaveado pelo título exato de `shared/conteudo/<id>.js`; os campos `ex` e `pr` ficam sem uso) e o gerador avisa se faltar conteúdo ou estourar a página.
- `supabase/schema.sql`: banco (progresso, acessos, resgate de código). Passo a passo em `docs/SUPABASE.md`.
- `img/`: imagens (ver `docs/prompts-imagens.md`).
- `docs/oferta-e-funil.md`: funis, bumps, entrega de acesso, configuração e pendências.

## Regras
- **Repositório público: nunca gravar código de acesso em texto puro.** Só o hash SHA-256.
- Manter o texto exato pedido. Sem travessão na copy. Avisar erro de português, não corrigir sozinho.
- Compliance Meta: sem promessa de nota ou aprovação, sem número sem fonte.
- "Crie uma imagem" = escrever o prompt de geração, não montar HTML.
- Os quizzes não têm telas de texto entre as perguntas (pedido do usuário): só perguntas →
  analisando → diagnóstico → produto → oferta.
- Índice de Preparo: quem está mal fica entre 14 e 24; quem está bem sobe (até cerca de 88) e as cores ficam verdes (decisão do usuário), sempre rotulado como estimativa educativa. No quiz 1 o limite 14–38 continua.
  A pontuação lê o texto das alternativas: ao mudar uma opção, revise `calcRedacao()` / `calcPreparo()`.
- Notas de corte em `CURSOS` (quiz 2) e `DATA_ENEM` são provisórias: validar com INEP e SISU.
- Login: conta única (e-mail e senha) para os dois apps. Toda chave nova de progresso no localStorage
  precisa entrar na lista `SINCRONIZAR` de `shared/conta.js`, senão não vai para a conta.
- O app 2 lê as respostas do quiz 2 (`localStorage.enem_quiz2`) para pré-preencher o plano: os nomes
  das matérias no quiz precisam bater com `shared/materias.js`.
- Playbook de copy e funil: skill `vturb-ouro` do repositório `Quiz-Emagecimento`.

- **Nunca** ler e gravar o mesmo arquivo na mesma linha em script (`open(dst,'w')` antes de ler apaga o arquivo): já apagou o quiz 2 uma vez.
- Os PDFs não vão para o git (repositório público). Dentro do app o download vem do bucket privado `materiais` do Supabase (`Conta.urlMaterial`, ver fim de `supabase/schema.sql`).
- Na copy do quiz 2 e do app, o PDF se chama "material" (não "resumo"): é o conteúdo estudável em menos de 30 dias, sem prometer resultado.

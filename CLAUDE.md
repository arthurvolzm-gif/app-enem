# Reta Final ENEM: contexto do projeto

Funil para vender um app de estudos para o ENEM a quem está no último mês (urgência real).
Cores: branco e verde (padrão do ENEM). Nome do app provisório.

## Arquivos
- `quiz-enem.html`: o quiz inteiro em arquivo único (HTML, CSS, JS). Sem build. Abrir no navegador já roda.
- `vercel.json`: abre o quiz na raiz do site.
- `docs/sugestoes-app.md`: escopo do app e sugestões de funcionalidades.
- `docs/oferta-e-funil.md`: oferta, fluxo, objeções, pendências e compliance.
- `docs/prompts-imagens.md`: prompts das imagens do quiz e do app.

## Configuração (topo do script do `quiz-enem.html`)
`PIXEL_ID`, `GA_ID`, `CHECKOUT_URL`, `CHECKOUT_DESCONTO`, `PRECO_DESCONTO`, `PRECO_POR`, `PRECO_DE`, `DATA_ENEM`, `APP_NOME`. Vazio = não carrega ou não liga.

## Regras (herdadas dos outros funis do usuário)
- Manter o texto exato pedido. Sem travessão na copy. Avisar erro de português, não corrigir sozinho.
- Compliance Meta: sem promessa de nota ou aprovação, sem "antes e depois" agressivo, sem depoimento fabricado, sem número sem fonte.
- "Crie uma imagem" = escrever o prompt de geração, não montar HTML.
- O Índice de Preparo é calculado em `calcPreparo()` e fica sempre entre 14 e 38 (decisão do usuário), rotulado como estimativa educativa.
- Notas de corte em `CURSOS` e a data em `DATA_ENEM` são provisórias: validar com INEP e SISU.
- Ao inserir ou remover perguntas, os gatilhos de tela ficam no `QUESTIONS.forEach` que monta o `FLOW`; a pontuação em `calcPreparo()` lê o texto das alternativas, então mudar o texto exige ajustar as tabelas de pontos.
- Playbook de copy e funil: skill `vturb-ouro` do repositório `Quiz-Emagecimento`.

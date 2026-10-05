# Funis, produtos e order bumps

Site: `testegratuitoenem.vercel.app` (projeto Vercel ligado a este repositório).

| Caminho | O que é |
|---|---|
| `/` | redireciona para `/quiz1` |
| `/quiz1` | Quiz 1: preparo para a **redação** → oferta do Arsenal de Redações |
| `/quiz2` | Quiz 2: preparo para as **matérias** → oferta do app Plano ENEM |
| `/redacao` (ou `/redação`) | App 1: Arsenal de Redações + Correção por foto |
| `/materias` (ou `/matérias`) | App 2: plano semanal, desempenho, lembretes, resumos + Exercícios e simulados |
| `/api/corrigir` | Função que corrige a redação pela foto (API do Claude) |

## Funil 1: Redação (`/quiz1`)
- **Front: Arsenal de Redações para o ENEM, R$ 19,90.** Modelos de introdução e tese, 50 tópicos frasais, 50+ alusões históricas, 50 frases coringas, frases filosóficas, proposta de intervenção, conectivos com exemplos. Bônus: montador de redação, checklist das 5 competências, o que zera, temas anteriores, 20 eixos para treinar.
- **Order bump 1: Correção da redação por foto** (sugestão R$ 14,90).
- **Order bump 2: Plano ENEM (app das matérias)** (sugestão R$ 17,90).
- **Order bump 3 (opcional): Exercícios e simulados** (sugestão R$ 12,90).

## Funil 2: Matérias (`/quiz2`)
- **Front: Plano ENEM, sugestão R$ 24,90.** Plano semanal pronto, desempenho por matéria, lembretes, resumos do que mais cai.
- **Order bump 1: Correção da redação por foto** (sugestão R$ 14,90).
- **Order bump 2: Exercícios e simulados no estilo do ENEM** (sugestão R$ 14,90).
- **Order bump 3 (opcional): Arsenal de Redações** (sugestão R$ 12,90, venda cruzada).

Máximo de 3 bumps por checkout (a partir do 4º a conversão do checkout cai).

## Como a pessoa recebe o acesso
Cada produto tem um código. Na Ticto, o link de entrega de cada produto é:

| Produto | Link de entrega |
|---|---|
| Arsenal de Redações | `https://testegratuitoenem.vercel.app/redacao?k=CÓDIGO_ARSENAL` |
| Correção por foto | `https://testegratuitoenem.vercel.app/redacao?k=CÓDIGO_CORRECAO` |
| Plano ENEM | `https://testegratuitoenem.vercel.app/materias?k=CÓDIGO_PLANO` |
| Exercícios e simulados | `https://testegratuitoenem.vercel.app/materias?k=CÓDIGO_EXERCICIOS` |

Os códigos **não ficam neste repositório** (ele é público). O site guarda só o hash SHA-256 de cada um, em `shared/acesso.js` e em `api/corrigir.js`. Para trocar um código: gere um novo, calcule o hash (`node -e "console.log(require('crypto').createHash('sha256').update('NOVO-CODIGO').digest('hex'))"`) e substitua a linha.

Limite conhecido: o conteúdo dos apps está no próprio site, então o código impede o acesso casual, mas não um curioso técnico. A correção por foto, que tem custo, é conferida também no servidor. Próximo passo, se a venda validar: login por e-mail com Supabase e webhook da Ticto, como no app-emagrecimento.

## Configuração na Vercel
- `ANTHROPIC_API_KEY` (obrigatória para a correção por foto).
- `CODIGOS_CORRECAO` (opcional): códigos extras aceitos pela correção, separados por vírgula.
- `CORRECAO_MODELO` (opcional): troca o modelo da correção. Padrão `claude-opus-5-5`.

## Configuração no código
- `quiz1/index.html` e `quiz2/index.html`, bloco `window.QUIZ`: Pixel, GA4, checkout, preço, pop-up de saída, data do ENEM.
- `shared/config.js`: links de checkout dos botões "Desbloquear" dentro dos apps, e-mail de suporte, data do ENEM.

## Pendências (decisões suas)
- Links de checkout, Pixel e GA4 dos dois funis.
- Preço do Plano ENEM (R$ 24,90 é provisório) e preços dos bumps.
- Data do ENEM (`2026-11-08` é referência: confirmar no edital do INEP).
- Notas de corte por curso no quiz 2: faixas aproximadas, validar com o SISU.
- Imagens: ver `prompts-imagens.md`. Sem elas tudo funciona (as fotos somem sem quebrar o layout).
- Deixar o repositório privado: hoje ele é público e expõe o conteúdo pago.

## Compliance
Sem promessa de nota ou aprovação, sem depoimento fabricado, sem número sem fonte. O Índice de Preparo (sempre entre 14 e 38, decisão do dono) é rotulado como estimativa educativa. A nota da correção por foto é rotulada como estimativa feita por IA. Aviso de que não há vínculo com INEP/MEC em todas as páginas.

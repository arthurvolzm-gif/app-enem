# Oferta e funil: Reta Final ENEM

## Posicionamento
Para quem está no último mês e sente que não vai dar tempo. Promessa sem garantia de nota: **plano pronto + redação corrigida + desempenho acompanhado até o dia da prova**. Urgência real (a data do ENEM), nunca escassez inventada.

## Mecanismo
"Índice de Preparo": nota de 0 a 100 calculada das respostas (rotina, tempo, simulados, redação). Por decisão do dono do projeto, o índice **sempre cai numa faixa baixa (14 a 38)** e é apresentado como estimativa educativa, não como avaliação oficial. Subíndices: Redação, Rotina e constância, Tempo de estudo, Simulados e prática.

## Fluxo do quiz (`quiz-enem.html`)
1. Abertura com a 1ª pergunta (situação, com 4 cards de foto). Clique inicia e dispara `QuizIniciado`.
2. Nome → "Isso é pra você?" → sentimento → **objeção: dá tempo?**
3. Tempo diário, dias por semana, rotina, já abandonou cronograma → **objeção: já tentei e larguei**
4. Matérias com dificuldade (até 4), simulados, curso → **nota de corte do curso**, meta de nota
5. Redação: nota, onde trava (introdução, desenvolvimento, conclusão, repertório), quem corrige → **diagnóstico curto** (redação vale 1000, 5 competências de 200)
6. O que atrapalha → **objeção: não tenho tempo**
7. Pergunta final: o que mais ajudaria no último mês (4 opções, todas levam ao app)
8. "Analisando" 5 s → **diagnóstico completo**: alerta, Índice de Preparo, barras por área, 3 pontos críticos
9. **Apresentação do app** (6 funções)
10. "Montando seu plano" 3,5 s → **projeção personalizada**: plano da semana com as matérias dela e o tempo da rotina dela, exemplo de correção de redação, desempenho por matéria, do ponto de partida à meta, 4 semanas
11. **Oferta**: o que recebe, bônus, preço, garantia, FAQ, CTA fixo, aviso legal

## Objeções quebradas e onde
| Objeção | Onde |
|---|---|
| "Não dá mais tempo" | tela "Será que ainda dá tempo?" |
| "Já tentei cronograma e larguei" | tela sobre cronogramas + lembrete e plano pronto |
| "Não tenho tempo" | tela "Você não precisa de mais tempo" + plano ajustado à rotina |
| "A redação não tem como corrigir" | foto + exemplo de correção na projeção |
| "É mais um app / IA erra" | FAQ: apoio, 5 competências, não substitui professor |
| "É caro" | pagamento único, preço baixo, garantia de 7 dias |
| "Preciso instalar?" | FAQ: abre no navegador |
| "É oficial?" | FAQ e rodapé: independente do INEP/MEC |

## O que aproveitei dos outros quizzes
- Motor do `quiz-caneta-zero.html`: progresso, "analisando" com smootherstep, diagnóstico curto no meio e completo no fim, telas de quebra, personalização por `state.answers`.
- Abertura sem botão: a 1ª pergunta já está na tela, com foto colada ao botão.
- Medição `quiz_etapa`, `quiz_resposta`, `quiz_abandono` (GA4 e Pixel).
- Pop-up de saída com gesto do usuário, uma vez por sessão, e reabertura ao voltar do checkout.
- Preferências: texto exato, sem travessão, sem depoimento fabricado, sem número inventado, compliance Meta.
- **Não reaproveitado**: prova social com depoimento, "antes e depois", contador falso de pessoas, escassez falsa.

## Pendências (decisões suas)
- **Nome do app** (provisório: Reta Final ENEM).
- **Preço e ancoragem**: `PRECO_POR = R$ 27,90` e `PRECO_DE = R$ 97,90` são provisórios. A ancoragem só vale se for a soma real dos itens.
- **Link do checkout** (`CHECKOUT_URL`), e do pop-up (`CHECKOUT_DESCONTO` + `PRECO_DESCONTO`; vazio = pop-up desligado).
- **Pixel e GA4** próprios deste funil (`PIXEL_ID`, `GA_ID`). Não usar o Pixel do Caneta Zero.
- **Data do ENEM** (`DATA_ENEM`): coloquei 08/11/2026 como referência. **Confirme no edital do INEP.** Vazio = textos sem contagem de dias.
- **Notas de corte por curso** (`CURSOS` no quiz): são faixas aproximadas de universidades federais. **Valide com os dados oficiais do SISU** antes de anunciar.
- **Bônus** (guia das 5 competências e checklist da semana da prova): estão na oferta, mas precisam ser produzidos.
- **Limite de correções por aluno** (custo da IA).
- **Imagens**: ver `prompts-imagens.md`. Sem elas o quiz funciona (as fotos somem sem quebrar o layout).

## Compliance (Meta)
Sem promessa de nota ou aprovação, sem "antes e depois" agressivo, sem depoimento fabricado, sem número sem fonte. O Índice de Preparo é rotulado como estimativa educativa. A meta "60+" é meta do plano, não resultado prometido. Aviso de que não há vínculo com INEP/MEC.

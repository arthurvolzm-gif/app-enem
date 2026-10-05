# App Reta Final ENEM: escopo e sugestões

Nome provisório. Cores: branco e verde (padrão do ENEM). Público: quem está a menos de 30 dias da prova e quer direção, não mais conteúdo.

## O que você pediu (escopo base)

1. **Correção de redação por foto**: a pessoa fotografa o caderno, a IA lê (OCR), corrige por competência (C1 a C5, 200 pontos cada), mostra os erros e como melhorar.
2. **Desempenho**: tempo de estudo e desempenho por matéria.
3. **Plano semanal**: qual matéria estudar em cada dia da semana e por quanto tempo.
4. **Lembrete de estudar**: notificação no horário escolhido.
5. **Atividades, exercícios e simulados**.
6. **Resumos por matéria** com os temas principais que caem. Cada tema lido é salvo no desempenho da matéria.

## Sugestões para acrescentar (por prioridade)

### Entram no MVP (alto impacto, baixo custo)
- **Banco de repertório sociocultural**: citações, filósofos, filmes, dados e leis por eixo temático, prontos para encaixar na redação. Resolve a dor "não sei o que citar" (aparece no quiz).
- **Gerador de tema e proposta de intervenção**: tema novo por dia e checklist dos 5 elementos da proposta (agente, ação, meio, finalidade, detalhamento).
- **Reescrita guiada**: depois da correção, o app pede para a pessoa reescrever só o parágrafo fraco e compara a versão nova.
- **Sequência de dias (streak)** e meta diária pequena (ex.: 25 min). Mantém quem já abandonou cronograma.
- **Caderno de erros**: toda questão errada vai para uma lista com o motivo; revisão automática na semana seguinte.
- **Modo "reta final"**: o plano reorganiza sozinho conforme a data da prova e o que a pessoa ainda erra.
- **Contagem regressiva** na tela inicial (data real do ENEM, confirmada no edital).

### V2 (depois de validar a venda)
- **Simulado cronometrado** no formato da prova (90 questões por dia, tempo corrido) e **gabarito comentado**.
- **Calculadora de nota (TRI simplificada)** e comparação com a nota de corte do curso escolhido, com fonte oficial do SISU.
- **Treino de leitura rápida** de textos de Linguagens.
- **Flashcards** de fórmulas, datas e conceitos com repetição espaçada.
- **Pomodoro** dentro do app, registrando o tempo no desempenho.
- **Plano de véspera e dia da prova**: checklist de documentos, sono, alimentação, estratégia de tempo.
- **Modo ansiedade**: respiração guiada de 2 minutos antes de estudar ou antes da prova.

### Monetização (esteira, lei 1 do playbook: o lucro mora no backend)
- **Order bump** no checkout: pacote de correções extras de redação.
- **Upsell**: "Banco de 100 repertórios por eixo" ou "Pacote de temas previstos com propostas prontas".
- **Downsell**: acesso sem simulados, só plano e redação.
- **Recuperação de venda**: pop-up de saída e e-mail/WhatsApp para quem chegou ao checkout.
- **Próximo produto (pós-ENEM)**: o mesmo app para a segunda edição, para vestibulares e para o ENEM do ano seguinte (esteira de recompra).

## Decisões técnicas a tomar
- **IA da correção**: modelo com visão para ler a foto e avaliar pelas 5 competências. Definir um **limite justo de correções por aluno** (cada foto tem custo). Sugestão inicial: a oferta dizer "correções por foto, com limite de uso justo", e o limite exato fica no app.
- **Base do app**: o `app-emagrecimento` já tem PWA, Supabase, painel de avaliações, política de privacidade e exclusão de conta. Dá para reaproveitar a estrutura (login, banco, `manifest.json`, `sw.js`).
- **LGPD**: o app guarda fotos de caderno e dados de menores de idade possíveis (público de 17 anos). Exigir consentimento, política de privacidade e opção de apagar as fotos.
- **Avisar sempre** que a correção é um apoio e não substitui a avaliação oficial.

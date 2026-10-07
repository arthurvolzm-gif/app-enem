# Funil Acelera Enem: backend de acesso, avisos e entrega

## Produtos e preços

| Etapa | Produto | Preço | Como a pessoa recebe |
|---|---|---|---|
| Front | Aplicativo + conteúdos + resumos (`plano`) | R$ 29,90 | Libera no app pelo webhook |
| Order bump 1 | Exercícios e simulados (`exercicios`) | R$ 14,90 | Libera no app pelo webhook |
| Order bump 2 | Material Preparatório para Redação (e-book) | R$ 9,90 | Só pela plataforma (PDF), sem acesso no app |
| Order bump 3 | Correção de redação por foto com IA (`correcao`) | R$ 19,90 | Libera no app pelo webhook |
| Upsell | Comunidade (`comunidade`) | R$ 37,90 | Libera no app pelo webhook |

O e-book é o arquivo `materiais/pdf/Arsenal-de-Redacoes-ENEM.pdf` (`node materiais/gerar-ebook.cjs`). Suba na Zuptos como produto digital.

## O que o app faz

- **Bump comprado:** o acesso chega sozinho. A pessoa cria a conta com o **mesmo e-mail da compra**; se já tem conta, ao voltar para o app o acesso atualiza (ou toca em "Já comprei").
- **Bump não comprado:** o recurso fica bloqueado. Ao tocar, aparece uma mensagem explicando o que é e o botão que leva ao checkout.
- **Aba Plano:** abaixo de "Baixar o material de X" há "Baixar exercícios do tema". Quem comprou baixa o PDF de exercícios da matéria (`Exercicios-<Matéria>.pdf`); quem não comprou vê a mensagem e vai ao checkout.
- **Simulado semanal:** em Lembretes, quem comprou escolhe dia da semana e hora. Quem não comprou vê o cadeado e, uma vez por semana, recebe um aviso para comprar.
- **Comunidade:** toda semana a pessoa recebe um aviso. Quem comprou abre o link da comunidade; quem não comprou vê a oferta.
- **Notificações no celular:** Web Push (como no Focus Fit). A pessoa ativa em Lembretes. No iPhone, só funciona com o app adicionado à tela inicial.

## Configuração, passo a passo

### 1. Supabase
1. SQL Editor: rode `supabase/schema.sql` inteiro (pode rodar de novo sem problema).
2. Storage, bucket privado `materiais`: suba os 9 `Resumo-*.pdf` e os 9 `Exercicios-*.pdf` (gerados em `materiais/pdf/`). As políticas já exigem `plano` para os resumos e `exercicios` para os exercícios.
3. Project Settings > API: copie a chave **service_role** (vai só na Vercel, nunca no repositório).

### 2. Vercel (Settings > Environment Variables)
| Variável | Valor |
|---|---|
| `SUPABASE_URL` | a URL do projeto (a mesma de `shared/config.js`) |
| `SUPABASE_SERVICE_KEY` | chave service_role |
| `WEBHOOK_SECRET` | texto longo e aleatório (vai na URL do webhook) |
| `ZUPTOS_PRODUTOS` | JSON ligando o id de cada produto da Zuptos ao app (veja abaixo) |
| `CRON_SECRET` | texto longo e aleatório |
| `VAPID_PUBLICA`, `VAPID_PRIVADA`, `VAPID_CONTATO` | gere com `npx web-push generate-vapid-keys`; contato no formato `mailto:seu@email.com` |
| `ANTHROPIC_API_KEY` | já existente (correção por foto) |
| `CORRECAO_LIMITE`, `CORRECAO_DIAS` | opcionais: limite de correções por conta (padrão 10 em 30 dias) |

`ZUPTOS_PRODUTOS` (troque pelos ids reais):
```json
{"ID_FRONT":"plano","ID_OB_EXERCICIOS":"exercicios","ID_OB_CORRECAO":"correcao","ID_UPSELL_COMUNIDADE":"comunidade","ID_ARSENAL_FUNIL1":"arsenal"}
```

### 3. Zuptos (webhook)
1. Em Webhooks/Integrações, crie um webhook com a URL `https://SEU-SITE.vercel.app/api/webhook?token=O_MESMO_WEBHOOK_SECRET`.
2. Marque os eventos de **compra aprovada** e de **reembolso/chargeback** (para tirar o acesso).
3. Faça uma compra de teste. Em `webhook_log` (Supabase) aparece o que chegou e a ação tomada ("liberado: plano,exercicios"). Se aparecer "produto não reconhecido", copie o id do produto que veio no `payload` para `ZUPTOS_PRODUTOS`.
4. O leitor do webhook é tolerante (procura e-mail, status e ids em qualquer lugar do JSON). Se a Zuptos usar um formato muito diferente, mande um exemplo de payload e eu ajusto.

### 4. Agendador das notificações
O envio é `api/cron-push`. O plano gratuito da Vercel não permite cron a cada 30 minutos, então use o GitHub Actions (já incluído em `.github/workflows/push.yml`): em Settings > Secrets and variables > Actions crie `CRON_URL` (`https://SEU-SITE.vercel.app/api/cron-push`) e `CRON_SECRET` (o mesmo da Vercel).

### 5. `shared/config.js`
Preencha `CHECKOUT` de cada produto, `VAPID_PUBLICA` (a chave pública) e `COMUNIDADE_LINK`. **`LIBERADO_COM_CONTA` agora está vazio:** antes, qualquer conta criada abria o plano de graça; agora o acesso só vem da compra (webhook) ou de um código.

## Correção por foto: como funciona e custo
1. A pessoa tira a foto no celular, o app envia a imagem para `/api/corrigir`.
2. O servidor confere o acesso (conta com `correcao` ou código) e pede ao modelo do Claude que leia a letra, transcreva e avalie as 5 competências (retorna JSON: notas por competência, erros com trecho, pontos fortes, próxima ação e um parágrafo reescrito).
3. O app mostra o resultado como estimativa feita por IA, nunca como nota oficial.

**Dá para ser de graça?** Não de verdade: cada correção usa a API da Anthropic, que cobra por uso (imagem enviada + texto gerado). Quem paga é você. O que dá para fazer:
- **Vender com limite** (já implementado): `CORRECAO_LIMITE` por conta no período. Calcule o custo médio medindo 10 correções de teste no painel da Anthropic e confirme que `limite × custo` fica bem abaixo dos R$ 19,90.
- **Baixar o custo por correção:** trocar o modelo em `CORRECAO_MODELO` por um mais barato e reduzir `max_tokens` (hoje 12.000). Teste a qualidade da correção antes de trocar.
- **Oferecer 1 correção grátis** como isca no quiz, com limite global de gasto, só se o custo por lead fizer sentido no seu funil.
- Correção 100% grátis e sem API não é viável com qualidade: reconhecer letra manuscrita e avaliar competências exige um modelo de visão.

## Pendências
- Ids reais dos produtos na Zuptos e links de checkout de cada produto.
- Link da comunidade (`COMUNIDADE_LINK`).
- Os PDFs de exercícios usam as 6 questões de cada tema já escritas (150 por matéria). Para um banco maior, escreva mais questões em `materiais/ext/`.
- Os textos de Química (temas 7 a 25) e das outras matérias, combinados para depois.

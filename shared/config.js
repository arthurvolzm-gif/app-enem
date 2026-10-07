/* =========================================================
   CONFIGURAÇÃO DOS APPS (único lugar para trocar nome e links)
   ========================================================= */
window.ENEM_CONFIG = {
  /* Supabase (login e progresso salvo na conta). Use a chave PÚBLICA
     (publishable / anon), feita para ficar visível no site. NUNCA a
     service_role. Vazio = apps sem login, salvando só no aparelho. */
  SUPABASE_URL: 'https://mogirincherfbikrkmrz.supabase.co',
  SUPABASE_KEY: 'sb_publishable_cDVVobvbNCQhciAGhzT9SQ_BaUAstdR',

  /* produtos que abrem só de estar logado (sem pedir código).
     Correção por foto e exercícios ficam de fora: continuam pagos à parte. */
  LIBERADO_COM_CONTA: [],   // vazio: tudo depende da compra (webhook da Zuptos) ou do código

  /* links de checkout usados nos botões "Desbloquear" dentro dos apps.
     Vazio = o botão mostra um aviso em vez de levar ao checkout. */
  CHECKOUT: {
    arsenal:    '',   // Arsenal de Redações (front do funil 1)
    correcao:   '',   // Correção da redação por foto (order bump)
    plano:      '',   // App das matérias (front do funil 2)
    exercicios: '',   // Exercícios e simulados (order bump 1)
    comunidade: ''    // Comunidade de estudantes (upsell)
  },
  /* chave PÚBLICA do Web Push (gere o par com: npx web-push generate-vapid-keys; a privada vai só na Vercel) */
  VAPID_PUBLICA: 'BMFQKSgVwR5bnh6g8oKwEj3M26OeTo3NpC9QrPkS9Qux9T6FOJG-zERXHkyi2npX4POjmQ63G5pPdFfW9CkWfxY',
  /* link da comunidade (abre depois da compra) */
  COMUNIDADE_LINK: '',
  SUPORTE_EMAIL: '',   // e-mail de suporte mostrado nas telas de acesso
  DATA_ENEM: '2026-11-08' // CONFIRME no edital do INEP
};

/* =========================================================
   CONFIGURAÇÃO DOS APPS (único lugar para trocar nome e links)
   ========================================================= */
window.ENEM_CONFIG = {
  /* Supabase (login e progresso salvo na conta). Use a chave PÚBLICA
     (publishable / anon), feita para ficar visível no site. NUNCA a
     service_role. Vazio = apps sem login, salvando só no aparelho. */
  SUPABASE_URL: 'https://mogirincherfbikrkmrz.supabase.co',
  SUPABASE_KEY: 'sb_publishable_cDVVobvbNCQhciAGhzT9SQ_BaUAstdR',

  /* links de checkout usados nos botões "Desbloquear" dentro dos apps.
     Vazio = o botão mostra um aviso em vez de levar ao checkout. */
  CHECKOUT: {
    arsenal:    '',   // Arsenal de Redações (front do funil 1)
    correcao:   '',   // Correção da redação por foto (order bump)
    plano:      '',   // App das matérias (front do funil 2)
    exercicios: ''    // Exercícios e simulados (order bump)
  },
  SUPORTE_EMAIL: '',   // e-mail de suporte mostrado nas telas de acesso
  DATA_ENEM: '2026-11-08' // CONFIRME no edital do INEP
};

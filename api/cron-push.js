/* =========================================================
   GET /api/cron-push   (chamado a cada 15 a 30 minutos)
   Envia as notificações no celular (Web Push):
   1. Hora de estudar (dias e horário que a pessoa escolheu no plano)
   2. Simulado semanal (dia e hora escolhidos; só para quem comprou Exercícios e simulados)
      · quem NÃO comprou recebe, uma vez por semana, o aviso de que o simulado está bloqueado
   3. Comunidade de estudantes, uma vez por semana (convite para quem comprou; oferta para quem não)

   Variáveis de ambiente (Vercel):
   - CRON_SECRET            segredo do agendador (?token=... ou Authorization: Bearer ...)
   - SUPABASE_URL, SUPABASE_SERVICE_KEY
   - VAPID_PUBLICA, VAPID_PRIVADA, VAPID_CONTATO (ex.: mailto:suporte@seudominio.com)
   - SITE_URL (opcional, padrão https://testegratuitoenem.vercel.app)

   Quem agenda: GitHub Actions (.github/workflows/push.yml) ou cron-job.org, chamando a URL
   com o token. O fuso usado é America/Sao_Paulo.
   ========================================================= */
import webpush from "web-push";

const FUSO = "America/Sao_Paulo";
const JANELA_MIN = 180;            // se o agendador atrasar, ainda envia até 3 horas depois do horário
const DIA_PROMO_SIMULADO = 6;      // sábado
const HORA_PROMO_SIMULADO = "10:00";
const DIA_COMUNIDADE = 0;          // domingo
const HORA_COMUNIDADE = "18:00";

function agora() {
  const p = new Intl.DateTimeFormat("en-CA", { timeZone: FUSO, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", weekday: "short", hour12: false }).formatToParts(new Date());
  const g = (t) => p.find((x) => x.type === t).value;
  const dow = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }[g("weekday")];
  const hh = g("hour") === "24" ? "00" : g("hour");
  return { data: `${g("year")}-${g("month")}-${g("day")}`, dow, min: parseInt(hh, 10) * 60 + parseInt(g("minute"), 10) };
}
const minutos = (hhmm) => { const [h, m] = String(hhmm || "00:00").split(":"); return parseInt(h, 10) * 60 + parseInt(m || "0", 10); };
const venceu = (hora, min) => min >= minutos(hora) && min - minutos(hora) <= JANELA_MIN;
const diasEntre = (a, b) => Math.round((new Date(b + "T12:00:00") - new Date(a + "T12:00:00")) / 86400000);

const cab = (chave) => (chave.startsWith("sb_") ? { apikey: chave } : { apikey: chave, Authorization: `Bearer ${chave}` });

async function rest(caminho, opcoes = {}) {
  const chave = process.env.SUPABASE_SERVICE_KEY;
  const r = await fetch(`${process.env.SUPABASE_URL}/rest/v1/${caminho}`, {
    ...opcoes,
    headers: { ...cab(chave), "Content-Type": "application/json", ...(opcoes.headers || {}) },
  });
  if (!r.ok) throw new Error(`${caminho}: ${r.status} ${await r.text()}`);
  return r.status === 204 ? null : r.json();
}

export default async function handler(req, res) {
  const token = (req.query && req.query.token) || (req.headers.authorization || "").replace(/^Bearer\s+/i, "");
  if (!process.env.CRON_SECRET || token !== process.env.CRON_SECRET) return res.status(401).json({ erro: "token inválido" });
  if (!process.env.VAPID_PUBLICA || !process.env.VAPID_PRIVADA) return res.status(500).json({ erro: "VAPID não configurado" });
  webpush.setVapidDetails(process.env.VAPID_CONTATO || "mailto:contato@exemplo.com", process.env.VAPID_PUBLICA, process.env.VAPID_PRIVADA);
  const site = process.env.SITE_URL || "https://testegratuitoenem.vercel.app";

  const { data: hoje, dow, min } = agora();
  const [prefs, subs, acessos] = await Promise.all([
    rest("notif_prefs?select=*"),
    rest("push_inscricoes?select=endpoint,user_id,p256dh,auth"),
    rest("acessos?select=user_id,produto&produto=in.(exercicios,comunidade)"),
  ]);
  const subsPor = {}; subs.forEach((s) => { (subsPor[s.user_id] = subsPor[s.user_id] || []).push(s); });
  const temPor = {}; acessos.forEach((a) => { (temPor[a.user_id] = temPor[a.user_id] || new Set()).add(a.produto); });

  let enviados = 0, removidos = 0;
  async function enviar(userId, msg) {
    for (const s of subsPor[userId] || []) {
      try {
        await webpush.sendNotification({ endpoint: s.endpoint, keys: { p256dh: s.p256dh, auth: s.auth } }, JSON.stringify(msg));
        enviados++;
      } catch (e) {
        if (e.statusCode === 404 || e.statusCode === 410) { removidos++; await rest(`push_inscricoes?endpoint=eq.${encodeURIComponent(s.endpoint)}`, { method: "DELETE" }).catch(() => {}); }
      }
    }
  }
  const marcar = (userId, campos) => rest(`notif_prefs?user_id=eq.${userId}`, { method: "PATCH", body: JSON.stringify(campos), headers: { Prefer: "return=minimal" } });

  for (const p of prefs) {
    if (!subsPor[p.user_id]) continue;
    const tem = temPor[p.user_id] || new Set();
    const nome = p.nome ? `${p.nome}, ` : "";

    /* 1. estudo */
    if ((p.estudo_dias || []).includes(dow) && venceu(p.estudo_hora, min) && p.ultimo_estudo !== hoje) {
      await enviar(p.user_id, { titulo: "📚 Hora de estudar", corpo: `${nome}abra o seu plano e faça o bloco de hoje.`, url: `${site}/materias#plano`, tag: "estudo" });
      await marcar(p.user_id, { ultimo_estudo: hoje });
    }
    /* 2. simulado semanal */
    if (tem.has("exercicios")) {
      if (p.simulado_dia === dow && venceu(p.simulado_hora, min) && p.ultimo_simulado !== hoje) {
        await enviar(p.user_id, { titulo: "📝 Simulado da semana", corpo: `${nome}está na hora do seu simulado. Treine no estilo do ENEM.`, url: `${site}/materias#exercicios`, tag: "simulado" });
        await marcar(p.user_id, { ultimo_simulado: hoje });
      }
    } else if (dow === DIA_PROMO_SIMULADO && venceu(HORA_PROMO_SIMULADO, min) && (!p.ultima_promo_simulado || diasEntre(p.ultima_promo_simulado, hoje) >= 6)) {
      await enviar(p.user_id, { titulo: "📝 Simulado semanal bloqueado", corpo: "Desbloqueie Exercícios e simulados para treinar toda semana no estilo do ENEM.", url: `${site}/materias#exercicios`, tag: "simulado-promo" });
      await marcar(p.user_id, { ultima_promo_simulado: hoje });
    }
    /* 3. comunidade (1 vez por semana) */
    if (dow === DIA_COMUNIDADE && venceu(HORA_COMUNIDADE, min) && (!p.ultima_comunidade || diasEntre(p.ultima_comunidade, hoje) >= 6)) {
      const tem_c = true; // comunidade grátis por enquanto (ver LIBERADO_COM_CONTA em shared/config.js)
      await enviar(p.user_id, {
        titulo: "👥 Comunidade de estudantes",
        corpo: tem_c ? "Grátis por enquanto: entre no grupo e troque dúvidas e dicas com quem também está estudando para o ENEM." : "Estude junto: conheça a comunidade de estudantes do ENEM.",
        url: `${site}/materias#comunidade`, tag: "comunidade",
      });
      await marcar(p.user_id, { ultima_comunidade: hoje });
    }
  }
  return res.status(200).json({ ok: true, hoje, dow, min, usuarios: prefs.length, enviados, removidos });
}

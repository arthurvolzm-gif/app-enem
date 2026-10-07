/* =========================================================
   POST /api/webhook?token=SEGREDO
   Recebe o aviso de compra da Zuptos e libera (ou tira) o acesso no app.

   Variáveis de ambiente (Vercel → Settings → Environment Variables):
   - WEBHOOK_SECRET         segredo que vai na URL do webhook (?token=...)
   - SUPABASE_URL           o mesmo de shared/config.js
   - SUPABASE_SERVICE_KEY   chave service_role do Supabase (NUNCA no repositório)
   - ZUPTOS_PRODUTOS        JSON ligando o id/nome do produto na Zuptos ao produto do app, ex.:
       {"id-do-front":"plano","id-do-ob1":"exercicios","id-do-ob3":"correcao","id-do-upsell":"comunidade"}
     (o id do material de redação, OB2, não entra: ele é entregue só pela plataforma)

   Como funciona: o payload da Zuptos é lido de forma tolerante. Procura o e-mail do
   comprador, o status e qualquer campo cujo valor seja um dos ids de ZUPTOS_PRODUTOS
   (serve tanto para uma venda por produto quanto para uma venda com order bumps dentro).
   Tudo que chega fica em public.webhook_log para conferência.
   ========================================================= */

const PAGO = /(^|[^a-z])(paid|approved|aprovad[oa]|pag[oa]|completed|complete|confirmad[oa]|purchase_approved|order_paid|sale_approved|authorized)([^a-z]|$)/i;
const REVERTIDO = /(refund|reembols|chargeback|estorn|cancel|dispute|disputa)/i;

function achatar(obj, caminho = "", saida = []) {
  if (obj === null || obj === undefined) return saida;
  if (Array.isArray(obj)) { obj.forEach((v, i) => achatar(v, `${caminho}[${i}]`, saida)); return saida; }
  if (typeof obj === "object") { for (const k of Object.keys(obj)) achatar(obj[k], caminho ? `${caminho}.${k}` : k, saida); return saida; }
  saida.push([caminho.toLowerCase(), String(obj)]);
  return saida;
}

function acharEmail(folhas) {
  const ehEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  const candidatos = folhas.filter(([c, v]) => /email|e-mail/.test(c) && ehEmail(v));
  if (!candidatos.length) return "";
  const comprador = candidatos.find(([c]) => /(customer|buyer|client|cliente|comprador|payer|lead|user)/.test(c));
  return (comprador || candidatos[0])[1].trim().toLowerCase();
}

function acharStatus(folhas) {
  return folhas.filter(([c]) => /(status|event|evento|situacao|state)$/.test(c) || /\.(status|event|evento)(\.|$)/.test(c)).map(([, v]) => v);
}

async function rpc(nome, args) {
  const url = `${process.env.SUPABASE_URL}/rest/v1/rpc/${nome}`;
  const chave = process.env.SUPABASE_SERVICE_KEY;
  const r = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", apikey: chave, Authorization: `Bearer ${chave}` },
    body: JSON.stringify(args),
  });
  if (!r.ok) throw new Error(`${nome}: ${r.status} ${await r.text()}`);
}

async function registrar(linha) {
  try {
    await fetch(`${process.env.SUPABASE_URL}/rest/v1/webhook_log`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: process.env.SUPABASE_SERVICE_KEY,
        Authorization: `Bearer ${process.env.SUPABASE_SERVICE_KEY}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify(linha),
    });
  } catch (e) { /* o log nunca derruba o webhook */ }
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ erro: "use POST" });
  const token = (req.query && req.query.token) || req.headers["x-webhook-token"] || "";
  if (!process.env.WEBHOOK_SECRET || token !== process.env.WEBHOOK_SECRET) return res.status(401).json({ erro: "token inválido" });
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_KEY) return res.status(500).json({ erro: "Supabase não configurado" });

  let corpo = req.body;
  if (typeof corpo === "string") { try { corpo = JSON.parse(corpo); } catch (e) { corpo = {}; } }
  corpo = corpo || {};

  let mapa = {};
  try { mapa = JSON.parse(process.env.ZUPTOS_PRODUTOS || "{}"); } catch (e) { return res.status(500).json({ erro: "ZUPTOS_PRODUTOS inválido" }); }
  const mapaMin = {};
  Object.keys(mapa).forEach((k) => { mapaMin[String(k).trim().toLowerCase()] = mapa[k]; });

  const folhas = achatar(corpo);
  const email = acharEmail(folhas);
  const status = acharStatus(folhas).join(" | ");
  const valores = new Set(folhas.map(([, v]) => v.trim().toLowerCase()));
  const produtos = [...new Set(Object.keys(mapaMin).filter((k) => valores.has(k)).map((k) => mapaMin[k]))];

  const revertido = REVERTIDO.test(status);
  const pago = !revertido && PAGO.test(status);
  let acao = "ignorado";

  try {
    if (!email) acao = "sem e-mail";
    else if (!produtos.length) acao = "produto não reconhecido";
    else if (revertido) {
      for (const p of produtos) await rpc("revogar_por_email", { p_email: email, p_produto: p });
      acao = "revogado: " + produtos.join(",");
    } else if (pago) {
      const origem = String((corpo.id || corpo.order_id || corpo.sale_id || corpo.transaction_id || "")).slice(0, 80) || null;
      for (const p of produtos) await rpc("liberar_por_email", { p_email: email, p_produto: p, p_origem: origem });
      acao = "liberado: " + produtos.join(",");
    } else acao = "status não tratado";
  } catch (e) {
    acao = "erro: " + e.message;
    await registrar({ evento: status, email, produto: produtos.join(","), acao, payload: corpo });
    return res.status(500).json({ erro: "falha ao gravar" });   // a Zuptos tenta de novo
  }

  await registrar({ evento: status, email, produto: produtos.join(","), acao, payload: corpo });
  return res.status(200).json({ ok: true, acao });
}

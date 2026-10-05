/* =========================================================
   POST /api/corrigir
   Recebe a foto da redação (base64), confere o código de acesso
   da "Correção por foto" e pede ao Claude uma correção nas 5
   competências do ENEM, em JSON.

   Variáveis de ambiente (Vercel → Settings → Environment Variables):
   - ANTHROPIC_API_KEY   (obrigatória) chave da API da Anthropic
   - CODIGOS_CORRECAO    (opcional) códigos extras aceitos, separados por vírgula
   - CORRECAO_MODELO     (opcional) troca o modelo; padrão claude-opus-5-5
   ========================================================= */
import Anthropic from "@anthropic-ai/sdk";
import { createHash } from "node:crypto";

/* hash SHA-256 do código da Correção por foto (o mesmo de shared/acesso.js) */
const HASHES_CORRECAO = [
  "3082b362e7ae5c0a3653272485f4602e43920a4afc2943519dc3c8c3f4839d61",
];

const TIPOS_ACEITOS = ["image/jpeg", "image/png", "image/webp"];
const MAX_BASE64 = 5 * 1024 * 1024; // limite de imagem da API

const client = new Anthropic();

function codigoValido(codigo) {
  const c = String(codigo || "").trim().toUpperCase();
  if (!c) return false;
  const extras = (process.env.CODIGOS_CORRECAO || "")
    .split(",").map((x) => x.trim().toUpperCase()).filter(Boolean);
  if (extras.includes(c)) return true;
  const h = createHash("sha256").update(c).digest("hex");
  return HASHES_CORRECAO.includes(h);
}

const SISTEMA = `Você é um corretor experiente de redações do ENEM. Você recebe a foto de uma redação manuscrita de um estudante e o tema proposto (quando informado).

Primeiro, transcreva o texto da foto com fidelidade, mantendo os erros do estudante. Se a imagem não for uma redação, estiver ilegível ou cortada a ponto de impedir a correção, marque "legivel" como false, explique o motivo em "motivo_ilegivel" e deixe os demais campos vazios.

Depois, avalie o texto pelas 5 competências da matriz oficial do ENEM, atribuindo a cada uma uma nota entre 0, 40, 80, 120, 160 ou 200:
1. Domínio da modalidade escrita formal da língua portuguesa.
2. Compreensão da proposta e aplicação de conceitos das várias áreas de conhecimento, dentro do tipo dissertativo-argumentativo (repertório legitimado, pertinente e produtivo; tangenciamento do tema).
3. Seleção, relação, organização e interpretação de informações e argumentos em defesa de um ponto de vista.
4. Conhecimento dos mecanismos linguísticos necessários para a construção da argumentação (coesão).
5. Proposta de intervenção detalhada, que respeite os direitos humanos (agente, ação, meio, finalidade e detalhamento).

Se o tema não for informado, deduza-o do próprio texto e avalie a competência 2 com cautela.

Seja exigente como a banca, mas didático: o estudante está se preparando para a prova. Escreva em português do Brasil, com frases curtas e claras.
- Em "erros", liste até 8 problemas concretos, citando o trecho exato da transcrição, a competência afetada, o problema e uma sugestão de reescrita.
- Em "pontos_fortes", até 3 acertos reais.
- Em "proxima_acao", a única coisa que mais aumentaria a nota na próxima redação.
- Em "paragrafo_reescrito", reescreva o parágrafo mais fraco do texto mantendo a ideia do estudante.`;

const SCHEMA = {
  type: "object",
  additionalProperties: false,
  required: ["legivel", "motivo_ilegivel", "tema_identificado", "transcricao", "competencias", "erros", "pontos_fortes", "proxima_acao", "paragrafo_reescrito"],
  properties: {
    legivel: { type: "boolean" },
    motivo_ilegivel: { type: "string" },
    tema_identificado: { type: "string" },
    transcricao: { type: "string" },
    competencias: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["numero", "nota", "comentario"],
        properties: {
          numero: { type: "integer", enum: [1, 2, 3, 4, 5] },
          nota: { type: "integer", enum: [0, 40, 80, 120, 160, 200] },
          comentario: { type: "string" },
        },
      },
    },
    erros: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["trecho", "competencia", "problema", "sugestao"],
        properties: {
          trecho: { type: "string" },
          competencia: { type: "integer", enum: [1, 2, 3, 4, 5] },
          problema: { type: "string" },
          sugestao: { type: "string" },
        },
      },
    },
    pontos_fortes: { type: "array", items: { type: "string" } },
    proxima_acao: { type: "string" },
    paragrafo_reescrito: { type: "string" },
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ erro: "Use POST." });
  }

  const { codigo, tema, imagem } = req.body || {};
  if (!codigoValido(codigo)) {
    return res.status(403).json({ erro: "Código de acesso da correção inválido." });
  }

  const m = /^data:(image\/[a-z]+);base64,(.+)$/i.exec(String(imagem || ""));
  if (!m || !TIPOS_ACEITOS.includes(m[1].toLowerCase())) {
    return res.status(400).json({ erro: "Envie uma foto em JPG, PNG ou WEBP." });
  }
  const mediaType = m[1].toLowerCase();
  const dados = m[2];
  if (dados.length > MAX_BASE64) {
    return res.status(413).json({ erro: "A foto ficou grande demais. Tente de novo com outra foto." });
  }

  const temaTxt = String(tema || "").trim().slice(0, 300);

  try {
    const response = await client.beta.messages.create({
      model: process.env.CORRECAO_MODELO || "claude-opus-5-5",
      max_tokens: 12000,
      betas: ["server-side-fallback-2026-07-01"],
      fallbacks: "default",
      output_config: {
        effort: "medium",
        format: { type: "json_schema", schema: SCHEMA },
      },
      system: SISTEMA,
      messages: [
        {
          role: "user",
          content: [
            { type: "image", source: { type: "base64", media_type: mediaType, data: dados } },
            { type: "text", text: temaTxt ? `Tema proposto: ${temaTxt}` : "Tema não informado." },
          ],
        },
      ],
    });

    if (response.stop_reason === "refusal") {
      return res.status(422).json({ erro: "Não foi possível corrigir esta imagem. Tente outra foto." });
    }
    if (response.stop_reason === "max_tokens") {
      return res.status(502).json({ erro: "A correção ficou incompleta. Tente de novo." });
    }

    const bloco = response.content.find((b) => b.type === "text");
    if (!bloco) return res.status(502).json({ erro: "Resposta vazia. Tente de novo." });

    const resultado = JSON.parse(bloco.text);
    return res.status(200).json(resultado);
  } catch (error) {
    if (error instanceof Anthropic.RateLimitError) {
      return res.status(429).json({ erro: "Muita gente corrigindo agora. Tente em 1 minuto." });
    }
    if (error instanceof Anthropic.AuthenticationError) {
      console.error("ANTHROPIC_API_KEY ausente ou inválida");
      return res.status(500).json({ erro: "Correção indisponível no momento." });
    }
    if (error instanceof Anthropic.APIError) {
      console.error(`Erro da API ${error.status}:`, error.message);
      return res.status(502).json({ erro: "Correção indisponível no momento. Tente de novo." });
    }
    if (error instanceof SyntaxError) {
      console.error("JSON inválido na resposta da correção");
      return res.status(502).json({ erro: "A correção veio com erro. Tente de novo." });
    }
    console.error(error);
    return res.status(500).json({ erro: "Erro inesperado. Tente de novo." });
  }
}

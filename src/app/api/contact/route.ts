import { Resend } from "resend";
import type { QuoteData } from "@/lib/quote";

export const runtime = "nodejs";

const requiredFields: (keyof QuoteData)[] = [
  "name",
  "whatsapp",
  "email",
  "projectType",
  "investment",
  "deadline",
  "description",
];

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isQuoteData(value: unknown): value is QuoteData {
  if (!value || typeof value !== "object") return false;
  const data = value as Record<string, unknown>;
  return (
    requiredFields.every((field) => typeof data[field] === "string" && data[field].trim()) &&
    typeof data.company === "string" &&
    /^\S+@\S+\.\S+$/.test(data.email as string) &&
    (data.whatsapp as string).replace(/\D/g, "").length >= 10 &&
    (data.description as string).trim().length >= 20
  );
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    console.error("Resend não configurado: verifique RESEND_API_KEY, CONTACT_EMAIL e RESEND_FROM_EMAIL.");
    return Response.json({ error: "Serviço de e-mail não configurado." }, { status: 503 });
  }

  try {
    const body: unknown = await request.json();
    if (!isQuoteData(body)) {
      return Response.json({ error: "Dados do formulário inválidos." }, { status: 400 });
    }

    const data = body;
    const safe = Object.fromEntries(
      Object.entries(data).map(([key, value]) => [key, escapeHtml(value.trim())]),
    ) as Record<keyof QuoteData, string>;

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: data.email,
      subject: `Novo orçamento: ${data.projectType} — ${data.name}`,
      html: `
        <h1>Nova solicitação de orçamento</h1>
        <p><strong>Nome:</strong> ${safe.name}</p>
        <p><strong>Empresa:</strong> ${safe.company || "Não informada"}</p>
        <p><strong>WhatsApp:</strong> ${safe.whatsapp}</p>
        <p><strong>E-mail:</strong> ${safe.email}</p>
        <p><strong>Tipo de projeto:</strong> ${safe.projectType}</p>
        <p><strong>Investimento:</strong> ${safe.investment}</p>
        <p><strong>Prazo:</strong> ${safe.deadline}</p>
        <p><strong>Descrição:</strong></p>
        <p>${safe.description.replaceAll("\n", "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Erro do Resend:", error);
      return Response.json({ error: "Não foi possível enviar o e-mail." }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Erro ao enviar contato:", error);
    return Response.json({ error: "Não foi possível enviar o e-mail." }, { status: 500 });
  }
}

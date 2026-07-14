"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { CheckCircle2, LoaderCircle, Send } from "lucide-react";
import { trackLead } from "@/components/shared/analytics";
import { whatsappUrl } from "@/constants/site";
import type { QuoteData } from "@/lib/quote";

const initial: QuoteData = {
  name: "", company: "", whatsapp: "", email: "", projectType: "",
  investment: "", deadline: "", description: "",
};
const projects = ["Landing page", "Site institucional", "Sistema web", "E-commerce", "Dashboard", "Automação", "Outro"];
const investments = ["Até R$ 1.000", "De R$ 1.000 a R$ 2.500", "De R$ 2.500 a R$ 5.000", "Acima de R$ 5.000", "Ainda não defini"];
const fieldClass = "mt-2 min-h-12 w-full rounded-xl border border-white/10 bg-[#080d17] px-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500";

export function QuoteForm() {
  const [data, setData] = useState(initial);
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const update = (key: keyof QuoteData, value: string) => setData((current) => ({ ...current, [key]: value }));
  const error = (key: string) => errors[key] ? <p className="mt-1 text-xs text-rose-400">{errors[key]}</p> : null;

  async function submit(event: FormEvent) {
    event.preventDefault();
    const next: Record<string, string> = {};
    if (!data.name.trim()) next.name = "Informe seu nome.";
    if (!/^\S+@\S+\.\S+$/.test(data.email)) next.email = "Informe um e-mail válido.";
    if (data.whatsapp.replace(/\D/g, "").length < 10) next.whatsapp = "Informe um WhatsApp válido.";
    if (!data.projectType) next.projectType = "Selecione o tipo de projeto.";
    if (!data.investment) next.investment = "Selecione uma faixa.";
    if (!data.deadline.trim()) next.deadline = "Informe o prazo desejado.";
    if (data.description.trim().length < 20) next.description = "Conte um pouco mais sobre o projeto (mínimo 20 caracteres).";
    if (!consent) next.consent = "Você precisa concordar com a Política de Privacidade.";
    setErrors(next);
    if (Object.keys(next).length) return;

    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Falha no envio");

      trackLead("quote_form_email");
      setSent(true);
      setData(initial);
      setConsent(false);
    } catch {
      setErrors({ form: "Não foi possível enviar agora. Você ainda pode solicitar pelo WhatsApp." });
    } finally {
      setLoading(false);
    }
  }

  if (sent) return (
    <div className="rounded-2xl border border-emerald-400/20 bg-[#0c1320] p-8 text-center" role="status">
      <CheckCircle2 className="mx-auto size-10 text-emerald-400" aria-hidden />
      <h3 className="mt-4 text-xl font-semibold text-white">Solicitação enviada!</h3>
      <p className="mt-2 text-sm text-slate-400">Recebemos seus dados e entraremos em contato em breve.</p>
      <button type="button" onClick={() => setSent(false)} className="mt-6 text-sm font-semibold text-blue-400 hover:text-blue-300">Enviar outra solicitação</button>
    </div>
  );

  return (
    <form onSubmit={submit} noValidate className="rounded-2xl border border-white/10 bg-[#0c1320] p-5 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm text-slate-300">Nome *<input className={fieldClass} value={data.name} onChange={(e) => update("name", e.target.value)} aria-invalid={!!errors.name}/>{error("name")}</label>
        <label className="text-sm text-slate-300">Empresa <span className="text-slate-600">(opcional)</span><input className={fieldClass} value={data.company} onChange={(e) => update("company", e.target.value)}/></label>
        <label className="text-sm text-slate-300">WhatsApp *<input className={fieldClass} inputMode="tel" value={data.whatsapp} onChange={(e) => update("whatsapp", e.target.value)} aria-invalid={!!errors.whatsapp}/>{error("whatsapp")}</label>
        <label className="text-sm text-slate-300">E-mail *<input className={fieldClass} type="email" value={data.email} onChange={(e) => update("email", e.target.value)} aria-invalid={!!errors.email}/>{error("email")}</label>
        <label className="text-sm text-slate-300">Tipo de projeto *<select className={fieldClass} value={data.projectType} onChange={(e) => update("projectType", e.target.value)}><option value="">Selecione</option>{projects.map((item) => <option key={item}>{item}</option>)}</select>{error("projectType")}</label>
        <label className="text-sm text-slate-300">Faixa de investimento *<select className={fieldClass} value={data.investment} onChange={(e) => update("investment", e.target.value)}><option value="">Selecione</option>{investments.map((item) => <option key={item}>{item}</option>)}</select>{error("investment")}</label>
        <label className="text-sm text-slate-300 sm:col-span-2">Prazo desejado *<input className={fieldClass} placeholder="Ex.: 30 dias" value={data.deadline} onChange={(e) => update("deadline", e.target.value)}/>{error("deadline")}</label>
        <label className="text-sm text-slate-300 sm:col-span-2">Descrição do projeto *<textarea className={`${fieldClass} min-h-32 py-3`} placeholder="O que você precisa construir?" value={data.description} onChange={(e) => update("description", e.target.value)}/>{error("description")}</label>
      </div>
      <label className="mt-5 flex items-start gap-3 text-xs leading-5 text-slate-400"><input type="checkbox" className="mt-1 size-4 accent-blue-500" checked={consent} onChange={(e) => setConsent(e.target.checked)}/><span>Concordo com o tratamento dos dados para retorno do contato, conforme a <Link href="/politica-de-privacidade" className="text-blue-400 underline">Política de Privacidade</Link>.</span></label>
      {error("consent")}
      {errors.form && <p className="mt-5 text-center text-sm text-rose-400" role="alert">{errors.form} <Link href={whatsappUrl()} target="_blank" className="font-semibold underline">Abrir WhatsApp</Link></p>}
      <button disabled={loading} className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-blue-500 px-6 text-sm font-semibold text-white transition hover:bg-blue-400 disabled:opacity-60">
        {loading ? <LoaderCircle className="size-4 animate-spin"/> : <Send className="size-4"/>}
        {loading ? "Enviando..." : "Enviar solicitação"}
      </button>
    </form>
  );
}

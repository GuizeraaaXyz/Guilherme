import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { QuoteForm } from "./quote-form";
export function Contact(){return <section id="orcamento" className="scroll-mt-24 border-t border-white/8 bg-[radial-gradient(circle_at_15%_30%,rgba(37,99,235,.13),transparent_30%)] py-24 sm:py-32"><Container className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]"><div><SectionHeading eyebrow="Seu próximo projeto" title="Vamos transformar sua ideia em realidade?" description="Conte um pouco sobre o seu projeto e receba uma análise inicial sem compromisso."/><p className="mt-7 text-sm text-slate-500">Resposta rápida, atendimento direto e orçamento personalizado.</p></div><QuoteForm/></Container></section>}

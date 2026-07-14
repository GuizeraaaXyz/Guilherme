import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
export function Credibility() { return <section aria-label="Diferenciais" className="border-y border-white/8 bg-white/[.02]"><Container className="grid grid-cols-2 gap-x-5 gap-y-4 py-6 md:grid-cols-5">{["Projetos personalizados","Código moderno","Layout responsivo","Comunicação direta","Soluções escaláveis"].map(x=><div key={x} className="flex items-center gap-2 text-xs text-slate-300 sm:text-sm"><CheckCircle2 className="size-4 shrink-0 text-blue-400"/>{x}</div>)}</Container></section>; }

"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqs } from "@/data/content";
export function FAQ(){const [open,setOpen]=useState<number|null>(0);return <section id="faq" className="scroll-mt-24 py-24 sm:py-32"><Container className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]"><SectionHeading eyebrow="FAQ" title="Perguntas frequentes." description="As respostas mais importantes antes de tirar sua ideia do papel."/><div>{faqs.map(([q,a],i)=>{const active=open===i;return <div key={q} className="border-b border-white/10"><h3><button type="button" onClick={()=>setOpen(active?null:i)} className="flex w-full items-center justify-between gap-5 py-5 text-left font-medium text-white focus-visible:outline-2 focus-visible:outline-blue-400" aria-expanded={active} aria-controls={`faq-${i}`}>{q}<ChevronDown className={`size-5 shrink-0 text-slate-500 transition ${active?"rotate-180":""}`}/></button></h3><div id={`faq-${i}`} className={`grid transition-[grid-template-rows] duration-300 ${active?"grid-rows-[1fr]":"grid-rows-[0fr]"}`}><div className="overflow-hidden"><p className="pb-5 pr-8 text-sm leading-6 text-slate-400">{a}</p></div></div></div>})}</div></Container></section>}

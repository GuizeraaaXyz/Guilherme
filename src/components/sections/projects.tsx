import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/content";
import { whatsappUrl } from "@/constants/site";
import Link from "next/link";
import { ProjectGallery } from "./project-gallery";

function Mockup({ index }: { index: number }) { return <div className="aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-[#0c1423] p-3"><div className="flex h-full overflow-hidden rounded-lg border border-white/8 bg-[#080d17]"><div className="w-1/5 border-r border-white/8 p-2"><div className="h-5 w-5 rounded bg-blue-500"/>{[1,2,3,4].map(i=><div key={i} className="mt-3 h-2 rounded bg-white/8"/>)}</div><div className="flex-1 p-3"><div className="h-3 w-2/5 rounded bg-white/15"/><div className="mt-4 grid grid-cols-3 gap-2">{[1,2,3].map(i=><div key={i} className="h-9 rounded bg-white/5"/>)}</div><div className="mt-3 flex h-[55%] items-end gap-1 rounded bg-white/[.03] p-3">{[40,70,55,90,65,80].map((h,i)=><div key={i} className="flex-1 rounded-t bg-blue-500/70" style={{height:`${(h+index*4)%95}%`}}/>)}</div></div></div></div>; }

function ProjectCover({ project, index }: { project: (typeof projects)[number]; index: number }) {
  if (project.images.length === 0) return <Mockup index={index} />;

  return <ProjectGallery images={project.images} title={project.title} />;
}

export function Projects() { return <section id="projetos" className="scroll-mt-24 py-24 sm:py-32"><Container><SectionHeading eyebrow="Portfólio conceitual" title="Projetos que mostram o que podemos construir." description="Exemplos demonstrativos de aplicações digitais. Cada solução real é planejada de acordo com o contexto e os objetivos do cliente."/><div className="mt-14 grid gap-6 md:grid-cols-2">{projects.map((p,i)=><article key={p.title} className="rounded-2xl border border-white/8 bg-white/[.025] p-3 transition hover:border-white/15"><ProjectCover project={p} index={i}/><div className="p-4 sm:p-5"><p className="text-xs font-bold uppercase tracking-[.16em] text-blue-400">{p.category}</p><h3 className="mt-3 text-xl font-semibold text-white">{p.title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{p.description}</p><div className="mt-5 flex flex-wrap gap-2">{p.tech.map(t=><span key={t} className="rounded-full border border-white/8 px-3 py-1 text-[11px] text-slate-400">{t}</span>)}</div><div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">{p.projectUrl && <Link href={p.projectUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition hover:text-blue-300">Acessar projeto ao vivo <ArrowUpRight className="size-4"/></Link>}<Link href={whatsappUrl(`Olá! Gostaria de solicitar um projeto parecido com: ${p.title}.`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-blue-400">Solicitar projeto parecido <ArrowUpRight className="size-4"/></Link></div></div></article>)}</div></Container></section>; }

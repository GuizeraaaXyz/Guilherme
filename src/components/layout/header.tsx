"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/content";
import { siteConfig, whatsappUrl } from "@/constants/site";
import { Container } from "@/components/ui/container";
import { BrandLogo } from "@/components/shared/brand-logo";

export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-[#070b14]/80 backdrop-blur-xl">
    <Container className="flex h-18 items-center justify-between">
      <Link href="/" aria-label={`${siteConfig.name}, início`}><BrandLogo className="w-[158px] sm:w-[180px]" preload /></Link>
      <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">{navLinks.map(([label, href]) => <Link key={href} href={href} className="text-sm text-slate-300 transition hover:text-white">{label}</Link>)}<Link href={whatsappUrl()} target="_blank" className="rounded-full bg-blue-500 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-400">Solicitar orçamento</Link></nav>
      <button type="button" onClick={() => setOpen(!open)} className="grid size-11 place-items-center rounded-xl border border-white/10 text-white lg:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Fechar menu" : "Abrir menu"}>{open ? <X /> : <Menu />}</button>
    </Container>
    {open && <div id="mobile-menu" className="h-[calc(100dvh-4.5rem)] border-t border-white/8 bg-[#070b14] lg:hidden"><Container className="flex h-full flex-col py-8"><nav className="flex flex-col" aria-label="Navegação mobile">{navLinks.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="border-b border-white/8 py-5 text-xl font-medium text-white">{label}</Link>)}</nav><Link href={whatsappUrl()} target="_blank" className="mt-auto rounded-full bg-blue-500 px-5 py-4 text-center font-semibold text-white">Solicitar orçamento</Link></Container></div>}
  </header>;
}

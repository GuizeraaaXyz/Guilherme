import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/constants/site";
export function FloatingWhatsApp() { return <Link href={whatsappUrl()} target="_blank" aria-label="Falar com a Francheto Digital pelo WhatsApp" className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-500/30 transition hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400"><MessageCircle aria-hidden /></Link>; }

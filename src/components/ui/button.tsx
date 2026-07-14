import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = { href: string; children: React.ReactNode; variant?: "primary" | "secondary"; className?: string; external?: boolean };
export function ButtonLink({ href, children, variant = "primary", className, external }: Props) {
  return <Link href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className={cn("group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400", variant === "primary" ? "bg-blue-500 text-white shadow-[0_12px_40px_-12px_rgba(59,130,246,.75)] hover:bg-blue-400" : "border border-white/15 bg-white/5 text-white hover:border-white/30 hover:bg-white/10", className)}>
    {children}<ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
  </Link>;
}

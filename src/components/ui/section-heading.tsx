import { cn } from "@/lib/utils";
export function SectionHeading({ eyebrow, title, description, className }: { eyebrow: string; title: string; description?: string; className?: string }) {
  return <div className={cn("max-w-2xl", className)}><p className="mb-4 text-xs font-bold uppercase tracking-[.22em] text-blue-400">{eyebrow}</p><h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>{description && <p className="mt-5 text-pretty text-base leading-7 text-slate-400 sm:text-lg">{description}</p>}</div>;
}

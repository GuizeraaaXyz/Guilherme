import { MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { whatsappUrl } from "@/constants/site";
export function WhatsAppButton({ children = "Solicitar orçamento", className }: { children?: React.ReactNode; className?: string }) { return <ButtonLink href={whatsappUrl()} external className={className}><MessageCircle className="size-4" aria-hidden />{children}</ButtonLink>; }

import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/constants/site";
import { Analytics } from "@/components/shared/analytics";
export const metadata:Metadata={metadataBase:new URL(siteConfig.url),title:{default:"Francheto Digital | Landing Pages, Sites e Sistemas Web",template:"%s | Francheto Digital"},description:siteConfig.description,alternates:{canonical:"/"},openGraph:{type:"website",locale:"pt_BR",url:"/",siteName:siteConfig.name,title:"Francheto Digital | Landing Pages, Sites e Sistemas Web",description:siteConfig.description},twitter:{card:"summary_large_image",title:"Francheto Digital | Landing Pages, Sites e Sistemas Web",description:siteConfig.description},robots:{index:true,follow:true},manifest:"/manifest.webmanifest"};
export const viewport:Viewport={themeColor:"#070b14",colorScheme:"dark"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body><a href="#conteudo" className="sr-only z-[100] rounded bg-white p-3 text-black focus:not-sr-only focus:fixed focus:left-3 focus:top-3">Pular para o conteúdo</a>{children}<Analytics/></body></html>}

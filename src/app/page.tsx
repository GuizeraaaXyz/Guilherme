import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/shared/floating-whatsapp";
import { Hero } from "@/components/sections/hero";
import { Credibility } from "@/components/sections/credibility";
import { Services } from "@/components/sections/services";
import { Benefits } from "@/components/sections/benefits";
import { Projects } from "@/components/sections/projects";
import { Process } from "@/components/sections/process";
import { About } from "@/components/sections/about";
import { Commitments } from "@/components/sections/commitments";
import { FAQ } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { faqs } from "@/data/content";
import { siteConfig } from "@/constants/site";
export default function Home(){const jsonLd=[{"@context":"https://schema.org","@type":"ProfessionalService",name:siteConfig.name,url:siteConfig.url,email:siteConfig.email,areaServed:"BR",description:siteConfig.description,address:{"@type":"PostalAddress",addressLocality:"Catanduva",addressRegion:"SP",addressCountry:"BR"}},{"@context":"https://schema.org","@type":"WebSite",name:siteConfig.name,url:siteConfig.url},{"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(([q,a])=>({"@type":"Question",name:q,acceptedAnswer:{"@type":"Answer",text:a}}))}];return <><Header/><main id="conteudo"><Hero/><Credibility/><Services/><Benefits/><Projects/><Process/><About/><Commitments/><FAQ/><Contact/></main><Footer/><FloatingWhatsApp/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd).replace(/</g,"\\u003c")}}/></>}

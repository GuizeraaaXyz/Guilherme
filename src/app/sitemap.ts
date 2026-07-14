import type { MetadataRoute } from "next";
import { siteConfig } from "@/constants/site";
export default function sitemap():MetadataRoute.Sitemap{return ["","/politica-de-privacidade","/termos-de-uso"].map(path=>({url:`${siteConfig.url}${path}`,lastModified:new Date(),changeFrequency:path?"yearly":"monthly",priority:path?0.1:1}))}

export const siteConfig = {
  name: "Francheto Digital",
  slogan: "Transformando sua ideia em soluções digitais.",
  description: "Criação de landing pages, sites institucionais, sistemas web, dashboards, e-commerces e automações sob medida.",
  url: "https://franchetodigital.com.br",
  whatsapp: "5517996662727",
  whatsappMessage: "Olá! Vi o site da Francheto Digital e gostaria de solicitar um orçamento para um projeto.",
  email: "guilhermewebdeveloper2023@gmail.com",
  instagram: "",
  github: "",
  location: "Catanduva, São Paulo — atendimento online para todo o Brasil.",
} as const;

export function whatsappUrl(message: string = siteConfig.whatsappMessage) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

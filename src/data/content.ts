import { BarChart3, Bot, Code2, Gauge, Globe2, LayoutTemplate, ShoppingBag, Smartphone } from "lucide-react";

export const services = [
  { icon: LayoutTemplate, title: "Landing Pages", description: "Páginas estratégicas e rápidas, desenvolvidas para apresentar sua oferta e transformar visitantes em clientes." },
  { icon: Globe2, title: "Sites Institucionais", description: "Sites profissionais para fortalecer a presença digital e transmitir confiança aos seus clientes." },
  { icon: Code2, title: "Sistemas Web", description: "Sistemas personalizados para organizar processos, clientes, pedidos, filas, equipes e operações." },
  { icon: BarChart3, title: "Dashboards", description: "Painéis administrativos modernos para visualizar dados, indicadores e informações importantes." },
  { icon: ShoppingBag, title: "E-commerces", description: "Lojas virtuais responsivas e preparadas para uma experiência de compra simples e profissional." },
  { icon: Bot, title: "Automações e Integrações", description: "Integrações com APIs, WhatsApp, bancos de dados e serviços externos para reduzir tarefas manuais." },
];

export const benefits = ["Design pensado para conversão", "Boa experiência em celular", "Carregamento rápido", "SEO técnico básico", "Estrutura escalável", "Segurança e boas práticas", "Código organizado", "Suporte após a entrega"];

export const projects = [
  {
    title: "Dashboard de Gestão Empresarial",
    projectUrl: null,
    category: "Exemplo de aplicação",
    description: "Painel para acompanhamento de vendas, pedidos, clientes, estoque e indicadores.",
    tech: ["React", "TypeScript", "Supabase", "Gráficos"],
    images: [
      {
        src: "/projetos/dashboard-gestao.png",
        alt: "Dashboard de gestão empresarial com vendas, pedidos, clientes e estoque",
      },
      {
        src: "/projetos/dashboard-gestao-2.png",
        alt: "Dashboard de gestão empresarial com vendas, pedidos, clientes e estoque",
      },
      {
        src: "/projetos/dashboard-gestao-3.png",
        alt: "Dashboard de gestão empresarial com vendas, pedidos, clientes e estoque",
      },
      {
        src: "/projetos/dashboard-gestao-4.png",
        alt: "Dashboard de gestão empresarial com vendas, pedidos, clientes e estoque",
      },
      {
        src: "/projetos/dashboard-gestao-5.png",
        alt: "Dashboard de gestão empresarial com vendas, pedidos, clientes e estoque",
      },
      {
        src: "/projetos/dashboard-gestao-6.png",
        alt: "Dashboard de gestão empresarial com vendas, pedidos, clientes e estoque",
      }
    ],
  },
  {
    title: "Landing Page para Negócio Local",
    projectUrl: "https://cgs-representacao.github.io/Catalogos/",
    category: "Solução demonstrativa",
    description: "Página focada em gerar contatos e apresentar serviços de forma clara e profissional.",
    tech: ["Next.js", "Tailwind CSS", "SEO"],
    images: [
      {
        src: "/projetos/CGS.png",
        alt: "Dashboard de gestão empresarial com vendas, pedidos, clientes e estoque",
      },
      {
        src: "/projetos/CGS-2.png",
        alt: "Dashboard de gestão empresarial com vendas, pedidos, clientes e estoque",
      },
      {
        src: "/projetos/CGS-3.png",
        alt: "Dashboard de gestão empresarial com vendas, pedidos, clientes e estoque",
      },
      {
        src: "/projetos/CGS-4.png",
        alt: "Dashboard de gestão empresarial com vendas, pedidos, clientes e estoque",
      },
      {
        src: "/projetos/CGS-5.png",
        alt: "Dashboard de gestão empresarial com vendas, pedidos, clientes e estoque",
      },
      {
        src: "/projetos/CGS-6.png",
        alt: "Dashboard de gestão empresarial com vendas, pedidos, clientes e estoque",
      },
    ],
  },
  {
    title: "Sistema de Fila para Barbearia",
    projectUrl: null,
    category: "Conceito de sistema",
    description: "Cadastro de clientes, controle da fila, atendimento e integração com WhatsApp.",
    tech: ["Next.js", "Supabase", "TypeScript", "WhatsApp"],
    images: [],
  },
  {
    title: "E-commerce de Moda Masculina",
    projectUrl: null,
    category: "Projeto demonstrativo",
    description: "Loja virtual com catálogo de produtos, carrinho, pedidos e painel administrativo.",
    tech: ["Next.js", "PostgreSQL", "Tailwind CSS"],
    images: [],
  }
];

export const faqs = [
  ["Quanto custa desenvolver um projeto?", "O valor depende do tipo de projeto, quantidade de páginas, funcionalidades e nível de personalização. Após entender sua necessidade, preparamos um orçamento claro e sem compromisso."],
  ["Quanto tempo demora?", "Landing pages simples podem ser entregues em poucos dias. Sites e sistemas personalizados precisam de um prazo maior, definido de acordo com o escopo."],
  ["Vocês oferecem suporte?", "Sim. O suporte pode ser incluído após a entrega para atualizações, correções e melhorias."],
  ["O site funciona no celular?", "Sim. Todos os projetos são desenvolvidos para funcionar em celulares, tablets e computadores."],
  ["Vocês cuidam da publicação?", "Sim. Podemos configurar domínio, hospedagem, banco de dados e publicação do projeto."],
  ["Posso solicitar alterações?", "Sim. Durante o desenvolvimento, realizamos etapas de validação para ajustar o projeto antes da entrega."],
  ["Vocês fazem manutenção mensal?", "Sim. Também é possível contratar planos de manutenção, suporte e evolução contínua."],
  ["Vocês atendem empresas de qualquer cidade?", "Sim. Todo o processo pode ser realizado de forma online."],
] as const;

export const navLinks = [
  ["Serviços", "#servicos"], ["Projetos", "#projetos"], ["Processo", "#processo"], ["Sobre", "#sobre"], ["FAQ", "#faq"],
] as const;

export const technologies = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Supabase", "PostgreSQL", "Vercel", "GitHub"];

export const highlights = [
  { icon: Gauge, label: "Entrega ágil" }, { icon: Smartphone, label: "Design responsivo" }, { icon: Code2, label: "Sob medida" },
];

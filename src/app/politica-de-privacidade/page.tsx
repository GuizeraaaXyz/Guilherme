import type { Metadata } from "next";
import { LegalLayout } from "@/components/layout/legal-layout";
import { siteConfig } from "@/constants/site";
export const metadata:Metadata={title:"Política de Privacidade",description:"Política de Privacidade da Francheto Digital.",alternates:{canonical:"/politica-de-privacidade"}};
const sections=[
["1. Dados coletados","Podemos receber dados fornecidos por você em formulários ou contatos, como nome, empresa, telefone, e-mail, tipo de projeto e informações incluídas na mensagem."],
["2. WhatsApp e canais externos","Ao iniciar contato pelo WhatsApp, seus dados também ficam sujeitos às políticas da plataforma. Utilizamos as informações para responder à solicitação, elaborar orçamento e manter comunicações relacionadas ao serviço."],
["3. Cookies e ferramentas de análise","O site pode usar cookies essenciais para funcionamento e, quando configuradas, ferramentas como Google Analytics e Google Ads para medir acessos, desempenho e campanhas. Ferramentas opcionais só serão carregadas quando devidamente configuradas e devem respeitar a legislação aplicável."],
["4. Uso e armazenamento","Os dados são utilizados para atendimento, elaboração de propostas, execução de serviços e segurança. Eles serão mantidos somente pelo período necessário para essas finalidades, obrigações legais ou exercício regular de direitos."],
["5. Compartilhamento","Não comercializamos dados pessoais. Informações podem ser tratadas por fornecedores de infraestrutura, hospedagem, analytics e comunicação, na medida necessária à prestação dos serviços."],
["6. Direitos do usuário","Você pode solicitar confirmação de tratamento, acesso, correção, anonimização, eliminação ou informações sobre compartilhamento, observadas as hipóteses e limites da legislação aplicável."],
["7. Segurança e alterações","Adotamos medidas razoáveis de segurança, embora nenhum ambiente digital seja totalmente livre de riscos. Esta política pode ser atualizada para refletir mudanças no site, serviços ou requisitos legais."],
];
export default function Privacy(){return <LegalLayout title="Política de Privacidade" updated="12 de julho de 2026">{sections.map(([t,p])=><section key={t}><h2 className="text-xl font-semibold text-white">{t}</h2><p className="mt-3">{p}</p></section>)}<section><h2 className="text-xl font-semibold text-white">8. Canal de contato</h2><p className="mt-3">Para dúvidas ou solicitações relacionadas à privacidade, entre em contato pelo e-mail <a className="text-blue-400 underline" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</p></section></LegalLayout>}

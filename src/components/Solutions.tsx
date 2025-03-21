import { useLanguage } from "../context/LanguageContext";
import Card from "./Card";

function Solutions() {
  const { language } = useLanguage();

  return (
    <div
      className="flex flex-col items-center max-w-screen h-[95rem] mt-20"
      id="solutions"
    >
      <div className="flex flex-row items-center justify-evenly align-text-top">
        <div className="w-[30rem]">
          <h1 className="uppercase text-xl font-alvar-bold mb-4">
            {language === "pt" ? "SOLUÇÕES" : "SOLUTIONS"}{" "}
            <span className="text-secundaryRed">- MASTER OCEAN ANGOLA</span>
          </h1>
          <h1 className="text-6xl font-alvar-bold tracking-tighter">
            {language === "pt" ? "NOSSAS SOLUÇÕES" : "OUR SOLUTIONS"}
          </h1>
        </div>

        <div className="w-[38rem] font-alvar-light text-2xl">
          {language === "pt"
            ? "A MASTEROCEAN é reconhecida pela sua capacidade de fornecer soluções personalizadas para os desafios complexos dos sectores de energia, petróleo e gás, entre outros."
            : "MASTEROCEAN is recognized for its ability to provide customized solutions for the complex challenges of the energy, oil, and gas sectors, among others."}
          <br />
          {language === "pt"
            ? "Alguns dos nossos serviços incluem:"
            : "Some of our services include:"}
        </div>
      </div>

      <div className="flex flex-row pt-44 gap-5 pb-10">
        <div className="flex flex-col gap-10">
          <Card
            width="750px"
            height="400px"
            backgroundImage="/src/assets/esqCima.jpg"
            texth1={
              language === "pt"
                ? "Consultoria Estratégica no Sector de Petróleo e Gás:"
                : "Strategic Consulting in the Oil and Gas Sector:"
            }
            textp={
              language === "pt"
                ? "Análises de mercado\nIdentificação de oportunidades de negócios\nDesenvolvimento de planos estratégicos\nConsultoria em Tecnologia de Informação"
                : "Market analysis\nIdentification of business opportunities\nDevelopment of strategic plans\nIT Consulting"
            }
            paddingTop="100px"
          />

          <Card
            width="750px"
            height="400px"
            backgroundImage="/src/assets/esqBaixo.jpg"
            texth1={
              language === "pt"
                ? "Logística, Procurement e Suporte Operacional"
                : "Logistics, Procurement, and Operational Support"
            }
            textp={
              language === "pt"
                ? "Soluções para transporte de carga e pessoal offshore\nServiços de transporte personalizado\nGestão de frota naval e terrestre\nSuporte e agenciamento de cargas\nGestão de toda a cadeia de aprovisionamento de bens e serviços\nProcurement suporte"
                : "Solutions for offshore cargo and personnel transport\nCustom transportation services\nNaval and land fleet management\nCargo support and agency services\nComplete supply chain management of goods and services\nProcurement support"
            }
            paddingTop="100px"
          />
        </div>

        <div className="pt[349px]">
          <Card
            width="750px"
            height="100%"
            backgroundImage="/src/assets/dir.jpg"
            texth1={
              language === "pt"
                ? "Serviços de Engenharia e Manutenção:"
                : "Engineering and Maintenance Services:"
            }
            textp={
              language === "pt"
                ? "Serviços de Engenharia para todo o tipo de infraestruturas - Energia, Petróleo e Gás\nGestão de Projetos - EPCI\nServiços de Pintura e Revestimento\nFabricação Metalomecânica - Onshore e Offshore\nServiços de inspeção com Drones\nServiços de Gestão de Construção\nServiços de Proteção Catódica"
                : "Engineering services for all types of infrastructure - Energy, Oil and Gas\nProject Management - EPCI\nPainting and Coating Services\nMetalworking Manufacturing - Onshore and Offshore\nDrone Inspection Services\nConstruction Management Services\nCathodic Protection Services"
            }
            paddingTop="490px"
          />
        </div>
      </div>

      <a href="#contact">
        <button className="text-white font-alvar-bold px-8 h-12 uppercase bg-primaryRed cursor-pointer rounded-[3.5rem] text-xl">
          {language === "pt" ? "ENTRAR EM CONTATO" : "CONTACT US"}
        </button>
      </a>
    </div>
  );
}

export default Solutions;

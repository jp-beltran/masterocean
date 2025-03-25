import { useLanguage } from "../context/LanguageContext";
import Card from "./Card";
import HSE from "./HSE";
import esqCima from "../assets/esqCima.jpg";
import esqBaixo from "../assets/esqBaixo.jpg";
import dir from "../assets/dir.jpg";

function Solutions() {
  const { language } = useLanguage();

  return (
    <div
      className="flex flex-col items-center max-w-screen h-auto mt-20 px-4"
      id="solutions"
    >
      <div className="flex flex-col lg:flex-row items-center justify-evenly gap-10 w-full max-w-7xl">
        <div className="lg:w-[30rem] w-full">
          <h1 className="uppercase text-xl font-alvar-bold mb-4">
            {language === "pt" ? "SOLUÇÕES" : "SOLUTIONS"}{" "}
            <span className="text-secundaryRed">- MASTER OCEAN ANGOLA</span>
          </h1>
          <h1 className="text-6xl font-alvar-bold tracking-tighter">
            {language === "pt" ? "NOSSAS SOLUÇÕES" : "OUR SOLUTIONS"}
          </h1>
        </div>

        <div className="lg:w-[38rem] w-full font-alvar-light text-2xl">
          {language === "pt" ? (
            <>
              A <span className="font-alvar-bold">MASTEROCEAN</span> é
              reconhecida pela sua capacidade de fornecer soluções
              personalizadas para os desafios complexos dos sectores de energia,
              petróleo e gás, entre outros. <br />
              Alguns dos nossos serviços incluem:
            </>
          ) : (
            <>
              <span className="font-alvar-bold">MASTEROCEAN</span> is recognized
              for its ability to provide customized solutions to the complex
              challenges of the energy, oil and gas sectors, among others.{" "}
              <br />
              Some of our services include:
            </>
          )}
        </div>
      </div>

      <HSE />

      <div className="flex flex-col lg:flex-row pt-20 gap-10 pb-10 w-full max-w-7xl items-center justify-center">
        <div className="flex flex-col gap-10 w-full items-center lg:items-start lg:w-auto">
          <div className="w-full lg:w-auto flex justify-center items-center">
            <Card
              width="750px"
              height="400px"
              backgroundImage={esqCima}
              className="shadow-md"
              texth1={
                language === "pt"
                  ? "Consultoria Estratégica no Sector de Petróleo e Gás:"
                  : "Strategic Consulting in the Oil and Gas Sector:"
              }
              textp={
                language === "pt"
                  ? `- Análises de mercado
- Identificação de oportunidades de negócios
- Desenvolvimento de planos estratégicos
- Consultoria em Tecnologia de Informação`
                  : `- Market analysis
- Identification of business opportunities
- Development of strategic plans
- Information Technology consulting`
              }
            />
          </div>

          <div className="w-full lg:w-auto flex justify-center items-center z-0">
            <Card
              width="750px"
              backgroundImage={esqBaixo}
              className=""
              texth1={
                language === "pt"
                  ? "Logística, Procurement e Suporte Operacional"
                  : "Logistics, Procurement, and Operational Support"
              }
              textp={
                language === "pt"
                  ? `- Soluções para transporte de carga e pessoal offshore
- Serviços de transporte personalizado
- Gestão de frota naval e terrestre
- Suporte e agenciamento de cargas
- Gestão de toda a cadeia de aprovisionamento de bens e serviços
- Suporte em procurement`
                  : `- Solutions for offshore cargo and personnel transportation
- Custom transport services
- Naval and land fleet management
- Support and cargo agency services
- Management of the entire supply chain for goods and services
- Procurement support`
              }
            />
          </div>
        </div>

        <div className="w-full lg:w-auto flex  lg:h-[840px] h-auto">
          <Card
            width="750px"
            height="100%"
            backgroundImage={dir}
            className=""
            texth1={
              language === "pt"
                ? "Serviços de Engenharia e Manutenção:"
                : "Engineering and Maintenance Services:"
            }
            textp={
              language === "pt"
                ? `- Serviços de engenharia para todo o tipo de infraestruturas - Energia, Petróleo e Gás
- Gestão de projetos - EPCI
- Serviços de pintura e revestimento
- Fabricação metalomecânica - Onshore e Offshore
- Serviços de inspeção com drones
- Serviços de gestão de construção
- Serviços de proteção catódica`
                : `- Engineering services for all types of infrastructure – Energy, Oil and Gas
- Project management – EPCI
- Painting and coating services
- Metalworking fabrication – Onshore and Offshore
- Drone inspection services
- Construction management services
- Cathodic protection services`
            }
          />
        </div>
      </div>

      <a href="#contact">
        <button className="text-white font-alvar-bold px-8 h-12 uppercase bg-primaryRed cursor-pointer rounded-[3.5rem] text-xl">
          {language === "pt" ? "ENTRAR EM CONTATO" : "GET IN TOUCH"}
        </button>
      </a>
    </div>
  );
}

export default Solutions;

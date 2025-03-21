import { useLanguage } from "../context/LanguageContext";

function About() {
  const { language } = useLanguage();

  return (
    <div className="relative px-69 pt-10 pb-31" id="about">
      <div className="absolute inset-0 bg-gray-200 z-0 "></div>

      <div className="relative flex flex-row justify-evenly items-center h-[34rem] z-10">
        <div className="max-w-[30rem] flex flex-col items-start mr-7">
          <h1 className="uppercase text-xl font-alvar-bold mb-4">
            {language === "pt" ? "QUEM SOMOS" : "ABOUT US"}
            <span className="text-red-900">
              {" "}
              -{" "}
              {language === "pt" ? "MASTEROCEAN ANGOLA" : "MASTEROCEAN ANGOLA"}
            </span>
          </h1>
          <h1 className="uppercase text-6xl font-alvar-bold tracking-tighter">
            {language === "pt"
              ? "Desde a sua fundação, a"
              : "Since its foundation, "}
            <span className="text-red-900">MasterOcean</span>{" "}
            {language === "pt"
              ? "tem-se destacado como pioneira em"
              : "has stood out as a pioneer in"}{" "}
            <span className="text-red-900">
              {language === "pt"
                ? "soluções inovadoras"
                : "innovative solutions"}
            </span>
          </h1>
        </div>

        <div className="w-[40rem] flex flex-col gap-6 justify-center">
          <h1 className="text-2xl font-alvar-light">
            {language === "pt"
              ? "Identificando proativamente oportunidades no mercado global. Inicialmente especializada em consultoria estratégica, a empresa ganhou reputação pela capacidade de propor soluções criativas e eficazes, atendendo às exigências dinâmicas do setor."
              : "Proactively identifying opportunities in the global market. Initially specializing in strategic consulting, the company gained a reputation for its ability to propose creative and effective solutions, meeting the dynamic demands of the sector."}
          </h1>

          <h1 className="text-2xl font-alvar-light">
            {language === "pt"
              ? "Com o aumento da procura por serviços especializados, a MASTEROCEAN expandiu as suas operações, oferecendo um portfólio completo de soluções integradas, incluindo consultoria estratégica, suporte técnico, procurement e logística."
              : "With the increasing demand for specialized services, MASTEROCEAN has expanded its operations, offering a comprehensive portfolio of integrated solutions, including strategic consulting, technical support, procurement, and logistics."}
          </h1>

          <h1 className="text-2xl font-alvar-light">
            {language === "pt"
              ? "Este crescimento reflete o nosso compromisso com a entrega de serviços de alta qualidade que resolvem problemas e promovem o desenvolvimento sustentável para os nossos parceiros de negócios."
              : "This growth reflects our commitment to delivering high-quality services that solve problems and promote sustainable development for our business partners."}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default About;

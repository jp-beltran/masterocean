import { useLanguage } from "../context/LanguageContext";

function About() {
  const { language } = useLanguage();

  return (
    <div className="relative px-4 md:px-24 pt-10 pb-10 md:pb-28" id="about">
      <div className="absolute inset-0 bg-gray-200 z-0"></div>

      <div className="relative flex flex-col md:flex-row justify-evenly items-center gap-10 md:gap-0 md:h-[34rem] z-10">
        <div className="max-w-full md:max-w-[30rem] flex flex-col items-start md:mr-7 px-2 md:px-0">
          <h1 className="uppercase text-xl font-alvar-bold mb-4">
            {language === "pt" ? "QUEM SOMOS" : "ABOUT US"}
            <span className="text-red-900">
              {" "}
              -{" "}
              {language === "pt" ? "MASTEROCEAN ANGOLA" : "MASTEROCEAN ANGOLA"}
            </span>
          </h1>
          <h1 className="uppercase text-5xl md:text-6xl font-alvar-bold tracking-tighter">
            {language === "pt"
              ? "Desde a sua fundação, a "
              : "Since its foundation, "}
            <span className="text-red-900">
              MasterOcean <br />{" "}
            </span>
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

        <div className="w-full md:w-[40rem] flex flex-col gap-6 justify-center px-2 md:px-0 text-2xl">
          <h1 className=" md:text-2xl font-alvar-light">
            {language === "pt"
              ? "Identificando proativamente oportunidades no mercado global. Inicialmente especializada em consultoria estratégica, a empresa ganhou reputação pela capacidade de propor soluções criativas e eficazes, atendendo às exigências dinâmicas do setor."
              : "Proactively identifying opportunities in the global market. Initially specializing in strategic consulting, the company gained a reputation for its ability to propose creative and effective solutions, meeting the dynamic demands of the sector."}
          </h1>

          <h1 className=" md:text-2xl font-alvar-light">
            {language === "pt"
              ? "Com o aumento da procura por serviços especializados, a MASTEROCEAN expandiu as suas operações, oferecendo um portfólio completo de soluções integradas, incluindo consultoria estratégica, suporte técnico, procurement e logística."
              : "With the increasing demand for specialized services, MASTEROCEAN has expanded its operations, offering a comprehensive portfolio of integrated solutions, including strategic consulting, technical support, procurement, and logistics."}
          </h1>

          <h1 className=" md:text-2xl font-alvar-light">
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

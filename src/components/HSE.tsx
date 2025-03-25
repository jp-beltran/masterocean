import { useLanguage } from "../context/LanguageContext";

function HSE() {
  const { language } = useLanguage();
  return (
    <div
      className=" md:px-20 max-w-screen h-auto md:h-[90vh] flex items-center justify-center py-10"
      id="growth"
    >
      <div className="w-full h-auto md:h-[500px] flex flex-col md:flex-row justify-evenly bg-secundaryRed px-6 md:px-50 py-10 md:py-0 rounded-3xl">
        <div className="w-full md:w-1/2 mb-10 md:my-28">
          <h1 className="uppercase text-base font-alvar-bold mb-4 text-white">
            {language === "pt"
              ? "QUEM SOMOS - MASTER OCEAN ANGOLA"
              : "ABOUT US - MASTER OCEAN ANGOLA"}
          </h1>
          <h1 className="font-alvar-bold text-5xl md:text-6xl uppercase text-white tracking-tighter border-b-4 md:border-b-10 pb-4 md:pb-8 border-black w-full md:w-3/4">
            {language === "pt"
              ? "SAÚDE, SEGURANÇA E MEIO AMBIENTE (HSE)"
              : "HEALTH, SAFETY AND ENVIRONMENT (HSE)"}
          </h1>
        </div>

        <div className="w-full md:w-[40rem] flex flex-col items-start justify-center gap-1 text-base lg:text-2xl font-alvar-light text-white">
          <p>
            {language === "pt"
              ? "Na MASTEROCEAN operamos sempre dentro dos limites ambientais e do projeto;."
              : "At MASTEROCEAN, we always operate within environmental and project boundaries."}
          </p>
          <p>
            {language === "pt"
              ? "- Operarmos sempre em condições seguras e controladas;"
              : "- We always operate in safe and controlled conditions."}
          </p>
          <p>
            {language === "pt"
              ? "- Envolvemos sempre as pessoas certas nas decisões que afetam os procedimentos e os equipamentos.;"
              : "- We always involve the right people in decisions that affect procedures and equipment."}
          </p>
          <p>
            {language === "pt"
              ? "A saúde, segurança e meio ambiente dos nossos colaboradores, clientes, parceiros e comunidades onde operamos é a nossa prioridade."
              : "The health, safety, and environment of our employees, clients, partners, and the communities where we operate is our top priority."}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HSE;

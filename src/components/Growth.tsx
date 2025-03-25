import { useLanguage } from "../context/LanguageContext";

function Growth() {
  const { language } = useLanguage();

  return (
    <div
      className="px-4 md:px-20 max-w-screen h-auto md:h-[90vh] flex items-center justify-center py-10"
      id="growth"
    >
      <div className="w-full h-auto md:h-[500px] flex flex-col md:flex-row justify-evenly bg-primaryRed px-6 md:px-50 py-10 md:py-0 rounded-3xl">
        <div className="w-full md:w-1/2 mb-10 md:my-28">
          <h1 className="uppercase text-base font-alvar-bold mb-4 text-white">
            {language === "pt"
              ? "QUEM SOMOS - MASTER OCEAN ANGOLA"
              : "ABOUT US - MASTER OCEAN ANGOLA"}
          </h1>
          <h1 className="font-alvar-bold text-5xl md:text-6xl uppercase text-white tracking-tighter border-b-4 md:border-b-10 pb-4 md:pb-8 border-black w-full md:w-3/4">
            {language === "pt"
              ? "Diversificação e crescimento:"
              : "Diversification and growth:"}
          </h1>
        </div>

        <div className="w-full md:w-[40rem] flex flex-col items-start justify-center gap-4 text-xl md:text-xl font-alvar-light text-white">
          <p>
            {language === "pt"
              ? "Com um foco contínuo em crescimento sustentável, a MASTEROCEAN evoluiu para atender a novos mercados, expandindo-se para além do sector de petróleo e gás."
              : "With a continuous focus on sustainable growth, MASTEROCEAN has evolved to serve new markets, expanding beyond the oil and gas sector."}
          </p>
          <p>
            {language === "pt"
              ? "Além de uma sólida presença em Angola, temos também parcerias estratégicas com parceiros internacionais permitindo expandir as soluções para os nossos clientes, nos setores de tecnologia e logística."
              : "In addition to a strong presence in Angola, we also have strategic partnerships with international partners, allowing us to expand solutions for our clients in the technology and logistics sectors."}
          </p>
          <p>
            {language === "pt"
              ? "Estamos firmemente empenhados em expandir fronteiras, entregar soluções diversificadas e fomentar o crescimento internacional."
              : "We are firmly committed to expanding boundaries, delivering diversified solutions, and fostering international growth."}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Growth;

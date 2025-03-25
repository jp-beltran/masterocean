import { useLanguage } from "../context/LanguageContext";

function Hero() {
  const { language } = useLanguage();

  return (
    <div
      className="flex flex-col lg:flex-row mx-4 sm:mx-8 md:mx-16 lg:mx-44 mt-10 lg:mt-30 justify-between gap-10 lg:gap-28 z-10"
      id="hero"
    >
      {/* Título */}
      <div className="w-full lg:w-[30rem]">
        <h1 className="uppercase text-5xl sm:text-5xl md:text-5xl lg:text-7xl font-alvar-bold tracking-tight leading-[0.9em]">
          {language === "pt"
            ? "MOVIMENTANDO SOLUÇÕES EFICAZES"
            : "MOVING EFFECTIVE SOLUTIONS"}
        </h1>
      </div>

      {/* Parágrafo + Botão */}
      <div className="w-full lg:w-[30rem]">
        <div className="mb-6 text-2xl sm:text-lg md:text-xl lg:text-2xl font-alvar-regular">
          <p className="font-alvar-light">
            {language === "pt"
              ? "Seu parceiro estratégico para soluções inovadoras nos setores de petróleo, gás e outros mercados."
              : "Your strategic partner for solutions innovative in the oil, gas and other markets."}
          </p>
        </div>
        <a href="#contact">
          <button className="text-white font-alvar-bold px-6 h-12 uppercase bg-primaryRed cursor-pointer rounded-[3.5rem] text-xl ">
            {language === "pt" ? "Entrar em contato" : "Contact us"}
          </button>
        </a>
      </div>
    </div>
  );
}

export default Hero;

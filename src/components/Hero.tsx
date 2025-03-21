import { useLanguage } from "../context/LanguageContext";

function Hero() {
  const { language } = useLanguage();

  return (
    <div
      className="flex flex-row mx-46 mt-30 justify-evenly gap-30 z-1"
      id="hero"
    >
      <div className="w-[30rem]">
        <h1 className="uppercase text-7xl font-alvar-bold tracking-tighter">
          {language === "pt"
            ? "MOVIMENTANDO SOLUÇÕES EFICAZES"
            : "MOVING EFFECTIVE SOLUTIONS"}
        </h1>
      </div>
      <div className="w-[30rem]">
        <p className="mb-4 text-2xl font-alvar-regular font-thin">
          <p className="font-alvar-light">
            {language === "pt"
              ? "Seu parceiro estratégico para soluções"
              : "Your strategic partner for solutions"}
          </p>
          <p className="font-alvar-light">
            {language === "pt"
              ? "inovadoras nos setores de petróleo, gás"
              : "innovative in the oil, gas"}
          </p>
          <p className="font-alvar-light">
            {language === "pt" ? "e outros mercados." : "and other markets."}
          </p>
        </p>
        <a href="#contact">
          <button className="text-white font-alvar-bold px-5 h-12 uppercase bg-primaryRed cursor-pointer rounded-[3.5rem] text-xl">
            {language === "pt" ? "Entrar em contato" : "Contact us"}
          </button>
        </a>
      </div>
    </div>
  );
}

export default Hero;

import { useLanguage } from "../context/LanguageContext";
import gif from "../assets/gifs/gif3.gif";

function Commitment() {
  const { language } = useLanguage();

  return (
    <div className="relative mt-20 " id="commitment">
      {/* MOBILE layout: imagem acima, texto abaixo */}
      <div className="block md:hidden relative">
        {/* Imagem centralizada e flutuante */}
        <div className="flex justify-center -mb-16 z-20 relative">
          <img
            src={gif}
            alt={
              language === "pt"
                ? "Nosso compromisso com a sustentabilidade"
                : "Our commitment to sustainability"
            }
            className="w-[80%] max-w-sm rounded-2xl shadow-lg"
          />
        </div>

        {/* Texto no fundo amarelo */}
        <div className="bg-primaryYellow py-20  md:rounded-t-[3rem] relative z-10">
          <div className="md:text-center mx-20 p-10 font-alvar-bold border-l-4 border-secundaryRed">
            <h1 className="text-base mb-4 uppercase">
              {language === "pt" ? "SUSTENTABILIDADE -" : "SUSTAINABILITY -"}{" "}
              <span className="text-secundaryRed">MASTER OCEAN ANGOLA</span>
            </h1>
            <h1 className="text-3xl font-alvar-bold tracking-tight leading-tight mb-6 whitespace-pre-line">
              {language === "pt"
                ? "NOSSO \n COMPROMISSO \n COM O FUTURO:"
                : "OUR \n COMMITMENT \n TO THE FUTURE:"}
            </h1>
            <p className="font-alvar-light text-base">
              {language === "pt"
                ? "Investimos continuamente em práticas sustentáveis e tecnologias inovadoras que aumentam a produtividade, diminuem o custo e minimizam o impacto ambiental nas nossas operações, garantindo maior eficiência operacional."
                : "We continuously invest in sustainable practices and innovative technologies that increase productivity, reduce costs, and minimize the environmental impact of our operations, ensuring greater operational efficiency."}{" "}
              <span className="font-alvar-bold">MASTEROCEAN</span>{" "}
              {language === "pt"
                ? "oferece soluções seguras, eficientes e que promovem a redução das emissões de carbono, beneficiando as comunidades onde operamos."
                : "offers safe, efficient solutions that promote carbon emissions reduction, benefiting the communities where we operate."}
            </p>
          </div>
        </div>
      </div>

      <div className="hidden md:flex relative h-[900px] items-center justify-center">
        <div className="top-0 left-0 w-full h-[700px] bg-primaryYellow max-w-screen">
          <div className="flex flex-row-reverse items-center justify-center mr-100 font-alvar-bold text-base py-30 w-full">
            <div className="border-l-4 border-secundaryRed pl-10 h-[480px] w-1/2">
              <h1 className="text-xl">
                {language === "pt" ? "SUSTENTABILIDADE -" : "SUSTAINABILITY -"}{" "}
                <span className="text-secundaryRed">MASTER OCEAN ANGOLA</span>
              </h1>
              <h1 className="text-6xl font-alvar-bold tracking-tighter whitespace-pre-line">
                {language === "pt"
                  ? "NOSSO \n COMPROMISSO \n COM O FUTURO:"
                  : "OUR \n COMMITMENT \n TO THE FUTURE:"}
              </h1>
              <p className="font-alvar-light max-w-[560px] mt-5 text-2xl">
                {language === "pt"
                  ? "Investimos continuamente em práticas sustentáveis e tecnologias inovadoras que aumentam a produtividade, diminuem o custo e minimizam o impacto ambiental nas nossas operações, garantindo maior eficiência operacional."
                  : "We continuously invest in sustainable practices and innovative technologies that increase productivity, reduce costs, and minimize the environmental impact of our operations, ensuring greater operational efficiency."}{" "}
                <span className="font-alvar-bold">MASTEROCEAN</span>{" "}
                {language === "pt"
                  ? "oferece soluções seguras, eficientes e que promovem a redução das emissões de carbono, beneficiando as comunidades onde operamos."
                  : "offers safe, efficient solutions that promote carbon emissions reduction, benefiting the communities where we operate."}
              </p>
            </div>
            <div className="w-1/2 flex flex-row h-full">
              <img
                src={gif}
                alt={
                  language === "pt"
                    ? "Nosso compromisso com a sustentabilidade"
                    : "Our commitment to sustainability"
                }
                className="h-[890px] w-[600px] object-cover rounded-2xl absolute left-40 top-1/2 transform -translate-y-1/2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Commitment;

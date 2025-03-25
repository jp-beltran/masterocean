import { useLanguage } from "../context/LanguageContext";
import gif from "../assets/gifs/gif2.gif";

function Philosophy() {
  const { language } = useLanguage();

  return (
    <div
      className="flex flex-col md:flex-row px-4 md:ml-40 md:pr-20 justify-between items-start gap-10 md:gap-20 py-10 md:pt-40"
      id="philosophy"
    >
      <div className="flex flex-col justify-center md:mr-7 max-w-full md:max-w-[35rem]">
        <h1 className="uppercase text-xl font-alvar-bold mb-4">
          {language === "pt" ? "QUEM SOMOS" : "ABOUT US"}
          <span className="text-red-900">
            {" "}
            - {language === "pt" ? "MASTEROCEAN ANGOLA" : "MASTEROCEAN ANGOLA"}
          </span>
        </h1>

        <h1 className="font-alvar-bold text-5xl md:text-7xl tracking-tighter">
          {language === "pt" ? "NOSSA FILOSOFIA" : "OUR PHILOSOPHY"}
        </h1>

        <p className="text-base md:text-2xl pt-4 md:pt-6">
          {language === "pt"
            ? "Acreditamos no poder da diversidade e colaboração no impacto positivo que as nossas soluções podem gerar no desenvolvimento local e global. O nosso objectivo é impulsionar a transformação e inovação, promovendo um futuro sustentável para os nossos clientes e comunidades."
            : "We believe in the power of diversity and collaboration and in the positive impact our solutions can have on local and global development. Our goal is to drive transformation and innovation, promoting a sustainable future for our clients and communities."}
        </p>
      </div>

      <div className="flex items-center w-full md:w-auto">
        <img
          src={gif}
          alt={language === "pt" ? "Nossa filosofia" : "Our philosophy"}
          className="w-full md:w-[800px] h-auto max-h-[32rem] object-cover rounded-3xl"
        />
      </div>
    </div>
  );
}

export default Philosophy;

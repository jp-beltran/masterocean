import { useLanguage } from "../context/LanguageContext";
import gif from "../assets/gifs/gif2.gif";

function Philosophy() {
  const { language } = useLanguage();

  return (
    <div
      className="flex flex-row ml-80 pr-30 justify-between items-start h-[50rem] gap-20 pt-40"
      id="philosophy"
    >
      <div className="flex flex-col justify-center mr-7 max-w-[35rem]">
        <h1 className="uppercase text-xl font-alvar-bold mb-4">
          {language === "pt" ? "QUEM SOMOS" : "ABOUT US"}
          <span className="text-red-900">
            {" "}
            - {language === "pt" ? "MASTEROCEAN ANGOLA" : "MASTEROCEAN ANGOLA"}
          </span>
        </h1>

        <h1 className="font-alvar-bold text-7xl tracking-tighter">
          {language === "pt" ? "NOSSA FILOSOFIA" : "OUR PHILOSOPHY"}
        </h1>

        <p className="text-2xl pt-6">
          {language === "pt"
            ? "Acreditamos no poder da diversidade e colaboração no impacto positivo que as nossas soluções podem gerar no desenvolvimento local e global. O nosso objectivo é impulsionar a transformação e inovação, promovendo um futuro sustentável para os nossos clientes e comunidades."
            : "We believe in the power of diversity and collaboration and in the positive impact our solutions can have on local and global development. Our goal is to drive transformation and innovation, promoting a sustainable future for our clients and communities."}
        </p>
      </div>

      <div className="flex items-center">
        <img
          src={gif}
          alt={language === "pt" ? "Nossa filosofia" : "Our philosophy"}
          className="w-[800px] h-130 object-cover rounded-3xl"
        />
      </div>
    </div>
  );
}

export default Philosophy;

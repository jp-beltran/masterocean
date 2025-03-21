import { useLanguage } from "../context/LanguageContext";
import logo from "../assets/logo2.svg";

function Footer() {
  const { language } = useLanguage();

  return (
    <div
      className="relative w-full h-[32rem] bg-no-repeat bg-cover bg-center tracking-tighter"
      id="footer"
      style={{ backgroundImage: "url('/src/assets/gifs/gif4.gif')" }}
    >
      {/* Overlay vermelho que cobre tudo menos a logo */}
      <div className="absolute inset-0 bg-primaryRed opacity-50"></div>

      {/* Contêiner da logo para ficar acima do overlay */}
      <div className="relative flex justify-start items-center h-full z-[1] gap-100 pl-50">
        <div>
          <img src={logo} alt="Logo" className="w-auto h-20" />
        </div>

        <div className="flex flex-row gap-20 w-full relative">
          {/* Coluna Esquerda */}
          <div className="text-white flex flex-col gap-4 font-alvar-regular text-2xl">
            <a href="#about">{language === "pt" ? "Quem somos" : "About us"}</a>
            <a href="#solutions">
              {language === "pt" ? "Soluções" : "Solutions"}
            </a>
            <a href="#commitment">
              {language === "pt" ? "Sustentabilidade" : "Sustainability"}
            </a>
            <a href="#contact">{language === "pt" ? "Contato" : "Contact"}</a>
          </div>

          <div className="relative text-white flex flex-col gap-4 font-alvar-light text-2xl w-full">
            <h1>
              {language === "pt"
                ? "Rua Ferreira do Amaral nº 49, Província de Luanda, Angola."
                : "Rua Ferreira do Amaral No. 49, Luanda Province, Angola."}
            </h1>
            <h1>+244 945 088 444</h1>

            <div className="relative w-full border-b-4 border-primaryRed pb-2">
              <h1 className="w-full">info@masteroceanangola.com</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

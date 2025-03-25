import { useLanguage } from "../context/LanguageContext";
import logo from "../assets/logo2.svg";
import gif from "../assets/gifs/gif4.gif";

function Footer() {
  const { language } = useLanguage();

  return (
    <div
      className="relative w-full h-auto bg-no-repeat bg-cover bg-center tracking-tighter py-10 lg:h-[30rem] flex items-center justify-evenly p-10"
      id="footer"
      style={{ backgroundImage: `url(${gif})` }}
    >
      <div className="absolute inset-0 bg-primaryRed opacity-50"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-evenly lg:gap-50 gap-20  md:px-20 ">
        <div>
          <img src={logo} alt="Logo" className="w-auto h-20" />
        </div>

        <div className="flex flex-col md:flex-row gap-10 w-1/2">
          <div className="text-white flex flex-col gap-2 font-alvar-regular text-xl md:text-xl">
            <a href="#about">{language === "pt" ? "Quem somos" : "About us"}</a>
            <a href="#solutions">
              {language === "pt" ? "Soluções" : "Solutions"}
            </a>
            <a href="#commitment">
              {language === "pt" ? "Sustentabilidade" : "Sustainability"}
            </a>
            <a href="#contact">{language === "pt" ? "Contato" : "Contact"}</a>
          </div>

          <div className="text-white flex flex-col gap-2 font-alvar-light text-xl md:text-2xl w-full">
            <p>
              {language === "pt"
                ? "Rua Ferreira do Amaral nº 49, Província de Luanda, Angola."
                : "Rua Ferreira do Amaral No. 49, Luanda Province, Angola."}
            </p>
            <p>+244 945 088 444</p>
            <div className="w-full border-b-4 border-primaryRed pb-2 relative bottom-0 max-w-[50vw]">
              <p>info@masteroceanangola.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

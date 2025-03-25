import { useLanguage } from "../context/LanguageContext";
import logo from "../assets/logo2.svg";

function Footer() {
  const { language } = useLanguage();

  return (
    <div
      className="relative w-full h-auto bg-no-repeat bg-cover bg-center tracking-tighter py-10 lg:h-[30rem] flex items-center justify-evenly p-10"
      id="footer"
      style={{ backgroundImage: "url('/src/assets/gifs/gif4.gif')" }}
    >
      {/* Overlay vermelho que cobre tudo menos a logo */}
      <div className="absolute inset-0 bg-primaryRed opacity-50"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-evenly gap-50  md:px-20 ">
        {/* Logo */}
        <div>
          <img src={logo} alt="Logo" className="w-auto h-20" />
        </div>

        {/* Links e informações */}
        <div className="flex flex-col md:flex-row gap-10 w-1/2 lg:*:text-2xl">
          {/* Coluna Esquerda */}
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

          {/* Coluna Direita */}
          <div className="text-white flex flex-col gap-1 font-alvar-light text-xl md:text-2xl w-full">
            <p>
              {language === "pt"
                ? "Rua Ferreira do Amaral nº 49, Província de Luanda, Angola."
                : "Rua Ferreira do Amaral No. 49, Luanda Province, Angola."}
            </p>
            <p>+244 945 088 444</p>
            <div className="w-full border-b-4 border-primaryRed pb-2 absolute bottom-0 max-w-screen"></div>
            <p>info@masteroceanangola.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

import { useLanguage } from "../context/LanguageContext";
import logo from "../assets/logo.svg";

function Header() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="flex flex-row rounded-[6rem] font-alvar-semi items-center justify-between p-5 mt-8 mx-16 shadow-lg bg-white z-10">
      <img src={logo} alt="Logo Master Ocean" />
      <div className="flex flex-row gap-[29px] items-center">
        <a href="#about" className="text-2xl">
          {language === "pt" ? "Quem somos" : "About us"}
        </a>
        <a href="#solutions" className="text-2xl">
          {language === "pt" ? "Soluções" : "Solutions"}
        </a>
        <a href="#commitment" className="text-2xl">
          {language === "pt" ? "Sustentabilidade" : "Sustainability"}
        </a>
        <a href="#contact" className="text-2xl">
          {language === "pt" ? "Contato" : "Contact"}
        </a>
        <button
          onClick={toggleLanguage}
          className="ml-1.5 w-20 h-14 bg-primaryYellow rounded-[56.30px] font-alvar-bold hover:scale-110 cursor-pointer transition-transform duration-300 ease-in-out"
        >
          {language === "pt" ? "EN" : "PT"}
        </button>
      </div>
    </div>
  );
}

export default Header;

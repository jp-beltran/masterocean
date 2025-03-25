import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import logo from "../assets/logo.svg";
import { Menu, X } from "lucide-react";

function Header() {
  const { language, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="flex flex-row rounded-[6rem] font-alvar-semi items-center justify-between p-5 mt-8 mx-4 md:mx-16 shadow-lg bg-white z-40 relative">
      <img src={logo} alt="Logo Master Ocean" className="z-10 lg:w-45 " />

      {/* Botão abrir menu */}
      <button
        onClick={toggleMenu}
        className={`md:hidden text-4xl ${menuOpen ? "z-10" : "z-50"}`}
        aria-label="Toggle menu"
      >
        <Menu size={32} />
      </button>

      <nav
        className={`
          fixed top-0 right-0 h-full w-[40%] bg-white z-50 pt-12 px-6 flex flex-col gap-8 md:text-2xl font-alvar-semi transition-transform duration-300 ease-in-out items-center
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
          md:static md:translate-x-0 md:flex-row md:flex md:p-0 md:pt-0 md:bg-transparent md:h-auto md:w-auto sm:text-sm sm:p-0
        `}
      >
        {/* Botão fechar menu */}
        <button
          onClick={closeMenu}
          className="absolute top-6 right-6 md:hidden"
          aria-label="Fechar menu"
        >
          <X size={28} />
        </button>

        <a href="#about" onClick={closeMenu} className="text-base md:text-2xl">
          {language === "pt" ? "Quem somos" : "About us"}
        </a>
        <a
          href="#solutions"
          onClick={closeMenu}
          className="text-base md:text-2xl"
        >
          {language === "pt" ? "Soluções" : "Solutions"}
        </a>
        <a
          href="#commitment"
          onClick={closeMenu}
          className="text-base md:text-2xl"
        >
          {language === "pt" ? "Sustentabilidade" : "Sustainability"}
        </a>
        <a
          href="#contact"
          onClick={closeMenu}
          className="text-base md:text-2xl"
        >
          {language === "pt" ? "Contato" : "Contact"}
        </a>
        <button
          onClick={() => {
            toggleLanguage();
            closeMenu();
          }}
          className="w-20 h-14 bg-primaryYellow rounded-[56.30px] font-alvar-bold text-xl hover:scale-110 cursor-pointer transition-transform duration-300 ease-in-out"
        >
          {language === "pt" ? "EN" : "PT"}
        </button>
      </nav>
    </div>
  );
}

export default Header;

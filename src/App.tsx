import BackgroundGif from "./components/BackgroundGif";
import About from "./components/About";
import Gif1 from "./components/Gif1";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import Growth from "./components/Growth";
import Solutions from "./components/Solutions";
import Commitment from "./components/Commitment";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext"; // Importando o provider f
import backgroundIMG from "./assets/background.jpg";

function App() {
  return (
    <LanguageProvider>
      <div
        className="relative min-h-screen  bg-cover z-[0] bg-no-repeat bg-top h-full pt-2"
        style={{ backgroundImage: `url(${backgroundIMG})` }}
      >
        {/* GIF no fundo, atrás de todos os outros componentes */}
        <BackgroundGif />

        {/* Componentes acima do GIF */}
        <Header />
        <Hero />
        <Gif1 />
        <About />
        <div className=" w-1/2 border-t-5 border-black absolute left-0 md:"></div>
        <Philosophy />
        <div className=" w-[50%] border-t-5 border-black absolute right-0"></div>
        <Growth />
        <Solutions />
        <Commitment />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;

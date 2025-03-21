import BackgroundGif from "./components/BackgroundGif";
import backgroundImg from "./assets/background.jpg";
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
import { LanguageProvider } from "./context/LanguageContext"; 

function App() {
  return (
    <LanguageProvider>
      <div
        className="relative min-h-screen max-w-screen bg-cover z-[0] bg-no-repeat bg-top h-full pt-2"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        {/* GIF no fundo, atrás de todos os outros componentes */}
        <BackgroundGif />

        {/* Componentes acima do GIF */}
        <Header />
        <Hero />
        <Gif1 />
        <About />
        <div className=" w-[795px] border-t-5 border-black "></div>
        <Philosophy />
        <div className=" w-[900px] border-t-5 border-black absolute right-0"></div>
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

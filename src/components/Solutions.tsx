import Card from "./Card";

function Solutions() {
  return (
    <div
      className="flex flex-col items-center max-w-screen h-auto mt-20 px-4"
      id="solutions"
    >
      <div className="flex flex-col lg:flex-row items-center justify-evenly gap-10 w-full max-w-7xl">
        <div className="lg:w-[30rem] w-full">
          <h1 className="uppercase text-xl font-alvar-bold mb-4">
            SOLUÇÕES{" "}
            <span className="text-secundaryRed"> - MASTER OCEAN ANGOLA</span>
          </h1>
          <h1 className="text-6xl font-alvar-bold tracking-tighter">
            NOSSAS SOLUÇÕES
          </h1>
        </div>

        <div className="lg:w-[38rem] w-full font-alvar-light text-2xl">
          A <span className="font-alvar-bold">MASTEROCEAN</span> é reconhecida
          pela sua capacidade de fornecer soluções personalizadas para os
          desafios complexos dos sectores de energia, petróleo e gás, entre
          outros. <br />
          Alguns dos nossos serviços incluem:
        </div>
      </div>

      <div className="flex flex-col lg:flex-row pt-20 gap-10 pb-10 w-full max-w-7xl items-center justify-center">
        <div className="flex flex-col gap-10 w-full items-center lg:items-start lg:w-auto">
          <div className="w-full lg:w-auto flex justify-center items-center">
            <Card
              width="750px"
              height="400px"
              backgroundImage="/src/assets/esqCima.jpg"
              texth1="Consultoria Estratégica no Sector 
                    de Petróleo e Gás:"
              textp="Análises de mercado
                Identificação de oportunidades de negócios
                Desenvolvimento de planos estratégicos
                Consultoria em Tecnologia de Informação"
            />
          </div>
          <div className="w-full lg:w-auto flex justify-center items-center z-0">
            <Card
              width="750px"
              height="400px"
              backgroundImage="/src/assets/esqBaixo.jpg"
              texth1="Logística, Procurement e 
            Suporte Operacional"
              textp="Soluções para transporte de carga e pessoal offshore
            Serviços de transporte personalizado
            Gestão de frota naval e terrestre
            Suporte e agenciamento de cargas
            Gestão de toda a cadeia de aprovisionamento de bens e serviços
            Procurement suporte "
            />
          </div>
        </div>

        <div className="w-full lg:w-auto flex justify-center items-center">
          <Card
            width="750px"
            height="840px"
            backgroundImage="/src/assets/dir.jpg"
            texth1="Serviços de Engenharia e Manutenção:"
            textp="Serviços Engenharia para todo o tipo de infraestruturas - Energia, Petróleo e Gás
                Gestão de Projectos - EPCI
                Serviços Pintura e Revestimento
                Fabricação Metalomecânica - Onshore e Offshore
                Serviços de inspecção com Drones
                Serviços de Gestão de construção 
                Serviços de proteção catódica"
            paddingTop="490px"
          />
        </div>
      </div>

      <a href="#contact">
        <button className="text-white font-alvar-bold px-8 h-12 uppercase bg-primaryRed cursor-pointer rounded-[3.5rem] text-xl">
          ENTRAR EM CONTATO
        </button>
      </a>
    </div>
  );
}

export default Solutions;

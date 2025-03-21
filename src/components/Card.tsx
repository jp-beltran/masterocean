import React from "react";

interface CardProps {
  width?: string | number;
  height?: string | number;
  backgroundImage?: string;
  texth1: string;
  textp: string;
  paddingTop?: string | number; // <- Adicionada prop para padding-top
}

const Card: React.FC<CardProps> = ({
  width,
  height,
  backgroundImage,
  texth1,
  textp,
  paddingTop,
}) => {
  return (
    <div
      className="relative bg-cover bg-no-repeat bg-top pl-10 rounded-2xl overflow-hidden"
      style={{
        width,
        height,
        paddingTop,
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
      }}
    >
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>

      {/* Conteúdo do card */}
      <div className="relative z-10">
        <h1 className="text-white font-alvar-bold text-2xl uppercase">
          {texth1}
        </h1>
        <p className="text-white font-alvar-light text-2xl mt-5 whitespace-pre-line">
          {textp}
        </p>
      </div>
    </div>
  );
};

export default Card;

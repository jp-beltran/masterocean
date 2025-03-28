import React from "react";

interface CardProps {
  width?: string | number;
  height?: string | number;
  backgroundImage?: string;
  texth1: string;
  textp: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  width,
  height,
  backgroundImage,
  texth1,
  textp,
  className,
}) => {
  return (
    <div
      className={`relative bg-cover bg-no-repeat bg-top rounded-2xl overflow-hidden w-full sm:w-auto h-auto ${
        className ?? ""
      }`}
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
      }}
    >
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black opacity-70 rounded-2xl"></div>

      {/* Conteúdo do card */}
      <div className="relative z-10 md:p-14 p-10">
        <h1 className="text-white font-alvar-bold lg:text-3xl uppercase text-3xl">
          {texth1}
        </h1>
        <p className="text-white font-alvar-light lg:text-2xl mt-5 whitespace-pre-line ">
          {textp}
        </p>
      </div>
    </div>
  );
};

export default Card;

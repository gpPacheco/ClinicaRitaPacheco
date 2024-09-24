import { useState } from "react";

export function Depoimentos() {
  const depoimentos = [
    {
      id: 1,
      nome: "Hélio Rubens",
      videoUrl: "https://www.youtube.com/embed/D1AOCszhNKs",
    },
    {
      id: 2,
      nome: "Lula do Basquete",
      videoUrl: "https://www.youtube.com/embed/9DXSue6Q5MU",
    },
  ]; // Lista de depoimentos com URLs de vídeos e nomes

  return (
    <div className="flex flex-col items-center justify-center py-16 text-center bg-gradient-to-b from-[#dbbeb0] to-[#f7f0ea] shadow-md">
      <p className="text-lg font-bold text-gray-900">
        O que dizem nossos pacientes
      </p>

      {/* Container para os depoimentos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mt-8">
        {depoimentos.map((item) => (
          <div
            key={item.id}
            className=" shadow-md rounded-md p-4 w-full relative ml-2 mr-2" 
          >
            {/* Relação de Aspecto 16:9 (widescreen) */}
            <div className="relative pb-[56.25%] overflow-hidden"> 
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={item.videoUrl}
                title={`Depoimento ${item.nome}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Nome do Paciente abaixo do vídeo */}
            <p className="text-sm font-medium text-gray-900 mt-2">
              {item.nome}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

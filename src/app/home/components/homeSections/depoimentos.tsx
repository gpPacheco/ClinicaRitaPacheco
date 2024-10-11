import { useState } from "react";

export function Depoimentos() {
  const depoimentos = [
    {
      id: 1,
      videoUrl: "https://www.youtube.com/embed/D1AOCszhNKs",
    },
    {
      id: 2,
      videoUrl: "https://www.youtube.com/embed/9DXSue6Q5MU",
    },
  ]; 

  return (
    <div className="py-6 bg-gradient-to-b from-[#f7f0ea] via-[#dbbeb0] to-[#f7f0ea] p-3">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-light text-gray-800 text-center mb-5">
          O que dizem nossos pacientes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {depoimentos.map((depoimento) => (
            <div
              key={depoimento.id}
              className="relative rounded-md overflow-hidden shadow-md"
            >
              {/* Relação de Aspecto 16:9 (widescreen) */}
              <div className="pt-[56.25%]"> 
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={depoimento.videoUrl}
                  title={`Depoimento ${depoimento.id}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Avaliacoes() {
  const avaliacoes = [
    {
      nome: "João Silva",
      comentario: "Excelente atendimento, recomendo a todos!",
      avaliacao: 5,
    },
    {
      nome: "Maria Souza",
      comentario: "Ambiente limpo e profissionais qualificados.",
      avaliacao: 4,
    },
    {
      nome: "Pedro Lima",
      comentario: "Fui muito bem atendido, serviço de qualidade.",
      avaliacao: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      goToNext();
    }, 4000);

    return () => clearInterval(intervalId);
  });

  const goToPrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? avaliacoes.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === avaliacoes.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsTransitioning(false), 500);
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <div className="w-full px-4 bg-gradient-to-b from-[#f7f0ea] to-[#dbbeb0] min-h-[250px]">
      <div className="text-3xl font-light text-gray-800 text-center mb-5">
        Avaliações dos Clientes
      </div>
      <div className="relative overflow-hidden w-full max-w-[400px] mx-auto">
        <button
          className="absolute text-zinc-500 hover:text-zinc-700 transition duration-200 top-1/2 left-0 transform -translate-y-1/2 bg-gray-100 p-1 rounded-full z-10"
          onClick={goToPrev}
        >
          <ChevronLeft size={24} />
        </button>

        <div
          className={`flex transition-transform duration-500 ease-in-out ${isTransitioning ? "" : "transition-none"}`}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {avaliacoes.map((avaliacao, index) => (
            <div key={index} className="flex-shrink-0 w-full p-4">
              <div className="text-center bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold">{avaliacao.nome}</h2>
                <p className="text-yellow-500">{"★".repeat(avaliacao.avaliacao)}</p>
                <p className="text-gray-600 mt-2">{avaliacao.comentario}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          className="absolute text-zinc-500 hover:text-zinc-700 transition duration-200 top-1/2 right-0 transform -translate-y-1/2 bg-gray-100 p-1 rounded-full z-10 shadow-lg"
          onClick={goToNext}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}

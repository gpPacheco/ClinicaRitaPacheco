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
    {
      nome: "Lima",
      comentario: "Fui muito bem atendido, serviço de qualidade.",
      avaliacao: 5,
    },
    {
      nome: "Pedro",
      comentario: "Fui muito bem atendido, serviço de qualidade.",
      avaliacao: 5,
    },
    {
      nome: "Maria",
      comentario: "Ambiente limpo e profissionais qualificados.",
      avaliacao: 4,
    },
    {
      nome: "João Silva",
      comentario: "Excelente atendimento, recomendo a todos!",
      avaliacao: 5,
    },
    {
      nome: "Silva",
      comentario: "Excelente atendimento, recomendo a todos!",
      avaliacao: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Lógica para alternar automaticamente o destaque entre as avaliações
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === avaliacoes.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Troca de avaliação a cada 4 segundos

    return () => clearInterval(intervalId); // Limpa o intervalo ao desmontar
  }, [avaliacoes.length]);

  // Funções para navegação manual
  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? avaliacoes.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === avaliacoes.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full px-4 bg-gradient-to-b from-[#f7f0ea] to-[#dbbeb0] min-h-[250px]">
      <div className="text-3xl font-light text-gray-800 text-center mb-5">
        Avaliações dos Clientes
      </div>
      <div className="relative overflow-hidden w-full max-w-[400px] mx-auto">
        {/* Botão anterior */}
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-100 p-1 rounded-full z-10 shadow-lg"
          onClick={goToPrev}
        >
          <ChevronLeft size={24} />
        </button>

        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {avaliacoes.map((avaliacao, index) => (
            <div
              key={avaliacao.nome}
              className="flex-shrink-0 w-full p-4"
            >
              <div
                className={`text-center bg-white p-4 rounded-lg shadow-md transition-transform duration-500 ${
                  index === currentIndex ? "scale-105" : "scale-95 opacity-75"
                }`}
              >
                <h2 className="text-lg font-semibold">{avaliacao.nome}</h2>
                <p className="text-yellow-500">{"★".repeat(avaliacao.avaliacao)}</p>
                <p className="text-gray-600 mt-2">{avaliacao.comentario}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Botão próximo */}
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-100 p-1 rounded-full z-10 shadow-lg"
          onClick={goToNext}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}

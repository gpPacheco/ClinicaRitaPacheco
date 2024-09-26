"use client";
import { useState, useEffect } from "react";

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

  // Lógica para alternar o destaque entre as avaliações
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === avaliacoes.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); 

    return () => clearInterval(intervalId); // Limpa o intervalo quando o componente é desmontado
  }, [avaliacoes.length]);

  return (
    <div className="w-full px-4 pb-4 bg-gradient-to-b from-[#f7f0ea] to-[#dbbeb0] min-h-[400px]">
      <div className="text-xl text-center font-semibold mb-4">
        Avaliações dos Clientes
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4">
        {avaliacoes.map((avaliacao, index) => (
          <div
            key={avaliacao.nome}
            className={`text-center bg-white p-4 rounded-lg shadow-md w-60 transition-transform duration-500 ${
              index === currentIndex ? "scale-105" : "scale-95"
            }`}
          >
            <h2 className="text-lg font-semibold">{avaliacao.nome}</h2>
            <p className="text-yellow-500">{"★".repeat(avaliacao.avaliacao)}</p>
            <p className="text-gray-600 mt-2">{avaliacao.comentario}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

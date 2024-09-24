"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Função Avaliacoes
export function Avaliacoes() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Simulando avaliações do Google
  const avaliacoes = [
    {
      nome: "João Silva",
      comentario: "Excelente atendimento, recomendo a todos!",
      avaliacao: 5,
      titulo: "Depoimento Hélio Rubens",
    },
    {
      nome: "Maria Souza",
      comentario: "Profissionais qualificados e muito atenciosos.",
      avaliacao: 4,
      titulo: "Depoimento Lula do Basquete",
    },
    {
      nome: "Carlos Lima",
      comentario: "Ótima clínica, ambiente muito acolhedor.",
      avaliacao: 5,
      titulo: "Depoimento Maria Silva",
    },
    {
      nome: "Fernanda Costa",
      comentario: "Tratamento eficiente, superou minhas expectativas!",
      avaliacao: 5,
      titulo: "Depoimento José Carlos",
    },
    {
      nome: "Roberta Almeida",
      comentario: "Ambiente confortável e equipe excelente!",
      avaliacao: 5,
      titulo: "Depoimento Roberta Almeida",
    },
  ];

  const totalItems = avaliacoes.length;

  // Define quantos cards serão exibidos por vez, dependendo do tamanho da tela
  const itemsPerPage = window.innerWidth >= 1024 ? 4 : 1; // 4 colunas no desktop, 1 no mobile
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Manipuladores de navegação
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 < totalPages ? prevIndex + 1 : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 >= 0 ? prevIndex - 1 : totalPages - 1
    );
  };

  return (
    <div className="flex flex-col items-center justify-center py-16 text-center bg-gradient-to-b from-[#f7f0ea] to-[#dbbeb0] shadow-md">
      <p className="text-lg font-bold text-gray-900 mb-4">
        Sendo referência em Franca e região
      </p>

      <div className="relative flex items-center justify-center w-full overflow-hidden">
        {/* Botões de navegação laterais */}
        <button
          onClick={handlePrev}
          className="absolute left-0 z-10 bg-gray-200 p-2 rounded-full shadow-lg hover:bg-gray-300 transition"
        >
          <ChevronLeft size={24} />
        </button>

        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
            width: `${100 * totalItems / itemsPerPage}%`,
          }}
        >
          {avaliacoes.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white border border-gray-200 shadow-md rounded-md p-4 mx-2 flex-shrink-0"
              style={{
                width: `${100 / itemsPerPage}%`, // Para garantir que os cards se ajustem dinamicamente
              }}
            >
              <h2 className="text-lg font-bold">{item.titulo}</h2>
              <p className="text-yellow-500">{"★".repeat(item.avaliacao)}</p>
              <p className="text-gray-600 mt-2">{item.comentario}</p>
              <p className="text-gray-500 text-sm mt-2">- {item.nome}</p>
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="absolute right-0 z-10 bg-gray-200 p-2 rounded-full shadow-lg hover:bg-gray-300 transition"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}

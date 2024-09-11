"use client";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

interface Profissional {
  id: number;
  nome: string;
  especialidade: string;
  descricao: string;
}

const profissionaisData: Profissional[] = [
  {
    id: 1,
    nome: "Rita Pacheco",
    especialidade: "Podóloga",
    descricao:
      "Podóloga com mais de 15 anos de experiência, especializada em podologia geriátrica e esportiva.",
  },
  {
    id: 2,
    nome: "Carlos Silva",
    especialidade: "Podólogo Esportivo",
    descricao:
      "Especialista em podologia esportiva, com foco em tratamentos de atletas de alto rendimento.",
  },
];

export default function Profissionais() {
  const [selectedProfissional, setSelectedProfissional] =
    useState<Profissional | null>(null);

  const handleCardClick = (profissional: Profissional) => {
    setSelectedProfissional(profissional);
  };

  const handleCloseModal = () => {
    setSelectedProfissional(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-10">
        Conheça nossos Profissionais
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
        {profissionaisData.map((profissional) => (
          <div
            key={profissional.id}
            className="relative w-72 h-96 bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transform transition duration-500 hover:scale-105"
            onClick={() => handleCardClick(profissional)}
          >
            <div className="absolute inset-0 bg-cover bg-center z-0">
              {/* <img
                src={`/images/profissional-${profissional.id}.jpg`}
                alt={profissional.nome}
                className="w-full h-full object-cover"
              /> */}
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 z-10 flex flex-col justify-end p-5">
              <h2 className="text-2xl font-semibold text-white">
                {profissional.nome}
              </h2>
              <p className="text-lg text-gray-300">
                {profissional.especialidade}
              </p>
              <p className="mt-2 text-sm text-white underline">
                Clique para saber mais
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProfissional && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            className="bg-white p-6 rounded-lg shadow-lg relative max-w-md w-full transform transition duration-500 scale-105"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={handleCloseModal}
            >
              <FaTimes className="text-xl" />
            </button>
            <h2 className="text-2xl font-bold mb-4">
              {selectedProfissional.nome}
            </h2>
            <p className="text-lg font-medium">
              Especialidade: {selectedProfissional.especialidade}
            </p>
            <p className="mt-4 text-gray-700">{selectedProfissional.descricao}</p>
          </div>
        </div>
      )}
    </div>
  );
}

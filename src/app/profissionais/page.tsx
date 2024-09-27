"use client";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Image from "next/image";

interface Profissional {
  id: number;
  nome: string;
  especialidade: string;
  descricao: string;
  especializacoes: string[];
  formacao: string[];
}

const profissionaisData: Profissional[] = [
  {
    id: 1,
    nome: "Rita Pacheco",
    especialidade: "Podóloga",
    descricao:
      "Podóloga desde 2010 (Senac Franca) e palestrante em Podologia Gerôntica e Calçado para Diabetes.",
    especializacoes: [
      "Atendimento ao Portador de Diabetes Miellitus (2015, Senac Aclimação -SP)",
      "Podologia Geriátrica, Esportiva e Laserterapia para Onicomicose",
    ],
    formacao: [
      "Pós-graduada em Distúrbio de Linguagem (1995, Cefac SP)",
      "Fonoaudióloga desde 1994 (Univ. Franca-SP)",
    ],
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#f7f0ea] to-[#dbbeb0]">
      <h2 className="text-3xl font-light text-gray-800 sm:text-4xl lg:text-5xl text-center">
        Conheça quem são as{" "}
        <span className="block w-full font-light text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700 lg:inline">
          Profissionais
        </span>{" "}
        da clínica de podologia Rita Pacheco:
      </h2>
      <p className="mb-20 mt-2 text-lg text-gray-800 text-center">
        Há&nbsp;
        <span className="block w-full font-light bg-clip-text bg-gradient-to-r text-orange-500 lg:inline">
          mais
        </span>{" "}
        de 15 anos!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-10 justify-items-center">
        {profissionaisData.map((profissional) => (
          <div
            key={profissional.id}
            className="relative w-72 h-96 text-center shadow-xl rounded-lg overflow-hidden cursor-pointer transform transition duration-500 hover:scale-105"
            onClick={() => handleCardClick(profissional)}
          >
            <div className="absolute inset-0 bg-cover bg-center z-0">
              <div className="relative w-full h-full">
                <Image
                  src="/2.jpg"
                  alt={profissional.nome}
                  className="object-cover"
                  layout="fill"
                />
              </div>
            </div>
            <div className="absolute inset-0 hover:bg-black/50 transition duration-300 bg-opacity-50 z-10 flex flex-col justify-end p-5">
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
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-[#f7f0ea] p-6 rounded-lg shadow-lg relative max-w-md w-full transform transition duration-500 scale-105 text-center mr-6 ml-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={handleCloseModal}
            >
              <FaTimes className="text-xl" />
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">
              {selectedProfissional.nome}
            </h2>
            <p className="text-lg font-medium text-center">
              Especialidade: {selectedProfissional.especialidade}
            </p>
            <p className="mt-4 text-gray-700">
              <span className="font-bold">📝 Resumo:</span> <br />
              {selectedProfissional.descricao}
            </p>
            <p className="mt-4 text-gray-700">
              <span className="font-bold">🏅 Especializações:</span> <br />
              {selectedProfissional.especializacoes.map(
                (especializacao, idx) => (
                  <span key={idx}>
                    - {especializacao} <br />
                  </span>
                )
              )}
            </p>
            <p className="mt-4 text-gray-700">
              <span className="font-bold">🎓 Formação:</span> <br />
              {selectedProfissional.formacao.map((formacao, idx) => (
                <span key={idx}>
                  - {formacao} <br />
                </span>
              ))}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

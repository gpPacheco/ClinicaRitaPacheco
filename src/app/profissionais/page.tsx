"use client";
import React, { useState } from "react";
import { FaAward, FaGraduationCap, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { FaixaContato } from "../components/button";

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
        Conheça a{" "}
        <span className="block w-full font-light text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700 lg:inline">
          Profissional
        </span>{" "}
        da clínica!
      </h2>
      <p className="mb-10 mt-2 text-lg text-gray-800 text-center">
        Com{" "}
        <span className="block w-full font-light bg-clip-text bg-gradient-to-r text-orange-500 lg:inline">
          mais de 15 anos
        </span>{" "}
        de experiência!
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
                  src="/biosseguranca/1.png"
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
          className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-[#fdf6f1] p-4 rounded-xl shadow-lg relative max-w-md w-full transform transition duration-500 scale-100 text-center mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={handleCloseModal}
            >
              <FaTimes className="text-xl" />
            </button>
            <h2 className="text-2xl font-semibold mb-3 text-center text-[#7b4f38]">
              {selectedProfissional.nome}
            </h2>
            <p className="text-lg font-medium text-center text-[#a57858]">
              Especialidade: {selectedProfissional.especialidade}
            </p>
            <p className="mt-4 text-[#6f4f3f]">
              {selectedProfissional.descricao}
            </p>
            <p className="mt-4 text-[#6f4f3f]">
              <FaAward
                className="mr-2 text-[#7b4f38] inline-block align-text-top"
                style={{ verticalAlign: "middle" }}
              />
              <span className="font-semibold">Especializações:</span> <br />
              {selectedProfissional.especializacoes.map(
                (especializacao, idx) => (
                  <span key={idx}>
                    • {especializacao} <br />
                  </span>
                )
              )}
            </p>

            <p className="mt-4 text-[#6f4f3f]">
              <FaGraduationCap
                className="mr-2 text-[#7b4f38] inline-block align-text-top"
                style={{ verticalAlign: "middle" }}
              />
              <span className="font-semibold">Formação:</span> <br />
              {selectedProfissional.formacao.map((formacao, idx) => (
                <span key={idx}>
                  • {formacao} <br />
                </span>
              ))}
            </p>
          </div>
        </div>
      )}

      <div className="my-4 ">
        <FaixaContato />
      </div>
    </div>
  );
}

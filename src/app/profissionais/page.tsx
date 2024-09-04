"use client";
import Image from "next/image";
import React, { useState } from "react";

interface Profissional {
  id: number;
  nome: string;
  especialidade: string;
  descricao: string;
}

export default function Profissionais() {
  const [profissionais, setProfissionais] = useState<Profissional[]>([
    {
      id: 1,
      nome: "Rita Pacheco",
      especialidade: "Podóloga",
      descricao: `
        Resumo
        Podóloga desde 2010 (Senac Franca)

        Especializações
        - Diabetes (2015, Senac Aclimação-SP)
        - Podologia Geriátrica, Esportiva e Laserterapia para Onicomicose

        Experiência
        - Palestrante em Podologia Gerôntica e Calçado para Diabetes
        - Participante de congressos, cursos e simpósios de Podologia

        Formação
        - Pós-graduada em Distúrbio de Linguagem (1995, Cefac SP)
        - Fonoaudióloga desde 1994 (Univ. Franca-SP)
      `,
    },
    { id: 2, nome: "Profissional 2", especialidade: "Podóloga", descricao: "" },
    { id: 3, nome: "Profissional 3", especialidade: "Atendimento", descricao: "" },
  ]);

  const [selectedProfissional, setSelectedProfissional] =
    useState<Profissional | null>(null);

  const handleCardClick = (profissional: Profissional | null) => {
    setSelectedProfissional(profissional);
  };

  const handleCloseModal = () => {
    setSelectedProfissional(null);
  };

  return (
    <div className="profissionais-container">
      <section className="justify-items-center text-center py-10 sm:py-16 lg:py-24 z-40 relative">
        <div className="container mx-auto">
          <h2 className="text-3xl font-light text-gray-800 sm:text-4xl lg:text-5xl">
            Conheça quem são as{" "}
            <span className="block w-full font-light text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700 lg:inline">
              Profissionais
            </span>{" "}
            da clínica de podologia Rita Pacheco:
          </h2>
          <p className="mb-20 mt-2 text-lg text-gray-800">
            Há&nbsp;
            <span className="block w-full font-light bg-clip-text bg-gradient-to-r text-orange-500 lg:inline">
              mais
            </span>{" "}
            de 15 anos!
          </p>

          <div className="flex flex-col=1 gap-6 lg:grid-cols-3 justify-items-center">
            {profissionais.map((profissional) => (
              <a
                key={profissional.id}
                href="javascript:void(0);"
                className="shadow-2xl relative"
                onClick={() => handleCardClick(profissional)}
              >
                <div className="h-95 relative shadow-2xl shadow-zinc-900 overflow-hidden group">
                  <div className="absolute bottom-0 group-hover:bottom-0 left-0 w-full h-full group-hover:bg-zinc-900/50 transition-all ease-in-out duration-500 flex justify-center items-end">
                    <div className="w-full p-5 text-center">
                      <div className="transition-all ease-in-out duration-500">
                        <h2 className="text-2xl font-bold text-white mb-0 pb-1">
                          {profissional.nome}
                        </h2>
                        <p className="text-lg font-light text-white">
                          Especialidade: {profissional.especialidade}
                        </p>
                        <p className="text-sm font-light text-white mt-2 underline">
                          <br /> Saiba mais
                        </p>
                      </div>
                    </div>
                  </div>
                  <Image
                    src="/2.jpg"
                    className="w-full z-0 h-full object-fill"
                    alt="Imagem"
                    width={500}
                    height={500}
                    layout="responsive"
                    loading="lazy"
                  />
                </div>
              </a>
            ))}
          </div>

          {selectedProfissional && (
            <div
              className="fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center"
              onClick={handleCloseModal}
            >
              <div
                className="bg-white p-10 rounded-md shadow-md max-w-lg w-full max-h-[90vh] overflow-y-auto text-center"
                onClick={(e) => e.stopPropagation()}
              >
                <h2 className="text-2xl font-bold">
                  {selectedProfissional.nome}
                </h2>
                <p className="text-lg">
                  Especialidade: {selectedProfissional.especialidade}
                </p>
                <p className="text-lg whitespace-pre-wrap">
                  {selectedProfissional.descricao}
                </p>
                <button
                  className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleCloseModal}
                >
                  Fechar
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

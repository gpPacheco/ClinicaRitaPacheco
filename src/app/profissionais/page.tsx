'use client'
import Image from "next/image"

import React, { useState } from "react";

export default function Profissionais() {
  const [profissionais, setProfissionais] = useState([
    { id: 1, nome: "Rita Fernandes Rosa Pacheco", especialidade: "Podóloga" },
    { id: 2, nome: "Profissional 2", especialidade: "Especialidade 2" },
  ]);

  return (
    <div className="profissionais-container">
      <section className="py-10 bg-w sm:py-16 lg:py-24 z-40 relative">
        <div className="container mx-auto">
          <h2 className="text-3xl font-light text-gray-800 sm:text-4xl lg:text-5xl">
            Conheça quem são as{" "}
            <span className="block w-full font-light text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-800 lg:inline">
              Profissionais
            </span>{" "}
            da clínica de podologia Rita Pacheco:
          </h2>
          <p className="mb-20 text-lg text-gray-800">
            A&nbsp;
            <span className="block w-full font-light text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-500 lg:inline">
              mais
            </span>{" "} 
            de 15 anos!
          </p>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
            {profissionais.map((profissional) => (
              <a key={profissional.id} href="#" className="shadow-2xl relative">
                <div className="h-full relative shadow-2xl shadow-green-900 overflow-hidden group">
                  <div className="absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500">
                    <div className="w-full h-full p-5 relative">
                      <div className="absolute bottom-0 group-hover:bottom-24 text-white text-left transition-all ease-in-out duration-500">
                        <h2 className="text-2xl font-bold text-white mb-0 pb-1">
                          {profissional.nome}
                        </h2>
                        <p className="text-lg font-light text-white">
                          Especialidade: {profissional.especialidade}
                        </p>
                      </div>
                    </div>
                  </div>
                  <Image
                    src="https://source.unsplash.com/random/400x400/"
                    className="w-full z-0 h-full object-fill example"
                    alt="Imagem"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

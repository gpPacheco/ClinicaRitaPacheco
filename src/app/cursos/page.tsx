"use client";
import React from "react";

export default function Cursos() {
  const cursos = [
    {
      titulo: "Curso de Podologia Básica",
      descricao: "Aprenda os fundamentos da podologia e comece sua carreira.",
      link: "#",
    },
    {
      titulo: "Curso Avançado de Podologia",
      descricao: "Aprofunde-se em técnicas avançadas e especialize-se.",
      link: "#",
    },
    {
      titulo: "Workshop de Cuidados com os Pés",
      descricao: "Dicas práticas e cuidados essenciais para manter os pés saudáveis.",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7f0ea] to-[#dbbeb0] flex flex-col items-center justify-start py-5">
      <header className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-light text-gray-800">
          Cursos{" "}
          <span className="block w-full font-light text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700 lg:inline">
            Disponíveis
          </span>
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-md mx-auto">
          Explore nossos cursos e aprimore suas habilidades na área de podologia.
        </p>
      </header>

      <div className="grid gap-8 max-w-5xl mx-auto px-4 sm:grid-cols-2 lg:grid-cols-3">
        {cursos.map((curso, index) => (
          <div key={index} className="bg-[#fdf6f1] p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-[#7b4f38] mb-2">
              {curso.titulo}
            </h2>
            <p className="text-gray-700 mb-4">{curso.descricao}</p>
            <a
              href={curso.link}
              className="inline-block bg-[#F2784B] hover:bg-orange-500 text-white px-4 py-2 rounded-full transition-transform transform hover:scale-105"
            >
              Saiba mais
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

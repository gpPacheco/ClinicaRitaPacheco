"use client";
import React from "react";
import Cursos from "./cursos";
import Mentoria from "./mentoria";

export default function Aprenda() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7f0ea] to-[#dbbeb0] flex flex-col items-center justify-start py-5">
      <header className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-light text-gray-800">
          Aprenda com a{" "}
          <span className="block w-full font-light text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700 lg:inline">
            Rita Pacheco
          </span>
        </h1>
        <p className="mt-4 text-lg text-gray-700 mx-6">
          Conheça nossos cursos e mentorias para aprimorar suas habilidades na
          área de podologia.
        </p>
      </header>

      {/* Seção de Cursos */}
      <Cursos />

      {/* Seção de Mentoria */}
      <Mentoria />
    </div>
  );
}

//   ______    ____
//  /\    /\  | "o |
// |  \/\/  |/ ___\|
// |gpPacheco_/
// /_/_/ /_/_/

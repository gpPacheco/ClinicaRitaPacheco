"use client";
import { FaixaContato } from "@/app/front-end/components/button";
import React from "react";
import { FaHandHoldingHeart, FaRegLightbulb, FaMedal } from "react-icons/fa";

export default function Sobre() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#f7f0ea] to-[#dbbeb0] p-3">
      <h1 className="text-3xl font-light py-5 text-gray-800 sm:text-4xl lg:text-5xl text-center mb-5">
        Sobre a{" "}
        <span className="font-light text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">
          Clínica Rita Pacheco
        </span>
      </h1>

      {/* Seções de Missão, Visão e Valores */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <div className="bg-[#dbbeb0] p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 text-center">
          <FaHandHoldingHeart className="text-4xl text-zinc-600 mx-auto mb-4" />
          <h2 className="text-2xl font-light text-gray-800 mb-2">Missão</h2>
          <p className="text-gray-700">
            Oferecer cuidados podológicos de alta qualidade, priorizando a saúde
            e o bem-estar dos nossos pacientes.
          </p>
        </div>

        <div className="bg-[#dbbeb0] p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 text-center">
          <FaRegLightbulb className="text-4xl text-zinc-600 mx-auto mb-4" />
          <h2 className="text-2xl font-light text-gray-800 mb-2">Visão</h2>
          <p className="text-gray-700">
            Ser referência em podologia, promovendo saúde preventiva e
            tratamentos avançados para todas as idades.
          </p>
        </div>

        <div className="bg-[#dbbeb0] p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 text-center">
          <FaMedal className="text-4xl text-zinc-600 mx-auto mb-4" />
          <h2 className="text-2xl font-light text-gray-800 mb-2">Valores</h2>
          <p className="text-gray-700">
            Compromisso, ética, respeito e dedicação para oferecer o melhor
            atendimento aos nossos pacientes.
          </p>
        </div>
      </div>

      {/* Seção de História da Clínica */}
      <div className="bg-[#dbbeb0] p-10 rounded-lg mb-10 shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 text-center max-w-4xl">
        <h2 className="text-3xl font-light text-gray-800 mb-6">
          Nossa História
        </h2>
        <p className="text-lg text-gray-700">
          Fundada em 2010 pela podóloga Rita Pacheco, nossa clínica vem se
          destacando pela excelência no atendimento e nos cuidados com os pés de
          nossos pacientes. Com mais de 15 anos de experiência, Rita se tornou
          uma referência em tratamentos podológicos, atuando com ética e paixão.
          A clínica é reconhecida por sua abordagem humanizada e pelos
          resultados que melhoram a qualidade de vida de todos que nos procuram.
        </p>
      </div>

      {/* Botão de Agendamento */}
      <FaixaContato />
    </div>
  );
}

//   ______    ____
//  /\    /\  | "o |
// |  \/\/  |/ ___\|
// |gpPacheco_/
// /_/_/ /_/_/

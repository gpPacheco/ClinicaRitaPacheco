"use client";
import React from "react";
import {
  FaHandHoldingMedical,
  FaHeartbeat,
  FaChild,
  FaHospital,
  FaRunning,
  FaVial,
  FaHandHoldingWater,
  FaBandAid,
} from "react-icons/fa";
import { FaixaContato } from "@/components/button";

const especialidades = [
  {
    name: "Onicocriptose: Unha Encravada",
    description:
      "Técnicas especializadas para aliviar a dor causada pelas unhas encravadas, prevenir infecções e promover a saúde dos pés.",
    icon: <FaBandAid />,
  },
  {
    name: "Pé de Risco: Diabético / Neuro-Vascular",
    description:
      "Tratamentos especializados para prevenir, diagnosticar e tratar complicações dos pacientes diabéticos.",
    icon: <FaHandHoldingMedical />,
  },
  {
    name: "Podologia Geriátrica",
    description:
      "Cuidados para prevenir problemas e garantir conforto para os pés dos idosos.",
    icon: <FaHeartbeat />,
  },
  {
    name: "Podologia Hospitalar",
    description:
      "Atendimento de pacientes hospitalizados, focando em patologias diversas como diabetes, neuropatia e hanseníase.",
    icon: <FaHospital />,
  },
  {
    name: "Podologia Infantil",
    description:
      "Cuidar dos pés das crianças, prevenindo e tratando problemas podológicos.",
    icon: <FaChild />,
  },
  {
    name: "Podologia Esportiva",
    description:
      "Prevenção e tratamento de lesões nos pés causadas por atividades físicas.",
    icon: <FaRunning />,
  },
  {
    name: "Cauterização de Verrugas Plantares",
    description: "Tratamentos para remoção segura de verrugas plantares.",
    icon: <FaVial />,
  },
  {
    name: "Tratamentos Especializados",
    description: (
      <>
        Tratamentos personalizados para diversas condições podológicas, com
        destaque especial para a <strong>Micose</strong>, além de outras
        patologias dos pés.
      </>
    ),
    icon: <FaHandHoldingWater />,
  },
];

export default function Especialidades() {
  return (
    <div className="py-5 z-40 relative bg-gradient-to-b from-[#f7f0ea] to-[#dbbeb0]">
      <div className="container mb-6 mx-auto">
        <h2 className="text-3xl font-light text-gray-800 sm:text-4xl lg:text-5xl text-center mb-5">
          Especialidades da{" "}
          <span className="font-light text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">
            Clínica
          </span>
        </h2>
        <p className="mt-2 text-lg text-gray-800 text-center mb-12">
          Cuidamos da saúde dos seus pés em todas as fases da vida!
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 justify-items-center mx-3">
          {especialidades.map((especialidade, index) => (
            <div
              key={index}
              className="bg-[#dbbeb0] text-zinc-700 shadow-2xl p-6 rounded-md transition-transform duration-300 hover:scale-105 flex flex-col items-center text-center max-w-md"
            >
              <div className="flex justify-center items-center text-5xl mb-4 text-zinc-600">
                {especialidade.icon}
              </div>{" "}
              {/* Ícone centralizado */}
              <h3 className="text-base font-bold mb-4">{especialidade.name}</h3>
              <p className="text-gray-700 mb-6">{especialidade.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <FaixaContato />
        </div>
      </div>
    </div>
  );
}

//   ______    ____
//  /\    /\  | "o |
// |  \/\/  |/ ___\|
// |gpPacheco_/
// /_/_/ /_/_/

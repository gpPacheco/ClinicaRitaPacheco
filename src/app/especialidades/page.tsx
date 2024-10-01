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
import { useState, useEffect } from "react";
import { Calendar as CalendarIcon, X } from "lucide-react";
import { Calendar } from "react-calendar";
import { CalendarProps } from "react-calendar";
import "react-calendar/dist/Calendar.css";

type Value = CalendarProps["value"];

const especialidades = [
  {
    name: "Unhas Encravadas",
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
  const [isOpen, setIsOpen] = useState(false);
  const [nome, setNome] = useState("");
  const [dataAgendamento, setDataAgendamento] = useState<Date | null>(
    new Date()
  );
  const [dataInvalida, setDataInvalida] = useState(false);
  const [hasCadastro, setHasCadastro] = useState<null | boolean>(null); // Estado para verificar se o usuário tem cadastro

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleWhatsApp = () => {
    const mensagem = hasCadastro
      ? `Olá, já tenho cadastro e gostaria de agendar uma consulta no dia: ${dataAgendamento?.toLocaleDateString()}`
      : `Olá, meu nome é ${nome}, gostaria de agendar uma consulta no dia: ${dataAgendamento?.toLocaleDateString()}`;

    const whatsappUrl = `https://wa.me/+5516993108637?text=${encodeURIComponent(
      mensagem
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleDateChange = (value: Value) => {
    let selectedDate: Date | null = null;

    if (Array.isArray(value)) {
      selectedDate = value[0] instanceof Date ? value[0] : null;
    } else {
      selectedDate = value as Date | null;
    }

    if (selectedDate) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      selectedDate.setHours(0, 0, 0, 0);

      if (selectedDate < today) {
        setDataInvalida(true);
      } else {
        setDataInvalida(false);
        setDataAgendamento(selectedDate);
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && target.closest(".modal-content") === null) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  return (
    <section className="py-10 sm:py-16 lg:py-24 z-40 relative bg-gradient-to-b from-[#f7f0ea] to-[#dbbeb0]">
      <div className="container mt-0 mb-6 mx-auto">
        <h2 className="text-3xl font-light text-gray-800 sm:text-4xl lg:text-5xl text-center">
          Especialidades da Clínica
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
      </div>

      <div className="flex flex-col items-center justify-center w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Agende sua consulta
        </h2>
        <button
          onClick={handleOpen}
          className="bg-[#F2784B] text-white px-6 py-2 rounded shadow-md hover:bg-orange-500 transition"
        >
          Agendar Consulta
          <CalendarIcon className="inline ml-2" />
        </button>

        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="modal-content bg-[#f7f0ea] p-4 rounded-md w-full max-w-md relative mx-4">
              <button onClick={handleClose} className="absolute top-2 right-2">
                <X size={22} />
              </button>
              <h2 className="text-xl font-bold mb-4 text-center">
                Agende sua consulta
              </h2>

              <form className="space-y-4">
                <div className="p-2 rounded w-full h-full flex justify-center items-center">
                  <Calendar
                    onChange={handleDateChange}
                    value={dataAgendamento}
                    className="w-full h-full rounded-md shadow-sm"
                    tileClassName={({ activeStartDate, date, view }) =>
                      date.toDateString() === dataAgendamento?.toDateString()
                        ? "bg-orange-500 text-white"
                        : "hover:bg-orange-200"
                    }
                    prevLabel={<span className="text-2xl">{"‹"}</span>}
                    nextLabel={<span className="text-2xl">{"›"}</span>}
                    prev2Label={<span className="text-2xl">{"«"}</span>}
                    next2Label={<span className="text-2xl">{"»"}</span>}
                  />
                </div>

                {dataInvalida && (
                  <p className="text-red-500 text-sm">
                    Não é possível agendar uma data no passado.
                  </p>
                )}

                {dataAgendamento && (
                  <>
                    {hasCadastro === null && (
                      <div className="flex justify-center space-x-4">
                        <button
                          type="button"
                          onClick={() => setHasCadastro(true)}
                          className="bg-green-500 text-white w-1/2 py-2 rounded shadow-md"
                        >
                          Já tenho cadastro
                        </button>
                        <button
                          type="button"
                          onClick={() => setHasCadastro(false)}
                          className="bg-orange-500 text-white w-1/2 py-2 rounded shadow-md"
                        >
                          Não tenho cadastro
                        </button>
                      </div>
                    )}

                    {hasCadastro === false && (
                      <>
                        <input
                          type="text"
                          placeholder="Nome completo"
                          value={nome}
                          onChange={(e) => setNome(e.target.value)}
                          className="w-full border p-2 rounded bg-[#f7f0ea] shadow-md"
                          required
                        />
                        <button
                          type="button"
                          onClick={handleWhatsApp}
                          className={`bg-green-500 text-white w-full py-2 rounded shadow-md ${
                            !nome || dataInvalida
                              ? "opacity-50 cursor-not-allowed"
                              : ""
                          }`}
                          disabled={!nome || dataInvalida}
                        >
                          Agendar via WhatsApp
                        </button>
                        <p className="text-sm text-gray-600 mt-2">
                          Caso tenha cadastro,{" "}
                          <button
                            type="button"
                            onClick={() => setHasCadastro(true)}
                            className="text-blue-500 underline"
                          >
                            clique aqui
                          </button>
                        </p>
                      </>
                    )}

                    {hasCadastro === true && (
                      <>
                        <button
                          type="button"
                          onClick={handleWhatsApp}
                          className="bg-green-500 text-white w-full py-2 rounded shadow-md"
                        >
                          Agendar via WhatsApp
                        </button>
                        <p className="text-sm text-gray-600 mt-2">
                          Caso não tenha cadastro,{" "}
                          <button
                            type="button"
                            onClick={() => setHasCadastro(false)}
                            className="text-blue-500 underline"
                          >
                            clique aqui
                          </button>
                        </p>
                      </>
                    )}
                  </>
                )}
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

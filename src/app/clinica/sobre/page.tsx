"use client";
import React from "react";
import { FaHandHoldingHeart, FaRegLightbulb, FaMedal } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Calendar as CalendarIcon, X } from "lucide-react";
import { Calendar } from "react-calendar";
import { CalendarProps } from "react-calendar";
import "react-calendar/dist/Calendar.css";

type Value = CalendarProps["value"];

export default function Sobre() {
  const [isOpen, setIsOpen] = useState(false);
  const [nome, setNome] = useState("");
  const [dataAgendamento, setDataAgendamento] = useState<Date | null>(new Date());
  const [dataInvalida, setDataInvalida] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleWhatsApp = () => {
    const whatsappUrl = `https://wa.me/+5516993108637?text=Olá, meu nome é ${nome}, gostaria de agendar uma consulta no dia: ${dataAgendamento?.toLocaleDateString()}`;
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
      // Remove a hora para comparar apenas as datas
      today.setHours(0, 0, 0, 0);
      selectedDate.setHours(0, 0, 0, 0);

      // Verifica se a data escolhida é anterior ao dia de hoje
      if (selectedDate < today) {
        setDataInvalida(true);
      } else {
        setDataInvalida(false);
        setDataAgendamento(selectedDate);
      }
    }
  };

  // Fecha o modal ao clicar fora do card
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-light text-gray-800 sm:text-5xl lg:text-6xl text-center mb-10">
        Sobre a{" "}
        <span className="font-light text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">
          Clínica Rita Pacheco
        </span>
      </h1>

      {/* Seções de Missão, Visão e Valores */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <div className="bg-[#f7f0ea] p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 text-center">
          <FaHandHoldingHeart className="text-4xl text-orange-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Missão</h2>
          <p className="text-gray-700">
            Oferecer cuidados podológicos de alta qualidade, priorizando a saúde
            e o bem-estar dos nossos pacientes.
          </p>
        </div>

        <div className="bg-[#f7f0ea] p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 text-center">
          <FaRegLightbulb className="text-4xl text-orange-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Visão</h2>
          <p className="text-gray-700">
            Ser referência em podologia, promovendo saúde preventiva e
            tratamentos avançados para todas as idades.
          </p>
        </div>

        <div className="bg-[#f7f0ea] p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 text-center">
          <FaMedal className="text-4xl text-orange-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Valores</h2>
          <p className="text-gray-700">
            Compromisso, ética, respeito e dedicação para oferecer o melhor
            atendimento aos nossos pacientes.
          </p>
        </div>
      </div>

      {/* Seção de História da Clínica */}
      <div className="bg-[#f7f0ea] p-10 rounded-lg mb-10 shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 text-center max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Nossa História</h2>
        <p className="text-lg text-gray-700">
          Fundada em 2010 pela podóloga Rita Pacheco, nossa clínica vem se
          destacando pela excelência no atendimento e nos cuidados com os pés de
          nossos pacientes. Com mais de 15 anos de experiência, Rita se tornou
          uma referência em tratamentos podológicos, atuando com ética e
          paixão. A clínica é reconhecida por sua abordagem humanizada e pelos
          resultados que melhoram a qualidade de vida de todos que nos
          procuram.
        </p>
      </div>

      {/* Botão de Agendamento */}
      <div className="flex flex-col items-center justify-center w-full bg-[#f7f0ea] py-6 shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Agende sua consulta
        </h2>
        <button
          onClick={handleOpen}
          className="bg-orange-400 text-white px-6 py-2 rounded shadow-md hover:bg-orange-500 transition"
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
                <input
                  type="text"
                  placeholder="Nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="w-full border p-2 rounded bg-[#f7f0ea] shadow-md"
                  required
                />

                <div className="p-2 rounde w-full h-full flex justify-center items-center">
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

                {/* Mensagem de erro para datas inválidas */}
                {dataInvalida && (
                  <p className="text-red-500 text-sm">
                    Não é possível agendar uma data no passado.
                  </p>
                )}

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className={`bg-green-500 text-white w-full py-2 rounded shadow-md ${
                    !nome || dataInvalida ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={!nome || dataInvalida}
                >
                  {nome
                    ? "Agendar via WhatsApp"
                    : "Por favor, digite seu nome para agendar"}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

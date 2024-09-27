"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Calendar as CalendarIcon,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Calendar, CalendarProps } from "react-calendar";
import "react-calendar/dist/Calendar.css";

type Value = CalendarProps["value"];

type CarrosselProps = {
  imagens: string[];
  descricao: string;
};

function Carrossel({ imagens, descricao }: CarrosselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % imagens.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + imagens.length) % imagens.length);
  };

  return (
    <div className="relative w-full h-96 overflow-hidden mb-8">
      <Image
        src={imagens[currentIndex]}
        alt={descricao}
        className="w-full object-cover rounded-lg"
        width={500}
        height={300}
      />
      {/* Setas de navegação */}
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
      >
        <ChevronRight size={24} />
      </button>
      {/* Bolinhas indicadoras */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {imagens.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full ${
              currentIndex === index ? "bg-orange-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
      <p className="mt-4 text-center text-lg text-gray-700">{descricao}</p>
    </div>
  );
}

export default function Espaco() {
  const [isOpen, setIsOpen] = useState(false);
  const [nome, setNome] = useState("");
  const [dataAgendamento, setDataAgendamento] = useState<Date | null>(
    new Date()
  );
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
    <div className="px-4 py-12 bg-gradient-to-b from-[#f7f0ea] to-[#dbbeb0]">
      <h1 className="text-4xl font-light text-gray-800 sm:text-5xl lg:text-6xl text-center mb-10">
        Conheça Nosso{" "}
        <span className="font-light text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">
          Espaço
        </span>
      </h1>

      {/* Seção do Espaço Geral */}
      <section className="mb-16">
        <h3 className="text-2xl text-center text-gray-800 mb-6">
          Espaço Geral da Clínica
        </h3>
        <Carrossel
          imagens={["/main-banner_a.jpg", "/main-banner_b.jpg"]}
          descricao="Veja as imagens do espaço geral"
        />
      </section>

      {/* Seção do SPA */}
      <section className="mb-16">
        <h3 className="text-2xl text-center text-gray-800 mb-6">
          SPA da Clínica
        </h3>
        <Carrossel
          imagens={["/main-banner_c.jpg", "/main-banner_d.jpg"]}
          descricao="Conheça o SPA exclusivo da clínica"
        />
      </section>

      {/* Seção da Sala Infantil */}
      <section className="mb-16">
        <h3 className="text-2xl text-center text-gray-800 mb-6">
          Sala Infantil
        </h3>
        <Carrossel
          imagens={["/main-banner_e.jpg", "/main-banner_f.jpg"]}
          descricao="Espaço dedicado às crianças"
        />
      </section>

      {/* Botão de Agendamento */}
      <div className="flex flex-col items-center justify-center w-full">
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

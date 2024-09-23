"use client";
import { useState, useEffect } from "react";
import { Calendar as CalendarIcon, X } from "lucide-react";
import { Calendar } from "react-calendar";
import { CalendarProps } from "react-calendar";
import "react-calendar/dist/Calendar.css";

type Value = CalendarProps["value"];

export function FaixaContato() {
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
    <div className="flex flex-col items-center justify-center w-full bg-[#f7f0ea] py-6">
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
  );
}

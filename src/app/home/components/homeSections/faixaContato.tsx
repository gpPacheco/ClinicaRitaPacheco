"use client";
import { useState } from "react";
import { Calendar as CalendarIcon, X } from "lucide-react";
import { Calendar } from "react-calendar";

export function FaixaContato() {
  const [isOpen, setIsOpen] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [dataAgendamento, setDataAgendamento] = useState<Date | null>(new Date());

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  function handleWhatsApp() {
    const whatsappUrl = `https://wa.me/+5516993108637${telefone}?text=${nome}.%20Agendamento%20para%20${dataAgendamento?.toLocaleDateString()}`;
    window.open(whatsappUrl, "_blank");
  }

  return (
    <div className="bg-zinc-100 flex w-full h-auto justify-center text-lg py-4 px-6 items-center shadow-md rounded-md">
      <span className="italic text-zinc-700 mr-4 text-center">
        Agende sua consulta:
      </span>
      <div className="flex items-center">
        <button
          onClick={handleOpen}
          className="bg-zinc-200 hover:bg-zinc-300 text-zinc-800 font-semibold py-2 px-6 text-base transition-all flex items-center border border-zinc-300 rounded shadow-sm hover:shadow-lg"
        >
          Agendar
          <CalendarIcon size={20} className="ml-2" strokeWidth={2} />
        </button>
      </div>

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-md w-full max-w-md relative">
            <button
              onClick={handleClose}
              className="absolute top-2.5 right-2 p-2 text-gray-500 hover:text-gray-800"
            >
              <X size={22} />
            </button>
            <h2 className="text-lg font-bold mb-4">Agende sua consulta</h2>
            <form>
              <label className="block mb-2">
                <span className="text-gray-700">Nome:</span>
                <input
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </label>
              <label className="block mb-2">
                <span className="text-gray-700">E-mail:</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </label>
              <label className="block mb-2">
                <span className="text-gray-700">Telefone:</span>
                <input
                  type="tel"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </label>
              <div className="flex justify-center mb-4 border border-gray-300 rounded p-4 shadow-md">
                <div className="flex flex-col w-full h-full">
                  <div className="flex justify-between mb-2">
                    <button
                      className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded"
                      onClick={() =>
                        setDataAgendamento(
                          new Date(
                            dataAgendamento?.getFullYear() || new Date().getFullYear(),
                            (dataAgendamento?.getMonth() || 1) - 1,
                            1
                          )
                        )
                      }
                    >
                      &#x2190;
                    </button>
                    <div className="flex items-center">
                      <span className="text-gray-700 font-bold">
                        {dataAgendamento?.toLocaleString("default", {
                          month: "long",
                        })}{" "}
                        {dataAgendamento?.getFullYear()}
                      </span>
                    </div>
                    <button
                      className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded"
                      onClick={() =>
                        setDataAgendamento(
                          new Date(
                            dataAgendamento?.getFullYear() || new Date().getFullYear(),
                            (dataAgendamento?.getMonth() || 0) + 1,
                            1
                          )
                        )
                      }
                    >
                      &#x2192;
                    </button>
                  </div>
                  <Calendar
                    onChange={(value, event) => {
                      if (value instanceof Date) {
                        setDataAgendamento(value);
                      }
                    }}
                    value={dataAgendamento}
                    className="w-full h-full text-gray-700"
                    tileClassName={({ date, view }) => {
                      if (view === "month") {
                        return "border-r border-b border-gray-300";
                      }
                      return "";
                    }}
                  />
                </div>
              </div>
              <button
                onClick={handleWhatsApp}
                className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded w-full"
              >
                Agendar
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

//   ______    ____
//  /\    /\  | "o |
// |  \/\/  |/ ___\|
// |gpPacheco_/
// /_/_/ /_/_/
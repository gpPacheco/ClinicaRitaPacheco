"use client";
import { useState } from "react";
import Image from "next/image";
import { Calendar as CalendarIcon, X } from "lucide-react";
import { Calendar } from "react-calendar";

export default function Espaco() {
  const [isOpen, setIsOpen] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [dataAgendamento, setDataAgendamento] = useState<Date | null>(new Date());

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const handleWhatsApp = () => {
    const whatsappUrl = `https://wa.me/+5516993108637${telefone}?text=${nome}%20gostaria%20de%20agendar%20consulta%20para%20${dataAgendamento?.toLocaleDateString()}`;
    window.open(whatsappUrl, "_blank");
  };

  const renderCarrossel = (imagens: string[], descricao: string) => (
    <div className="relative w-full h-96 overflow-hidden mb-8">
      <div className="flex transition-all duration-500 ease-in-out">
        {imagens.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={descricao}
            className="w-full object-cover rounded-lg"
            width={500}
            height={300}
          />
        ))}
      </div>
      <p className="mt-4 text-center text-lg text-gray-700">{descricao}</p>
    </div>
  );

  return (
    <div className="px-4 py-12 bg-gray-100">
      <h2 className="text-4xl font-semibold text-center text-orange-600 mb-12">Conheça Nosso Espaço</h2>

      {/* Seção do Espaço Geral */}
      <section className="mb-16">
        <h3 className="text-2xl text-center text-gray-800 mb-6">Espaço Geral da Clínica</h3>
        {renderCarrossel(["/espaco-geral-1.jpg", "/espaco-geral-2.jpg"], "Veja as imagens do espaço geral")}
      </section>

      {/* Seção do SPA */}
      <section className="mb-16">
        <h3 className="text-2xl text-center text-gray-800 mb-6">SPA da Clínica</h3>
        {renderCarrossel(["/spa-1.jpg", "/spa-2.jpg"], "Conheça o SPA exclusivo da clínica")}
      </section>

      {/* Seção da Sala Infantil */}
      <section className="mb-16">
        <h3 className="text-2xl text-center text-gray-800 mb-6">Sala Infantil</h3>
        {renderCarrossel(["/sala-infantil-1.jpg", "/sala-infantil-2.jpg"], "Espaço dedicado às crianças")}
      </section>

      {/* Faixa de Agendamento */}
      <div className="bg-zinc-100 flex justify-center py-4 px-6 items-center shadow-md rounded-md">
        <span className="italic text-zinc-700 mr-4">Agende sua consulta:</span>
        <button
          onClick={handleOpen}
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 flex items-center rounded shadow"
        >
          Agendar
          <CalendarIcon size={20} className="ml-2" strokeWidth={2} />
        </button>
      </div>

      {/* Modal de Agendamento */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md w-full max-w-md relative">
            <button onClick={handleClose} className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-800">
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
                  className="w-full py-2 px-3 border rounded shadow focus:outline-none"
                />
              </label>
              <label className="block mb-2">
                <span className="text-gray-700">E-mail:</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full py-2 px-3 border rounded shadow focus:outline-none"
                />
              </label>
              <label className="block mb-2">
                <span className="text-gray-700">Telefone:</span>
                <input
                  type="tel"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  className="w-full py-2 px-3 border rounded shadow focus:outline-none"
                />
              </label>
              <div className="mb-4">
                <Calendar onChange={(value) => setDataAgendamento(value as Date)} value={dataAgendamento} />
              </div>
              <button
                type="button"
                onClick={handleWhatsApp}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded shadow"
              >
                Agendar via WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

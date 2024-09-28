"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Calendar as CalendarIcon, X } from "lucide-react";
import { Calendar, CalendarProps } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Carousel } from "primereact/carousel";

type Value = CalendarProps["value"];

type Product = {
  id: string;
  image: string;
  description: string;
};

type CarrosselProps = {
  imagens: string[];
  descricao: string;
};

export default function Espaco() {
  const [isOpen, setIsOpen] = useState(false);
  const [nome, setNome] = useState("");
  const [dataAgendamento, setDataAgendamento] = useState<Date | null>(
    new Date()
  );
  const [dataInvalida, setDataInvalida] = useState(false);
  const [hasCadastro, setHasCadastro] = useState<null | boolean>(null);

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

  const productTemplate = (product: Product) => {
    return (
      <div className="product-item">
        <div className="product-image">
          <Image
            src={product.image}
            alt={product.description}
            width={500}
            height={300}
            className="object-cover rounded-lg"
          />
        </div>
        <div className="product-detail">
          <p className="mt-2 text-center text-lg text-gray-700">
            {product.description}
          </p>
        </div>
      </div>
    );
  };

  const products = [
    { id: "1", image: "/main-banner_a.jpg" },
    { id: "2", image: "/main-banner_b.jpg" },
    { id: "3", image: "/main-banner_c.jpg" },
    { id: "4", image: "/main-banner_d.jpg" },
    { id: "5", image: "/main-banner_e.jpg" },
  ];

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
        <Carousel
          value={products}
          numVisible={3}
          numScroll={1}
          circular
          autoplayInterval={3000}
          itemTemplate={productTemplate}
          responsiveOptions={[
            {
              breakpoint: "1024px",
              numVisible: 2,
              numScroll: 1,
            },
            {
              breakpoint: "768px",
              numVisible: 1,
              numScroll: 1,
            },
          ]}
        />
      </section>

      {/* Seção do Espaço Geral */}
      <section className="mb-16">
        <h3 className="text-2xl text-center text-gray-800 mb-6">
          Spa
        </h3>
        <Carousel
          value={products}
          numVisible={3}
          numScroll={1}
          circular
          autoplayInterval={3000}
          itemTemplate={productTemplate}
          responsiveOptions={[
            {
              breakpoint: "1024px",
              numVisible: 2,
              numScroll: 1,
            },
            {
              breakpoint: "768px",
              numVisible: 1,
              numScroll: 1,
            },
          ]}
        />
      </section>

      {/* Seção do Espaço Geral */}
      <section className="mb-16">
        <h3 className="text-2xl text-center text-gray-800 mb-6">
          Sala Infantil
        </h3>
        <Carousel
          value={products}
          numVisible={3}
          numScroll={1}
          circular
          autoplayInterval={3000}
          itemTemplate={productTemplate}
          responsiveOptions={[
            {
              breakpoint: "1024px",
              numVisible: 2,
              numScroll: 1,
            },
            {
              breakpoint: "768px",
              numVisible: 1,
              numScroll: 1,
            },
          ]}
        />
      </section>

      {/* Botão de Agendamento */}
      <div className="flex flex-col items-center justify-center w-full">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Agende sua consulta</h2>
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
            <h2 className="text-xl font-bold mb-4 text-center">Agende sua consulta</h2>

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
                          !nome || dataInvalida ? "opacity-50 cursor-not-allowed" : ""
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
    </div>
  );
}

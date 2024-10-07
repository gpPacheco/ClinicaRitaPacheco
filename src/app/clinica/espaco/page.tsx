'use client';
import Image from "next/image";
import { Carousel } from "primereact/carousel";
import { FaixaContato } from "@/app/components/button";

export default function Espaco() {
  type CarouselItem = {
    description: string;
    id: string;
    image: string;
  };

  const carouselTemplate = (carousel: CarouselItem) => {
    return (
      <div className="carousel-item flex justify-center">
        <div className="carousel-image">
          <Image
            src={carousel.image}
            alt={carousel.description}
            width={800} // Definindo um tamanho padrão
            height={500} // Definindo um tamanho padrão
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="carousel-detail">
          <p className="mt-2 text-center text-base text-gray-700">
            {carousel.description}
          </p>
        </div>
      </div>
    );
  };

  const carouselEspacoGeral = [
    { id: "1", image: "/main-banner_a.jpg" },
    { id: "2", image: "/main-banner_b.jpg" },
    { id: "3", image: "/main-banner_c.jpg" },
    { id: "4", image: "/main-banner_d.jpg" },
    { id: "5", image: "/main-banner_e.jpg" },
  ];

  const carouselSpa = [
    { id: "1", image: "/main-banner_a.jpg" },
    { id: "2", image: "/main-banner_b.jpg" },
    { id: "3", image: "/main-banner_c.jpg" },
    { id: "4", image: "/main-banner_d.jpg" },
    { id: "5", image: "/main-banner_e.jpg" },
  ];

  const carouselSalaInfantil = [
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
      <div className="mb-16">
        <h3 className="text-2xl text-center text-gray-800 mb-6">
          Espaço Geral da Clínica
        </h3>
        <Carousel
          value={carouselEspacoGeral}
          numVisible={1}
          numScroll={1}
          circular
          autoplayInterval={3000}
          itemTemplate={carouselTemplate}
          className="mx-auto max-w-[800px]"
          responsiveOptions={[
            {
              breakpoint: "1024px",
              numVisible: 1,
              numScroll: 1,
            },
            {
              breakpoint: "768px",
              numVisible: 1,
              numScroll: 1,
            },
          ]}
        />
      </div>

      {/* Seção do Spa */}
      <div className="mb-16">
        <h3 className="text-2xl text-center text-gray-800 mb-6">Spa</h3>
        <Carousel
          value={carouselSpa}
          numVisible={1}
          numScroll={1}
          circular
          autoplayInterval={3000}
          itemTemplate={carouselTemplate}
          className="mx-auto max-w-[800px]"
          responsiveOptions={[
            {
              breakpoint: "1024px",
              numVisible: 1,
              numScroll: 1,
            },
            {
              breakpoint: "768px",
              numVisible: 1,
              numScroll: 1,
            },
          ]}
        />
      </div>

      {/* Seção da Sala Infantil */}
      <div className="mb-16">
        <h3 className="text-2xl text-center text-gray-800 mb-6">
          Sala Infantil
        </h3>
        <Carousel
          value={carouselSalaInfantil}
          numVisible={1}
          numScroll={1}
          circular
          autoplayInterval={3000}
          itemTemplate={carouselTemplate}
          className="mx-auto max-w-[800px]"
          responsiveOptions={[
            {
              breakpoint: "1024px",
              numVisible: 1,
              numScroll: 1,
            },
            {
              breakpoint: "768px",
              numVisible: 1,
              numScroll: 1,
            },
          ]}
        />
      </div>

      {/* Botão de Agendamento */}
      <FaixaContato />
    </div>
  );
}

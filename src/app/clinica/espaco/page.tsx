"use client";
import Image from "next/image";
import { Carousel } from "primereact/carousel";
import { FaixaContato } from "@/app/components/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
            width={800}
            height={500}
            className="object-cover rounded-lg shadow-lg 
              h-[300px] sm:h-[200px] md:h-[400px] lg:h-[450px] xl:h-[500px]"
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
    { id: "1", image: "/sobre/1.jpg" },
    { id: "2", image: "/sobre/7.jpg" },
    { id: "3", image: "/sobre/10.jpg" },
    { id: "4", image: "/sobre/15.jpg" },
    { id: "5", image: "/sobre/17.jpg" },
    { id: "6", image: "/sobre/9.jpg" },
    { id: "7", image: "/sobre/5.jpg" },
    { id: "8", image: "/sobre/3.jpg" },
  ];

  const carouselSpa = [
    { id: "1", image: "/sobre/21.jpg" },
    { id: "2", image: "/spa/2.jpg" },
    { id: "3", image: "/spa/3.jpg" },
    { id: "4", image: "/spa/4.jpg" },
    { id: "5", image: "/spa/5.jpg" },
    { id: "6", image: "/spa/6.jpg" },
    { id: "7", image: "/spa/7.jpg" },
    { id: "8", image: "/spa/8.jpg" },
    { id: "9", image: "/spa/9.jpg" },
    { id: "10", image: "/spa/11.jpg" },
  ];

  const carouselSalaInfantil = [
    { id: "1", image: "/podologia_infantil/2.jpg" },
    { id: "2", image: "/podologia_infantil/12.jpg" },
    { id: "3", image: "/podologia_infantil/6.jpg" },
    { id: "4", image: "/podologia_infantil/10.jpg" },
    { id: "5", image: "/podologia_infantil/8.jpg" },
    { id: "6", image: "/podologia_infantil/15.jpg" },
    { id: "7", image: "/podologia_infantil/19.jpg" },
  ];

  return (
    <div className="px-1 py-5 bg-gradient-to-b from-[#f7f0ea] to-[#dbbeb0]">
      <h1 className="text-3xl font-light text-gray-800 sm:text-4xl lg:text-5xl text-center mb-5">
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
          prevIcon={
            <ChevronLeft
              size={30}
              className="text-zinc-500 hover:text-zinc-700 transition duration-200"
              style={{ cursor: "pointer" }}
            />
          }
          nextIcon={
            <ChevronRight
              size={30}
              className="text-zinc-500 hover:text-zinc-700 transition duration-200"
              style={{ cursor: "pointer" }}
            />
          }
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
          prevIcon={
            <ChevronLeft
              size={30}
              className="text-zinc-500 hover:text-zinc-700 transition duration-200"
              style={{ cursor: "pointer" }}
            />
          }
          nextIcon={
            <ChevronRight
              size={30}
              className="text-zinc-500 hover:text-zinc-700 transition duration-200"
              style={{ cursor: "pointer" }}
            />
          }
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
          prevIcon={
            <ChevronLeft
              size={30}
              className="text-zinc-500 hover:text-zinc-700 transition duration-200"
              style={{ cursor: "pointer" }}
            />
          }
          nextIcon={
            <ChevronRight
              size={30}
              className="text-zinc-500 hover:text-zinc-700 transition duration-200"
              style={{ cursor: "pointer" }}
            />
          }
        />
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

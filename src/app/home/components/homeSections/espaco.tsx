"use client";
import Image from "next/image";
import { Carousel } from "primereact/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Local() {
  type CarouselItem = {
    id: string;
    image: string;
  };

  const carouselTemplate = (carousel: CarouselItem) => {
    return (
      <a
        href="/clinica/espaco"
        className="carousel-item flex justify-center"
        key={carousel.id}
      >
        <div className="carousel-image">
          <Image
            src={carousel.image}
            alt={`Imagem ${carousel.id}`}
            width={800}
            height={500}
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      </a>
    );
  };

  const carouselEspacoGeral = [
    { id: "1", image: "/sobre/1.jpg" },
    { id: "2", image: "/spa/foto_b.jpg" },
    { id: "3", image: "/spa/foto_a.jpg" },
    { id: "4", image: "/sobre/3.jpg" },
    { id: "5", image: "/sobre/4.jpg" },
  ];

  return (
    <div className="px-1 py-5 bg-gradient-to-b from-[#dbbeb0] via-[#f7f0ea] to-[#dbbeb0] flex flex-col items-center">
      <h1 className="text-3xl font-light text-gray-800 text-center mb-5">
        Conheça Nosso{" "}
        <a
          href="/clinica/espaco"
          className="font-light text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700 underline hover:text-orange-700 transition-colors duration-300"
        >
          Espaço
        </a>
      </h1>

      <div className="w-full">
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
    </div>
  );
}

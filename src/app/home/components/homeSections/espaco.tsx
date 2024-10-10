"use client";
import Image from "next/image";
import { useState } from "react";
import { Carousel } from "primereact/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export function Local() {
  type CarouselItem = {
    id: string;
    image: string;
  };

  const carouselEspacoGeral: CarouselItem[] = [
    { id: "1", image: "/sobre/1.jpg" },
    { id: "2", image: "/spa/foto_b.jpg" },
    { id: "3", image: "/spa/foto_a.jpg" },
    { id: "4", image: "/sobre/3.jpg" },
    { id: "5", image: "/sobre/4.jpg" },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onChange = (e: { page: number }) => {
    setSelectedIndex(e.page);
  };

  const scrollTo = (index: number) => {
    setSelectedIndex(index);
  };

  const carouselTemplate = (carousel: {
    id: string; image: string | StaticImport 
  }) => {
    return (
      <div className="carousel-item flex justify-center">
        <div className="carousel-image">
          <Image
            src={carousel.image}
            alt={`Imagem ${carousel.id}`}
            width={800}
            height={500}
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="px-1 bg-gradient-to-b from-[#dbbeb0] via-[#f7f0ea] to-[#dbbeb0] flex flex-col items-center">
      <h1 className="text-3xl font-light text-gray-800 text-center mb-5">
        Conheça Nosso{" "}
        <a
          href="/clinica/espaco"
          className="font-light text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700"
        >
          Espaço
        </a>
      </h1>
      <p className="text-lg text-gray-700 text-center mb-8 max-w-3xl">
        Nossa clínica possui uma estrutura única em Franca, desenvolvida para
        cuidar de você e fazer com que se sinta especial em cada atendimento.
      </p>

      {/* Seção do Espaço Geral */}
      <div className="w-full relative">
        <Carousel
          value={carouselEspacoGeral}
          numVisible={1}
          numScroll={1}
          circular
          autoplayInterval={3000}
          itemTemplate={carouselTemplate}
          className="mx-auto max-w-[800px]"
          onPageChange={onChange}
          page={selectedIndex}
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

        {/* Bolinhas de Navegação */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-[1] flex space-x-2">
          {carouselEspacoGeral.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full border transition-all ${
                index === selectedIndex
                  ? "bg-white border-white"
                  : "border-white"
              }`}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

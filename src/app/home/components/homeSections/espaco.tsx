'use client';
import Image from "next/image";
import { Carousel } from "primereact/carousel";

export function Local() {
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
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="carousel-detail">
          <p className="mt-4 text-center text-lg text-gray-700">
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

  return (
    <div className="px-4 bg-gradient-to-b from-[#dbbeb0] via-[#f7f0ea] to-[#dbbeb0] flex flex-col items-center">
      <h1 className="text-3xl font-light text-gray-800 text-center mb-5">
        Conheça Nosso{" "}
        <span className="font-light text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">
          Espaço
        </span>
      </h1>

      {/* Seção do Espaço Geral */}
      <section className="w-full max-w-[1200px]">
        <Carousel
          value={carouselEspacoGeral}
          numVisible={1} 
          numScroll={1}
          circular
          autoplayInterval={3000}
          itemTemplate={carouselTemplate}
          className="mx-auto" 
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
      </section>
    </div>
  );
}

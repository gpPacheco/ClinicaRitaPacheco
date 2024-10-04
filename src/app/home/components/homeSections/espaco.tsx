'use client';
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRouter } from "next/navigation";

export const Local = () => {
  const imgs: { url: string; link: string }[] = [
    { url: "/podologia_infantil/foto_a.jpg", link: "" },
    { url: "/podologia_infantil/foto_b.jpg", link: "" },
    { url: "/sobre/3.jpg", link: "" },
    { url: "/sobre/4.jpg", link: "" },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000 }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => setSelectedIndex(emblaApi.selectedScrollSnap()));
    }
  }, [emblaApi]);

  const router = useRouter();

  function navigate(link: string) {
    if (link) {
      router.push(link);
    }
  }

  const goToPrevSlide = () => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  };

  const goToNextSlide = () => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  };

  const scrollTo = (index: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
    }
  };

  return (
    <div className="embla w-full shadow-md px-4 bg-gradient-to-b from-[#dbbeb0] via-[#f7f0ea] to-[#dbbeb0]" ref={emblaRef}>
      <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Conheça nosso espaço
        </h2>
      <div className="embla__container">
        {imgs.map((item, index) => (
          <button
            onClick={() => navigate(item.link)}
            key={index}
            className="embla__slide"
            style={{ backgroundImage: `url(${item.url})` }}
          ></button>
        ))}
      </div>

      {/* Botão anterior */}
      <button
        className="absolute bottom-0 left-0 z-[1] flex w-[15%] h-full items-center justify-center bg-transparent text-white transition-opacity duration-150 ease-in-out hover:text-black hover:opacity-90 focus:text-black focus:opacity-90"
        type="button"
        onClick={goToPrevSlide}
      >
        <ChevronLeft size={50} />
      </button>

      {/* Botão próximo */}
      <button
        className="absolute bottom-0 right-0 z-[1] flex w-[15%] h-full items-center justify-center bg-transparent text-white transition-opacity duration-150 ease-in-out hover:text-black hover:opacity-90 focus:text-black focus:opacity-90"
        type="button"
        onClick={goToNextSlide}
      >
        <ChevronRight size={50} />
      </button>

      {/* Bolinhas de Navegação */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-[1] flex space-x-2">
        {imgs.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === selectedIndex ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

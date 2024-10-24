"use client";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import "./carousel.css";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const EmblaCarousel = () => {
  const imgs = [
    { url: "/main-banner-f.jpg", link: "" },
    { url: "/main-banner-g.jpg", link: "" },
    { url: "/banner-podologia-esportiva.jpg", link: "" },
    { url: "/banner-podologia-geriatrica.jpg", link: "" },
    { url: "/banner-podologia-infantil.jpg", link: "" },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000 }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () =>
        setSelectedIndex(emblaApi.selectedScrollSnap())
      );
    }
  }, [emblaApi]);

  const router = useRouter();

  function navigate(link: string) {
    router.push(link);
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
    <div className="embla w-full shadow-md" ref={emblaRef}>
      <div className="embla__container">
        {imgs.map((item, index) => (
          <button
            onClick={() => navigate(item.link)}
            key={index}
            className="embla__slide"
          >
            <Image
              src={item.url}
              alt={`Banner ${index + 1}`}
              width={1200} // Ajuste o valor conforme necessário
              height={800} // Ajuste o valor conforme necessário
              layout="responsive"
              priority={index === 0} // Prioriza o carregamento da primeira imagem
              loading={index > 0 ? "lazy" : "eager"} // Lazy load nas demais
            />
          </button>
        ))}
      </div>

      <button
        className="absolute bottom-0 left-0 z-[1] flex w-[15%] h-full items-center text-white justify-center bg-transparent transform transition-transform duration-150 hover:scale-110 active:scale-90"
        type="button"
        onClick={goToPrevSlide}
      >
        <ChevronLeft size={50} />
      </button>

      <button
        className="absolute bottom-0 right-0 z-[1] flex w-[15%] h-full items-center text-white justify-center bg-transparent transform transition-transform duration-150 hover:scale-110 active:scale-90"
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
            className={`w-3 h-3 rounded-full border transition-all ${
              index === selectedIndex ? "bg-white border-white" : "border-white"
            }`}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};


//   ______    ____
//  /\    /\  | "o |
// |  \/\/  |/ ___\|
// |gpPacheco_/
// /_/_/ /_/_/

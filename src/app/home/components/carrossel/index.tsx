"use client";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./carousel.css";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const EmblaCarousel = () => {
  const imgs: { url: string; link: string }[] = [
    { url: "/main-banner_f.jpg", link: "" },
    { url: "/main-banner_a.jpg", link: "" },
    { url: "/main-banner_b.jpg", link: "" },
    { url: "/main-banner_c.jpg", link: "" },
    { url: "/main-banner_d.jpg", link: "" },
    { url: "/main-banner_e.jpg", link: "" },
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
    <div className="embla w-ful shadow-md" ref={emblaRef}>
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
      <button
        className="absolute bottom-0 left-0 z-[1] flex w-[15%] h-full items-center justify-center bg-transparent text-white transition-opacity duration-150 ease-in-out hover:text-zinc-700 hover:opacity-90 focus:outline-none"
        type="button"
        onClick={goToPrevSlide}
      >
        <ChevronLeft size={50} />
      </button>

      <button
        className="absolute bottom-0 right-0 z-[1] flex w-[15%] h-full items-center justify-center bg-transparent text-white transition-opacity duration-150 ease-in-out hover:text-zinc-700 hover:opacity-90 focus:outline-none"
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

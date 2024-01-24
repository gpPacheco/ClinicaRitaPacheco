"use client";
import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./carousel.css";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
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

  return (
    <div className="embla h-screen" ref={emblaRef}>
      <div className="embla__container h-full">
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
        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover: focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        onClick={goToPrevSlide}
      >
        <ChevronLeft size={50} />
      </button>

      <button
        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover: focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        onClick={goToNextSlide}
      >
        <ChevronRight size={50} />
      </button>
    </div>
  );
};


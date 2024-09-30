// src/app/page.tsx

'use client';
import { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './carousel.css'; // Arquivo CSS para estilizar o carrossel

export default function Home() {
  // Substituindo as imagens por cores
  const slides = [
    { color: 'bg-red-500', link: '/' },
    { color: 'bg-blue-500', link: '/' },
    { color: 'bg-green-500', link: '/' },
    { color: 'bg-yellow-500', link: '/' },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center' }, // Para mostrar parte da imagem anterior e próxima
    [Autoplay({ delay: 3000 })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => setSelectedIndex(emblaApi.selectedScrollSnap()));
    }
  }, [emblaApi]);

  const goToPrevSlide = () => emblaApi?.scrollPrev();
  const goToNextSlide = () => emblaApi?.scrollNext();
  const scrollTo = (index: number) => emblaApi?.scrollTo(index);

  return (
    <div className="carousel-container relative w-full">
      {/* Carrossel */}
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`embla__slide min-w-[80%] mx-[10%] ${slide.color}`}
            />
          ))}
        </div>
      </div>

      {/* Setas de navegação */}
      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 p-2 rounded-full"
        onClick={goToPrevSlide}
      >
        <ChevronLeft size={32} />
      </button>
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 p-2 rounded-full"
        onClick={goToNextSlide}
      >
        <ChevronRight size={32} />
      </button>

      {/* Bolinhas de navegação */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === selectedIndex ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}

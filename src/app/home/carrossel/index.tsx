"use client"

import { useEffect, useState, useCallback, useMemo } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import "./carousel.css"
import { useRouter } from "next/navigation"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from "next/image"

interface CarouselImage {
  url: string
  link: string
  alt: string
  priority?: boolean
}

export const EmblaCarousel = () => {
  // Memoizar dados estáticos para evitar re-renders desnecessários
  const imgs: CarouselImage[] = useMemo(
    () => [
      {
        url: "/main-banner_c.jpg",
        link: "",
        alt: "Banner principal - Clínica Rita Pacheco",
        priority: true,
      },
      {
        url: "/main-banner-e.jpg",
        link: "",
        alt: "Serviços de podologia especializada",
      },
      {
        url: "/banner-podologia-esportiva.jpg",
        link: "",
        alt: "Podologia esportiva - Cuidados para atletas",
      },
      {
        url: "/banner-podologia-geriatrica.jpg",
        link: "",
        alt: "Podologia geriátrica - Cuidados para idosos",
      },
      {
        url: "/banner-podologia-infantil.jpg",
        link: "",
        alt: "Podologia infantil - Cuidados para crianças",
      },
    ],
    [],
  )

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      skipSnaps: false,
      dragFree: false,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })],
  )

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const router = useRouter()

  // Memoizar função de navegação
  const navigate = useCallback(
    (link: string) => {
      if (link) {
        router.push(link)
      }
    },
    [router],
  )

  // Otimizar callbacks de navegação
  const goToPrevSlide = useCallback(() => {
    if (emblaApi && canScrollPrev) {
      emblaApi.scrollPrev()
    }
  }, [emblaApi, canScrollPrev])

  const goToNextSlide = useCallback(() => {
    if (emblaApi && canScrollNext) {
      emblaApi.scrollNext()
    }
  }, [emblaApi, canScrollNext])

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) {
        emblaApi.scrollTo(index)
      }
    },
    [emblaApi],
  )

  // Otimizar event listeners
  useEffect(() => {
    if (!emblaApi) return

    const updateSelection = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
      setCanScrollPrev(emblaApi.canScrollPrev())
      setCanScrollNext(emblaApi.canScrollNext())
    }

    emblaApi.on("select", updateSelection)
    emblaApi.on("reInit", updateSelection)
    updateSelection()

    return () => {
      emblaApi.off("select", updateSelection)
      emblaApi.off("reInit", updateSelection)
    }
  }, [emblaApi])

  return (
    <section
      className="embla w-full h-full shadow-lg"
      ref={emblaRef}
      aria-label="Carrossel de banners principais"
      role="region"
    >
      <div className="embla__container">
        {imgs.map((item, index) => (
          <div key={index} className="embla__slide">
            <button
              onClick={() => navigate(item.link)}
              className="w-full h-full relative focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-inset"
              aria-label={item.alt}
              disabled={!item.link}
            >
              <Image
                src={item.url || "/placeholder.svg"}
                alt={item.alt}
                fill
                className="object-cover object-center"
                quality={85}
                priority={item.priority}
                sizes="100vw"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </button>
          </div>
        ))}
      </div>

      {/* Botões de navegação otimizados */}
      <button
        className="embla__nav-button embla__nav-button--prev"
        type="button"
        onClick={goToPrevSlide}
        disabled={!canScrollPrev}
        aria-label="Slide anterior"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        className="embla__nav-button embla__nav-button--next"
        type="button"
        onClick={goToNextSlide}
        disabled={!canScrollNext}
        aria-label="Próximo slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicadores otimizados */}
      <div className="embla__dots" role="tablist" aria-label="Navegação do carrossel">
        {imgs.map((_, index) => (
          <button
            key={index}
            className={`embla__dot ${index === selectedIndex ? "embla__dot--active" : ""}`}
            onClick={() => scrollTo(index)}
            aria-label={`Ir para slide ${index + 1}`}
            role="tab"
            aria-selected={index === selectedIndex}
          />
        ))}
      </div>
    </section>
  )
}

//   ______    ____
//  /\    /\  | "o |
// |  \/\/  |/ ___\|
// |gpPacheco_/
// /_/_/ /_/_/

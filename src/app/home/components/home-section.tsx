"use client"

import Image from "next/image"
import { useState, useCallback, useMemo } from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from "next/link"
import { ComfortSection } from "@/components/ui/comfort-section"
import { InteractiveCard } from "@/components/ui/interactive-card"

interface CarouselItem {
  id: string
  image: string
  title: string
  alt: string
}

export function Local() {
  const carouselEspacoGeral: CarouselItem[] = useMemo(
    () => [
      { id: "1", image: "/sobre/1.jpg", title: "Recepção", alt: "Recepção acolhedora da clínica" },
      { id: "2", image: "/sobre/3.jpg", title: "Recepção", alt: "Área de espera confortável" },
      { id: "3", image: "/spa/9.jpg", title: "Relaxamento", alt: "Espaço de relaxamento e bem-estar" },
      { id: "4", image: "/spa/4.jpg", title: "Spa", alt: "Ambiente spa para tratamentos especiais" },
      { id: "5", image: "/sobre/21.jpg", title: "Spa dos Pés", alt: "Área especializada em spa dos pés" },
      { id: "6", image: "/sobre/10.jpg", title: "Atendimento", alt: "Sala de atendimento profissional" },
      { id: "7", image: "/podologia_infantil/2.jpg", title: "Infantil", alt: "Espaço adaptado para crianças" },
      { id: "8", image: "/spa/7.jpg", title: "Spa", alt: "Ambiente relaxante do spa" },
      { id: "9", image: "/spa/11.jpg", title: "Spa", alt: "Instalações modernas do spa" },
      { id: "10", image: "/sobre/9.jpg", title: "Relaxamento", alt: "Área de descanso e relaxamento" },
    ],
    [],
  )

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goToPrev = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev === 0 ? carouselEspacoGeral.length - 1 : prev - 1))
    setTimeout(() => setIsTransitioning(false), 500)
  }, [isTransitioning, carouselEspacoGeral.length])

  const goToNext = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev === carouselEspacoGeral.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsTransitioning(false), 500)
  }, [isTransitioning, carouselEspacoGeral.length])

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return
      setIsTransitioning(true)
      setCurrentIndex(index)
      setTimeout(() => setIsTransitioning(false), 500)
    },
    [isTransitioning],
  )

  return (
    <ComfortSection className="px-6 py-20 bg-gradient-to-br from-comfort-blush via-comfort-pearl to-comfort-cream" aria-label="Conheça nosso espaço" animation="fade">
      <div className="container mx-auto max-w-6xl">
        <header className="text-center mb-16">
          <div className="font-great-vibes text-6xl md:text-7xl mb-4 text-comfort-accent floating-animation">Nosso Espaço</div>
          <h2 className="text-3xl md:text-4xl font-dancing text-comfort-text mb-6">
            Conheça nosso{" "}
            <Link
              href="/clinica/espaco"
              className="text-transparent bg-clip-text bg-gradient-to-r from-comfort-accent to-comfort-warm hover:from-comfort-warm hover:to-comfort-accent transition-all duration-300 underline decoration-comfort-accent/30 hover:decoration-comfort-warm decoration-2 underline-offset-4"
            >
              ambiente acolhedor
            </Link>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-comfort-accent to-comfort-warm mx-auto rounded-full pulse-gentle"></div>
          <p className="font-poppins font-light text-comfort-text-muted leading-relaxed text-lg mt-6 max-w-2xl mx-auto">
            Um espaço pensado para proporcionar tranquilidade e conforto durante seus cuidados. Cada detalhe foi
            planejado para sua experiência ser única e relaxante.
          </p>
        </header>

        <div className="relative w-full max-w-5xl mx-auto">
          <InteractiveCard className="relative h-[400px] md:h-[500px] overflow-hidden p-0" variant="elevated">
            <div
              className="flex transition-transform duration-700 ease-out h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {carouselEspacoGeral.map((item, index) => (
                <div key={item.id} className="w-full h-full flex-shrink-0 relative">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    quality={85}
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, 80vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                    <div className="absolute bottom-8 left-8">
                      <h3 className="text-white text-3xl font-dancing text-comfort-text drop-shadow-lg">{item.title}</h3>
                      <div className="h-1 w-16 bg-white/80 rounded-full mt-2"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={goToPrev}
              className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md hover:bg-white text-comfort-text p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-comfort-accent/30"
              aria-label="Imagem anterior"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md hover:bg-white text-comfort-text p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-comfort-accent/30"
              aria-label="Próxima imagem"
            >
              <ChevronRight size={24} />
            </button>
          </InteractiveCard>

          <div className="flex justify-center mt-8 gap-3" role="tablist">
            {carouselEspacoGeral.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all duration-500 hover:scale-125 ${
                  index === currentIndex
                    ? "w-12 bg-comfort-warm shadow-lg"
                    : "w-3 bg-comfort-accent/50 hover:bg-comfort-accent"
                }`}
                aria-label={`Ir para imagem ${index + 1}`}
                role="tab"
                aria-selected={index === currentIndex}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <Link href="/clinica/espaco" className="inline-block bg-gradient-to-r from-comfort-accent to-comfort-warm text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-comfort-accent/30 active:scale-95 text-lg px-12 py-5 group">
            <span className="flex items-center gap-3">
              🏛️ Visite Virtualmente
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </ComfortSection>
  )
}

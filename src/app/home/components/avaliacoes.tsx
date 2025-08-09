"use client"

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { FaGoogle } from "react-icons/fa"
import { useCarousel } from "@/hooks/useCarousel"
import { TESTIMONIALS } from "@/lib/constants"
import { InteractiveCard } from "@/components/ui/interactive-card"

export function Avaliacoes() {
  const { currentIndex, goToPrev, goToNext, goToIndex } = useCarousel(TESTIMONIALS.length, 6000)

  const getCardPosition = (index: number) => {
    const distance = index - currentIndex
    if (distance > TESTIMONIALS.length / 2) return distance - TESTIMONIALS.length
    if (distance < -TESTIMONIALS.length / 2) return distance + TESTIMONIALS.length
    return distance
  }

  return (
    <section
      className="w-full px-6 py-20 bg-gradient-to-br from-comfort-cream via-comfort-pearl to-comfort-blush min-h-[500px]"
      aria-label="Avaliações dos clientes"
    >
      <div className="container mx-auto">
        <header className="text-center mb-16">
          <div className="font-great-vibes text-6xl md:text-7xl mb-4 text-comfort-accent">Depoimentos</div>
          <h2 className="text-3xl md:text-4xl font-dancing text-comfort-text mb-6">O que nossos clientes dizem</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-comfort-accent to-comfort-warm mx-auto rounded-full"></div>
          <p className="font-poppins font-light text-comfort-text-muted leading-relaxed text-lg mt-6 max-w-2xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista. Veja o que eles têm a dizer sobre nossa
            experiência de cuidado.
          </p>
        </header>

        <div className="relative w-full max-w-[1000px] mx-auto overflow-hidden px-16">
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/90 backdrop-blur-md p-4 rounded-full z-20 shadow-xl hover:shadow-2xl hover:scale-110 text-comfort-text hover:text-comfort-warm transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-comfort-accent/30"
            onClick={goToPrev}
            aria-label="Avaliação anterior"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="relative h-[350px] overflow-visible">
            {TESTIMONIALS.map((avaliacao, index) => {
              const position = getCardPosition(index)
              const isActive = position === 0
              const isVisible = Math.abs(position) <= 1

              if (!isVisible) return null

              return (
                <div
                  key={index}
                  className="absolute top-0 transition-all duration-700 ease-out w-full max-w-[380px]"
                  style={{
                    left: "50%",
                    opacity: isActive ? 1 : 0.5,
                    zIndex: isActive ? 10 : 5,
                    transform: `translateX(${isActive ? "-50%" : position < 0 ? "-95%" : "-5%"}) scale(${isActive ? 1 : 0.8})`,
                  }}
                >
                  <InteractiveCard className="p-8 h-80 flex flex-col justify-between mx-3">
                    <header>
                      <h3 className="text-xl font-dancing text-comfort-warm mb-3">{avaliacao.name}</h3>
                      <div className="flex items-center justify-center mb-4">
                        <FaGoogle className="text-comfort-accent mr-3 text-lg" aria-hidden="true" />
                        <span className="text-sm font-poppins font-light text-comfort-text-muted">Avaliação Verificada</span>
                      </div>
                      <div
                        className="text-yellow-500 text-2xl mb-4 text-center"
                        aria-label={`${avaliacao.rating} estrelas de 5`}
                      >
                        {"★".repeat(avaliacao.rating)}
                      </div>
                    </header>
                    <blockquote className="font-poppins font-light text-comfort-text-muted leading-relaxed text-center flex-grow flex items-center">
                      <p className="italic">&ldquo;{avaliacao.comment}&rdquo;</p>
                    </blockquote>
                  </InteractiveCard>
                </div>
              )
            })}
          </div>

          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/90 backdrop-blur-md p-4 rounded-full z-20 shadow-xl hover:shadow-2xl hover:scale-110 text-comfort-text hover:text-comfort-warm transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-comfort-accent/30"
            onClick={goToNext}
            aria-label="Próxima avaliação"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center mt-8 gap-3" role="tablist">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                className={`h-3 rounded-full transition-all duration-500 hover:scale-125 ${
                  index === currentIndex
                    ? "w-12 bg-comfort-warm shadow-lg"
                    : "w-3 bg-comfort-accent/50 hover:bg-comfort-accent"
                }`}
                onClick={() => goToIndex(index)}
                aria-label={`Ir para avaliação ${index + 1}`}
                role="tab"
                aria-selected={index === currentIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

//   ______    ____
//  /\    /\  | "o |
// |  \/\/  |/ ___\|
// |gpPacheco_/
// /_/_/ /_/_/

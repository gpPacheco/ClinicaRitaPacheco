"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { FaGoogle } from "react-icons/fa"

export function Avaliacoes() {
  const avaliacoes = [
    {
      nome: "Carla Criss",
      comentario: "Eu fiquei apaixonada pelo atendimento, além de resolver meu problema. Não tem o que reclamar!",
      avaliacao: 5,
    },
    {
      nome: "Elaine Nascimento",
      comentario:
        "Excelente!! Muito profissional no que faz e no que fala explica antes de fazer o procedimento deixando o paciente tranquilo.",
      avaliacao: 5,
    },
    {
      nome: "Fernando César Raymundo",
      comentario:
        "Eu como médico, cirurgião vascular, não só indico como também confio meus pés à equipe do SPA DOS PÉS RITA PACHECO.",
      avaliacao: 5,
    },
    {
      nome: "Milena Vieira da Silva",
      comentario: "Atendimento maravilhoso ! Equipe muito simpática e o trabalho é sensacional!",
      avaliacao: 5,
    },
    {
      nome: "Leticia Serafim",
      comentario:
        "Excelente atendimento, solucionando o problema de imediato, acompanhando para saber como está se sentindo se houve melhoras.",
      avaliacao: 5,
    },
    {
      nome: "Ana Elisa Radi",
      comentario: "Rita foi incrível, super profissional e muito amável com minhas filhas.",
      avaliacao: 5,
    },
    {
      nome: "Eduardo Miron",
      comentario: "Clinica excelente , profissionais super qualificados, experiência nota 10",
      avaliacao: 5,
    },
    {
      nome: "Adriana Bassi",
      comentario: "Atendimento de primeira. Todas as dúvidas são sanadas, muito atenciosa.  Recomendo muito.",
      avaliacao: 5,
    },
    {
      nome: "Gleice Cristina",
      comentario: "Uma clínica maravilhosa, e profissionais nota 10 sem comentários....❤️",
      avaliacao: 5,
    },
    {
      nome: "Elisangela Rosa",
      comentario:
        "Excelente profissional, conseguiu resolver o problema da unha do meu bebê de 8 meses, super indico!!!",
      avaliacao: 5,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const carouselRef = useRef(null)

  // Função para obter o índice anterior, considerando o loop
  const getPrevIndex = (index: number) => {
    return index === 0 ? avaliacoes.length - 1 : index - 1
  }

  // Função para obter o próximo índice, considerando o loop
  const getNextIndex = (index: number) => {
    return index === avaliacoes.length - 1 ? 0 : index + 1
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      goToNext()
    }, 4000)

    return () => clearInterval(intervalId)
  }, )

  const goToPrev = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex(getPrevIndex(currentIndex))
  }

  const goToNext = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex(getNextIndex(currentIndex))
  }

  useEffect(() => {
    const timeout = setTimeout(() => setIsTransitioning(false), 500)
    return () => clearTimeout(timeout)
  }, [currentIndex])

  // Função para calcular a posição de cada card
  const getCardPosition = (index: number) => {
    // Distância do card atual
    const distance = index - currentIndex

    // Ajuste para o loop circular
    if (distance > avaliacoes.length / 2) return distance - avaliacoes.length
    if (distance < -avaliacoes.length / 2) return distance + avaliacoes.length

    return distance
  }

  return (
    <div className="w-full px-1 py-5 bg-gradient-to-b from-[#f7f0ea] to-[#dbbeb0] min-h-[350px]">
      <div className="text-3xl font-light text-gray-800 text-center mb-6">Avaliações dos Clientes</div>

      <div className="relative w-full max-w-[900px] mx-auto overflow-hidden px-10">
        <button
          className="absolute text-zinc-500 hover:text-zinc-700 transition duration-200 top-1/2 left-2 transform -translate-y-1/2 bg-gray-100 p-1 rounded-full z-20 shadow-lg"
          onClick={goToPrev}
        >
          <ChevronLeft size={24} />
        </button>

        <div ref={carouselRef} className="relative h-[280px] overflow-visible">
          {avaliacoes.map((avaliacao, index) => {
            const position = getCardPosition(index)
            const isActive = position === 0
            const isPrev = position === -1 || position === avaliacoes.length - 1
            const isNext = position === 1 || position === -(avaliacoes.length - 1)
            const isVisible = isActive || isPrev || isNext

            if (!isVisible) return null

            return (
              <div
                key={index}
                className={`absolute top-0 transition-all duration-500 ease-in-out w-full max-w-[350px] transform-gpu ${
                  isTransitioning ? "" : "transition-none"
                }`}
                style={{
                  left: "50%",
                  opacity: isActive ? 1 : 0.7,
                  zIndex: isActive ? 10 : 5,
                  transform: `translateX(${isActive ? "-50%" : isPrev ? "-90%" : "-10%"}) scale(${isActive ? 1 : 0.85})`,
                }}
              >
                <div className="bg-white p-4 rounded-lg shadow-md h-64 flex flex-col justify-between mx-2">
                  <div>
                    <h2 className="text-lg font-semibold">{avaliacao.nome}</h2>
                    <div className="flex items-center justify-center mb-2">
                      <FaGoogle className="text-blue-500 mr-2" />
                      <span className="text-sm text-gray-600">Avaliação Verificada no Google</span>
                    </div>
                    <p className="text-yellow-500">{"★".repeat(avaliacao.avaliacao)}</p>
                  </div>
                  <p className="text-gray-600 mt-2 overflow-hidden line-clamp-4">{avaliacao.comentario}</p>
                </div>
              </div>
            )
          })}
        </div>

        <button
          className="absolute text-zinc-500 hover:text-zinc-700 transition duration-200 top-1/2 right-2 transform -translate-y-1/2 bg-gray-100 p-1 rounded-full z-20 shadow-lg"
          onClick={goToNext}
        >
          <ChevronRight size={24} />
        </button>

        {/* Indicadores de navegação */}
        <div className="flex justify-center mt-4 gap-2">
          {avaliacoes.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? "w-6 bg-gray-800" : "w-2 bg-gray-400"
              }`}
              onClick={() => {
                setIsTransitioning(true)
                setCurrentIndex(index)
              }}
              aria-label={`Ir para avaliação ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

//   ______    ____
//  /\    /\  | "o |
// |  \/\/  |/ ___\|
// |gpPacheco_/
// /_/_/ /_/_/

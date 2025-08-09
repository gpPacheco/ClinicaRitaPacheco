"use client"

import Image from "next/image"
import Link from "next/link"
import { InteractiveCard } from "@/components/ui/interactive-card"

interface Curso {
  title: string
  description: string
  image: string
  alt: string
}

export function Cursos() {
  const cursos: Curso[] = [
    {
      title: "Cursos",
      description:
        "Aprenda técnicas avançadas para os principais tratamentos e cuidados, garantindo a excelência no atendimento e a satisfação dos seus clientes.",
      image: "/sobre/1.jpg",
      alt: "Ambiente de curso de podologia com equipamentos profissionais",
    },
    {
      title: "Mentorias",
      description:
        "Acelere seu crescimento profissional com uma mentoria individual focada nas suas necessidades específicas.",
      image: "/sobre/21.jpg",
      alt: "Sessão de mentoria em podologia com profissional experiente",
    },
  ]

  return (
    <section
      className="w-full px-6 py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100"
      aria-label="Cursos e mentorias disponíveis"
    >
      <div className="w-full max-w-6xl mx-auto">
        <header className="text-center mb-16">
          <div className="text-5xl md:text-6xl font-bold mb-4 text-blue-600">Educação</div>
          <Link href="/aprenda" className="group inline-block">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
              Cursos & Mentorias
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full group-hover:w-32 transition-all duration-300"></div>
          </Link>
        </header>

        <p className="text-lg md:text-xl font-light text-gray-600 leading-relaxed text-center mb-16 max-w-3xl mx-auto">
          Desenvolva suas habilidades e avance na sua carreira com nossos cursos e mentorias especializados. Criados
          para oferecer o conhecimento que você precisa para alcançar seus objetivos profissionais e pessoais.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {cursos.map((curso, index) => (
            <article key={curso.title} className="group">
              <InteractiveCard className="overflow-hidden" variant="hover">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={curso.image || "/placeholder.svg"}
                    alt={curso.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    quality={85}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="p-8">
                  <header className="mb-6">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {curso.title}
                    </h3>
                    <div className="h-0.5 w-16 bg-blue-600 rounded-full group-hover:w-24 group-hover:bg-blue-800 transition-all duration-300"></div>
                  </header>

                  <p className="font-light text-gray-600 leading-relaxed mb-8">{curso.description}</p>

                  <Link href="/aprenda" className="inline-block w-full">
                    <button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-blue-500/30 active:scale-95 group-hover:from-blue-800 group-hover:to-blue-600">
                      <span className="flex items-center justify-center gap-2">
                        ✨ Saiba mais
                        <svg
                          className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </button>
                  </Link>
                </div>
              </InteractiveCard>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <InteractiveCard className="p-8 max-w-3xl mx-auto" variant="elevated">
            <p className="font-light text-gray-600 leading-relaxed text-lg">
              <span className="text-4xl text-blue-600 font-bold block mb-4">
                Transforme sua carreira
              </span>
              Nossos cursos e mentorias são desenvolvidos com base em anos de experiência prática, oferecendo
              conhecimento real e aplicável para o seu crescimento profissional.
            </p>
          </InteractiveCard>
        </div>
      </div>
    </section>
  )
}

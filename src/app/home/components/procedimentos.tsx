"use client"

import { FaUserMd, FaChild, FaHeart, FaHandHoldingMedical, FaStethoscope } from "react-icons/fa"
import Link from "next/link"
import { InteractiveCard } from "@/components/ui/interactive-card"
import { PROCEDURES } from "@/lib/constants"

const iconMap = { 
  foot: FaUserMd,
  bandage: FaHeart, 
  shield: FaHandHoldingMedical,
  activity: FaStethoscope,
  heart: FaUserMd,
  smile: FaChild
}

export function Procedimentos() {
  return (
    <section
      className="w-full px-6 py-20 bg-gradient-to-br from-comfort-cream via-comfort-pearl to-comfort-blush overflow-x-hidden"
      aria-label="Especialidades e procedimentos"
    >
      <div className="container mx-auto max-w-6xl">
        <header className="text-center mb-16">
          <div className="text-5xl md:text-6xl font-dancing font-bold mb-4 text-comfort-accent">
            Especialidades
          </div>
          <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-comfort-text mb-6">
            Confira nossos{" "}
            <Link
              href="/especialidades"
              className="text-comfort-warm hover:text-comfort-accent transition-colors duration-300 underline decoration-comfort-warm/30 hover:decoration-comfort-accent/50 decoration-2 underline-offset-4"
            >
              cuidados especializados
            </Link>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-comfort-accent to-comfort-warm mx-auto rounded-full"></div>
          <p className="font-poppins font-light text-comfort-text-muted leading-relaxed text-lg mt-6 max-w-2xl mx-auto">
            Oferecemos tratamentos personalizados com as mais modernas técnicas de podologia, sempre priorizando seu
            conforto e bem-estar.
          </p>
        </header>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 overflow-x-hidden">
          {PROCEDURES.map((procedure, index) => {
            const IconComponent = iconMap[procedure.icon as keyof typeof iconMap] || FaUserMd
            return (
              <Link href="/especialidades" key={procedure.title} className="group">
                <InteractiveCard
                  className="p-10 text-center h-full group-focus:outline-none group-focus:ring-4 group-focus:ring-comfort-accent/30 rounded-3xl"
                  variant="elevated"
                >
                  <div className="flex justify-center mb-8 group-hover:scale-125 transition-all duration-500">
                    <div className="p-6 bg-gradient-to-br from-comfort-pearl to-comfort-blush rounded-full">
                      <IconComponent
                        className="text-5xl text-comfort-accent group-hover:text-comfort-warm transition-colors duration-300"
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  <header className="mb-6">
                    <h3 className="text-2xl font-poppins font-semibold text-comfort-text group-hover:text-comfort-accent transition-colors duration-300 mb-2">
                      {procedure.title}
                    </h3>
                    <div className="h-0.5 w-16 bg-comfort-accent mx-auto rounded-full group-hover:w-24 transition-all duration-300"></div>
                  </header>

                  <p className="font-poppins font-light text-comfort-text-muted leading-relaxed mb-8">{procedure.description}</p>

                  <div className="inline-flex items-center font-poppins font-medium text-comfort-text-light group-hover:text-comfort-accent transition-all duration-300 transform group-hover:scale-105">
                    <span>Saiba mais</span>
                    <svg
                      className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </InteractiveCard>
              </Link>
            )
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-lg border border-comfort-pearl transition-all duration-500 hover:shadow-2xl hover:bg-white/80 hover:scale-105 hover:-translate-y-1 p-8 max-w-3xl mx-auto">
            <p className="font-poppins font-light text-comfort-text-muted leading-relaxed text-lg">
              <span className="text-3xl text-comfort-accent font-dancing font-bold">Cuidado personalizado</span>
              <br />
              Cada tratamento é único, assim como você. Nossa equipe especializada desenvolve um plano de cuidados
              específico para suas necessidades.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

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
      className="w-full px-6 py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100"
      aria-label="Especialidades e procedimentos"
    >
      <div className="container mx-auto max-w-6xl">
        <header className="text-center mb-16">
          <div className="text-5xl md:text-6xl font-bold mb-4 text-blue-600">
            Especialidades
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
            Confira nossos{" "}
            <Link
              href="/especialidades"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-300 underline decoration-blue-600/30 hover:decoration-blue-800/50 decoration-2 underline-offset-4"
            >
              cuidados especializados
            </Link>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full"></div>
          <p className="font-light text-gray-600 leading-relaxed text-lg mt-6 max-w-2xl mx-auto">
            Oferecemos tratamentos personalizados com as mais modernas técnicas de podologia, sempre priorizando seu
            conforto e bem-estar.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROCEDURES.map((procedure, index) => {
            const IconComponent = iconMap[procedure.icon as keyof typeof iconMap] || FaUserMd
            return (
              <Link href="/especialidades" key={procedure.title} className="group">
                <InteractiveCard
                  className="p-10 text-center h-full group-focus:outline-none group-focus:ring-4 group-focus:ring-blue-500/30 rounded-3xl"
                  variant="elevated"
                >
                  <div className="flex justify-center mb-8 group-hover:scale-125 transition-all duration-500">
                    <div className="p-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full">
                      <IconComponent
                        className="text-5xl text-blue-600 group-hover:text-blue-800 transition-colors duration-300"
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  <header className="mb-6">
                    <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 mb-2">
                      {procedure.title}
                    </h3>
                    <div className="h-0.5 w-16 bg-blue-600 mx-auto rounded-full group-hover:w-24 transition-all duration-300"></div>
                  </header>

                  <p className="font-light text-gray-600 leading-relaxed mb-8">{procedure.description}</p>

                  <div className="inline-flex items-center font-medium text-gray-600 group-hover:text-blue-600 transition-all duration-300 transform group-hover:scale-105">
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
          <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-lg border border-gray-200 transition-all duration-500 hover:shadow-2xl hover:bg-white/80 hover:scale-105 hover:-translate-y-1 p-8 max-w-3xl mx-auto">
            <p className="font-light text-gray-600 leading-relaxed text-lg">
              <span className="text-3xl text-blue-600 font-bold">Cuidado personalizado</span>
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

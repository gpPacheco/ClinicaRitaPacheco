"use client"

import Image from "next/image"
import Link from "next/link"

export function Cursos() {
  return (
    <div className="w-full px-4 py-12 flex flex-col items-center bg-gradient-to-b from-[#dbbeb0] to-[#f7f0ea]">
      <div className="w-full max-w-6xl">
        <Link href="/aprenda">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-8 font-playfair text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-800 hover:underline">
            Cursos & Mentorias
          </h2>
        </Link>

        <p className="text-lg md:text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto font-montserrat leading-relaxed">
          Desenvolva suas habilidades e avance na sua carreira com nossos cursos e mentorias especializados. Criados
          para oferecer o conhecimento que você precisa para alcançar seus objetivos profissionais e pessoais.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {/* Card 1 */}
          <div className="max-w-xs bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transform transition-transform duration-300 hover:-translate-y-2">
            <div className="overflow-hidden h-48 relative">
              <Image
                src="/sobre/1.jpg"
                alt="Curso 1"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover"
                priority
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-medium text-gray-800 mb-3 font-playfair">Cursos</h3>
              <p className="text-gray-600 mb-6 flex-grow font-montserrat">
                Aprenda técnicas avançadas para os principais tratamentos e cuidados, garantindo a excelência no
                atendimento e a satisfação dos seus clientes.
              </p>
              <Link href="/aprenda" className="mt-auto">
                <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg hover:from-orange-600 hover:to-orange-700 font-medium font-montserrat shadow-md">
                  Saiba mais
                </button>
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="max-w-xs bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transform transition-transform duration-300 hover:-translate-y-2">
            <div className="overflow-hidden h-48 relative">
              <Image
                src="/sobre/21.jpg"
                alt="Curso 2"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-medium text-gray-800 mb-3 font-playfair">Mentorias</h3>
              <p className="text-gray-600 mb-6 flex-grow font-montserrat">
                Acelere seu crescimento profissional com uma mentoria individual focada nas suas necessidades.
              </p>
              <Link href="/aprenda" className="mt-auto">
                <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg hover:from-orange-600 hover:to-orange-700 font-medium font-montserrat shadow-md">
                  Saiba mais
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

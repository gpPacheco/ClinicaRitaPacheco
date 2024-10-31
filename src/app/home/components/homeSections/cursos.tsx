"use client";
import Image from "next/image";
import Link from "next/link";

export function Cursos() {
  return (
    <div className="w-full px-4 py-5 flex flex-col items-center bg-gradient-to-b from-[#dbbeb0] to-[#f7f0ea]">
      <a
        href="/aprenda"
        className="text-4xl font-light text-transparent text-center bg-clip-text bg-gradient-to-r from-orange-500 to-orange-800 mb-6 hover:underline hover:scale-105 transition-transform duration-300"
      >
        Cursos & Mentorias
      </a>

      <p className="text-lg text-gray-700 text-center mb-8 max-w-3xl">
        Desenvolva suas habilidades e avance na sua carreira com nossos cursos e
        mentorias especializados. Criados para oferecer o conhecimento que você
        precisa para alcançar seus objetivos profissionais e pessoais.
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        {/* Card 1 */}
        <div className="max-w-xs bg-[#f7f0ea] rounded-lg shadow-md transform transition hover:scale-105 hover:shadow-xl duration-300 p-4 flex flex-col">
          <Image
            src="/sobre/1.jpg"
            alt="Curso 1"
            width={400}
            height={250}
            className="object-cover rounded-md"
          />
          <h3 className="text-xl text-center font-semibold text-gray-800 mt-4">
            Cursos
          </h3>
          <p className="text-md text-center text-gray-600 mt-2 flex-1">
            Aprenda técnicas avançadas para os principais tratamentos e
            cuidados, garantindo a excelência no atendimento e a satisfação dos
            seus clientes.
          </p>
          <Link href="/aprenda">
            <button className="mt-4 w-full bg-[#F2784B] text-white py-2 rounded-lg transition hover:bg-orange-500">
              Saiba mais
            </button>
          </Link>
        </div>

        {/* Card 2 */}
        <div className="max-w-xs bg-[#f7f0ea] rounded-lg shadow-md transform transition hover:scale-105 hover:shadow-xl duration-300 p-4 flex flex-col">
          <Image
            src="/sobre/21.jpg"
            alt="Curso 2"
            width={400}
            height={250}
            className="object-cover rounded-md"
          />
          <h3 className="text-xl text-center font-semibold text-gray-800 mt-4">
            Mentorias
          </h3>
          <p className="text-md text-center text-gray-600 mt-2 flex-1">
            Acelere seu crescimento profissional com uma mentoria individual
            focada nas suas necessidades.
          </p>
          <Link href="/aprenda">
            <button className="mt-4 w-full bg-[#F2784B] text-white py-2 rounded-lg transition hover:bg-orange-500">
              Saiba mais
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

//   ______    ____
//  /\    /\  | "o |
// |  \/\/  |/ ___\|
// |gpPacheco_/
// /_/_/ /_/_/

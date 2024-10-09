'use client';
import Image from 'next/image';

export function Cursos() {
  return (
    <div className="w-full px-4 py-12 flex flex-col items-center bg-gradient-to-b from-[#dbbeb0] via-[#f7f0ea] to-[#dbbeb0]">
      <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-800 mb-6">
        Cursos & Mentorias
      </h2>
      <p className="text-lg text-gray-700 text-center mb-8 max-w-3xl">
        Desenvolva suas habilidades e avance na sua carreira com nossos cursos e mentorias especializados. Criados para oferecer o conhecimento que você precisa para alcançar seus objetivos profissionais e pessoais.
      </p>
      
      <div className="flex flex-wrap justify-center gap-8">
        {/* Card 1 */}
        <div className="max-w-xs bg-white rounded-lg shadow-md transform transition hover:scale-105 hover:shadow-xl duration-300 p-4">
          <Image
            src="/curso_01.jpg"
            alt="Curso 1"
            width={400}
            height={250}
            className="object-cover rounded-md"
          />
          <h3 className="text-xl font-semibold text-gray-800 mt-4">
            Curso
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Aprenda técnicas avançadas para os principais tratamentos.
          </p>
          <button className="mt-4 w-full bg-orange-600 text-white py-2 rounded-lg transition hover:bg-orange-700">
            Saiba mais
          </button>
        </div>

        {/* Card 2 */}
        <div className="max-w-xs bg-white rounded-lg shadow-md transform transition hover:scale-105 hover:shadow-xl duration-300 p-4">
          <Image
            src="/curso_02.jpg"
            alt="Curso 2"
            width={400}
            height={250}
            className="object-cover rounded-md"
          />
          <h3 className="text-xl font-semibold text-gray-800 mt-4">
            Mentoria Personalizada
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Receba orientações específicas e acelere seu crescimento profissional com uma mentoria individual focada nas suas necessidades.
          </p>
          <button className="mt-4 w-full bg-orange-600 text-white py-2 rounded-lg transition hover:bg-orange-700">
            Saiba mais
          </button>
        </div>
        
      </div>
    </div>
  );
}

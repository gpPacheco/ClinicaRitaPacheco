"use client";
import Image from "next/legacy/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function Cursos() {
  return (
    <div className="w-full px-4 py-12 flex flex-col items-center bg-gradient-to-b from-[#dbbeb0] to-[#f7f0ea]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl"
      >
        <Link href="/aprenda">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-8 font-playfair text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-800 hover:underline hover:scale-105 transition-transform duration-300">
            Cursos & Mentorias
          </h2>
        </Link>

        <p className="text-lg md:text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto font-montserrat leading-relaxed">
          Desenvolva suas habilidades e avance na sua carreira com nossos cursos e
          mentorias especializados. Criados para oferecer o conhecimento que você
          precisa para alcançar seus objetivos profissionais e pessoais.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {/* Card 1 */}
          <motion.div
            whileHover={{ y: -10 }}
            className="max-w-xs bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:shadow-xl duration-300 flex flex-col"
          >
            <div className="overflow-hidden h-48">
              <Image
                src="/sobre/1.jpg"
                alt="Curso 1"
                width={400}
                height={250}
                className="object-cover w-full h-full transition duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-medium text-gray-800 mb-3 font-playfair">
                Cursos
              </h3>
              <p className="text-gray-600 mb-6 flex-grow font-montserrat">
                Aprenda técnicas avançadas para os principais tratamentos e
                cuidados, garantindo a excelência no atendimento e a satisfação dos
                seus clientes.
              </p>
              <Link href="/aprenda" className="mt-auto">
                <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg transition hover:from-orange-600 hover:to-orange-700 font-medium font-montserrat shadow-md hover:shadow-lg">
                  Saiba mais
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ y: -10 }}
            className="max-w-xs bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:shadow-xl duration-300 flex flex-col"
          >
            <div className="overflow-hidden h-48">
              <Image
                src="/sobre/21.jpg"
                alt="Curso 2"
                width={400}
                height={250}
                className="object-cover w-full h-full transition duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-medium text-gray-800 mb-3 font-playfair">
                Mentorias
              </h3>
              <p className="text-gray-600 mb-6 flex-grow font-montserrat">
                Acelere seu crescimento profissional com uma mentoria individual
                focada nas suas necessidades.
              </p>
              <Link href="/aprenda" className="mt-auto">
                <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg transition hover:from-orange-600 hover:to-orange-700 font-medium font-montserrat shadow-md hover:shadow-lg">
                  Saiba mais
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
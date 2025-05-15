"use client";
import React from "react";

export default function Aprenda() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7f0ea] to-[#dbbeb0] flex flex-col items-center py-12 px-4">
      <header className="text-center mb-12 max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-light text-gray-800">
          Conhecimento com a{" "}
          <span className="block w-full font-light text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700 lg:inline">
            Rita Pacheco
          </span>
        </h1>
        <p className="mt-6 text-lg text-gray-700">
          Materiais educacionais para sua formação e crescimento na podologia.
        </p>
      </header>

      <div className="w-full max-w-4xl space-y-12">
        {/* Seção de Materiais */}
        <section className="bg-white/50 backdrop-blur-sm p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-light text-[#7b4f38] mb-6 text-center">
            Nossos Materiais
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-[#7b4f38] flex items-center">
                <span className="w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                Cursos Online
              </h3>
              <p className="text-gray-700">
                Conteúdo completo para formação e especialização em podologia.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-medium text-[#7b4f38] flex items-center">
                <span className="w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                E-books e PDFs
              </h3>
              <p className="text-gray-700">
                Materiais ricos em conhecimento para estudo e consulta.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-medium text-[#7b4f38] flex items-center">
                <span className="w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                Mentorias
              </h3>
              <p className="text-gray-700">
                Acompanhamento personalizado para seu desenvolvimento profissional.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-medium text-[#7b4f38] flex items-center">
                <span className="w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                Materiais Complementares
              </h3>
              <p className="text-gray-700">
                Recursos adicionais para aprimorar sua prática clínica.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <p className="text-gray-700 mb-6 font-semibold">
            Interessado em nossos materiais educacionais?
          </p>
          <a
            href="https://wa.me/5516993108637?text=Oi%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20materiais%20educacionais."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#F2784B] hover:bg-orange-600 text-white px-8 py-3 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
          >
            Fale conosco via WhatsApp
          </a>
        </section>
      </div>
    </div>
  );
}
//   ______    ____
//  /\    /\  | "o |
// |  \/\/  |/ ___\|
// |gpPacheco_/
// /_/_/ /_/_/

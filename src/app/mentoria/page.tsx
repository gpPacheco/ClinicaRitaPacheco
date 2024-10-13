"use client";
import React from "react";

export default function Mentoria() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7f0ea] to-[#dbbeb0] flex flex-col items-center justify-start py-10">
      <header className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-light text-gray-800">
          Mentoria{" "}
          <span className="block w-full font-light text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700 lg:inline  ">
            Exclusiva
          </span>
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-md mx-auto">
          Transforme sua carreira com uma mentoria exlcuisva e focada nos seus
          objetivos. Juntos, vamos alcançar resultados reais!
        </p>
      </header>

      <div className="max-w-4xl mx-6 bg-[#fdf6f1] p-6 rounded-lg shadow-lg mb-10">
        <h2 className="text-2xl font-semibold text-[#7b4f38] mb-4">
          Benefícios da Mentoria
        </h2>
        <ul className="list-disc list-inside text-[#6f4f3f]">
          <li className="mb-2">Plano de carreira personalizado</li>
          <li className="mb-2">Dicas e estratégias exclusivas</li>
          <li className="mb-2">Acompanhamento contínuo e suporte</li>
          <li className="mb-2">Acesso a recursos e materiais de apoio</li>
        </ul>
      </div>

      <div className="max-w-4xl mx-6 bg-[#fdf6f1] p-6 rounded-lg shadow-lg mb-10">
        <h2 className="text-2xl text-center font-semibold text-[#7b4f38] mb-4">
          Depoimentos
        </h2>
        <div className="space-y-6 text-center">
          <div className="bg-[#eae3dc] p-4 rounded-md">
            <p className="text-gray-700">
              A mentoria foi um divisor de águas na minha carreira. Com
              acompanhamento próximo e dicas valiosas, consegui me destacar na
              minha área!
            </p>
            <p className="mt-2 text-sm text-gray-600">- Mentorada</p>
          </div>
          <div className="bg-[#eae3dc] p-4 rounded-md">
            <p className="text-gray-700">
              Aprendi a definir melhor minhas metas e a traçar um plano para
              alcançá-las. Recomendo a todos!
            </p>
            <p className="mt-2 text-sm text-gray-600">- Mentorada</p>
          </div>
        </div>
      </div>

      <footer className="text-center">
        <a
          href="https://wa.me/5516993108637?text=Oi%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20mentoria%20profissional."
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-[#F2784B] hover:bg-orange-500 text-white px-6 py-3 rounded-full shadow-md transition-transform transform hover:scale-105">
            Agende sua sessão
          </button>
        </a>
      </footer>
    </div>
  );
}

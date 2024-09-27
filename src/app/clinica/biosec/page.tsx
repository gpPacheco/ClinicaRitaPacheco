"use client";

import Image from "next/image";

export default function Biosec() {
  return (
    <div className="px-4 py-12 bg-gradient-to-b from-[#f7f0ea] to-[#dbbeb0] text-center">
      <h2 className="text-4xl font-light text-gray-800 sm:text-5xl lg:text-6xl text-center mb-10">
        Biossegurança
      </h2>
      
      <section className="mb-8 text-center">
        <Image
          src="/biosecurity-image.jpg"
          alt="Biossegurança"
          className="w-full h-64 object-cover rounded-lg mb-6"
          width={500}
          height={300}
        />
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          O que é Biossegurança?
        </h3>
        <p className="text-lg text-gray-700 mb-4">
          Biossegurança é um conjunto de práticas destinadas a proteger a
          saúde das pessoas, animais e o meio ambiente. Em nossa clínica, a
          biossegurança é uma prioridade para garantir o bem-estar de todos.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Nossas Práticas de Biossegurança
        </h3>
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li>Desinfecção frequente de ambientes e equipamentos.</li>
          <li>Uso de Equipamentos de Proteção Individual (EPIs).</li>
          <li>Treinamento contínuo da nossa equipe.</li>
          <li>Controle rigoroso de acesso às áreas sensíveis.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Por que a Biossegurança é Importante?
        </h3>
        <p className="text-lg text-gray-700">
          A biossegurança é crucial para prevenir infecções e garantir a
          saúde dos nossos pacientes e colaboradores. Com protocolos rigorosos,
          criamos um ambiente seguro e saudável.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Quer Saber Mais?
        </h3>
        <p className="text-lg text-gray-700 mb-4">
          Se você deseja aprofundar seus conhecimentos sobre esterilização e
          biossegurança, confira nossos materiais educativos!
        </p>
        <a
          href="/materiais-biosseguranca" // Altere para o link correto da sua página de materiais
          className="inline-block bg-orange-400 text-white px-6 py-2 rounded shadow-md hover:bg-orange-500 transition"
        >
          Ver Materiais
        </a>
      </section>
    </div>
  );
}

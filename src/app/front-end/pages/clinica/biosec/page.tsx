"use client";
import Image from "next/image";

export default function Biosec() {
  return (
    <div className="px-4 py-5 bg-gradient-to-b from-[#f7f0ea] to-[#dbbeb0] text-center">
      <h2 className="text-3xl font-light text-gray-800 sm:text-4xl lg:text-5xl text-center mb-5">
        Biossegurança e{" "}
        <span className="font-light text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">
          Estereliação
        </span>
      </h2>

      <div className="mb-8 text-center">
        <Image
          src="/biosseguranca/1.png"
          alt="Biossegurança"
          className="mx-auto w-full sm:w-3/4 md:w-1/2 lg:w-1/3 h-auto object-contain rounded-lg mb-6"
          width={800}
          height={800}
        />

        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          O que é Biossegurança?
        </h3>
        <p className="text-lg text-gray-700 mb-4">
          Biossegurança é um conjunto de práticas destinadas a proteger a saúde
          das pessoas, animais e o meio ambiente. Em nossa clínica, a
          biossegurança é uma prioridade para garantir o bem-estar de todos.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Nossas Práticas de Biossegurança
        </h3>
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li>Desinfecção frequente de ambientes e equipamentos.</li>
          <li>Uso de Equipamentos de Proteção Individual (EPIs).</li>
          <li>Treinamento contínuo da nossa equipe.</li>
          <li>Controle rigoroso de acesso às áreas sensíveis.</li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Por que a Biossegurança é Importante?
        </h3>
        <p className="text-lg text-gray-700">
          A biossegurança é crucial para prevenir infecções e garantir a saúde
          dos nossos pacientes e colaboradores. Com protocolos rigorosos,
          criamos um ambiente seguro e saudável.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Quer Saber Mais?
        </h3>
        <p className="text-lg text-gray-700 mb-4">
          Se você deseja aprofundar seus conhecimentos sobre esterilização e
          biossegurança, confira nossos materiais educativos!
        </p>
        <a
          href="https://chk.eduzz.com/1W3VPGX592"
          className="inline-block bg-orange-400 text-white px-6 py-2 rounded shadow-md hover:bg-orange-500 transition"
          target="_blank"
        >
          Ver Materiais
        </a>
      </div>
    </div>
  );
}

//   ______    ____
//  /\    /\  | "o |
// |  \/\/  |/ ___\|
// |gpPacheco_/
// /_/_/ /_/_/

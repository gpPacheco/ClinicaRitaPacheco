'use client';

import React from "react";
import { useRouter } from "next/navigation";

export default function Produtos() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#f7f0ea] to-[#dbbeb0] text-center">
      <h1 className="text-4xl font-semibold text-[#7b4f38] mb-4">
        Página em construção 🚧
      </h1>
      <p className="text-lg text-[#6f4f3f] mb-6">
        Estamos trabalhando para trazer novidades para você. Por favor, volte mais tarde!
      </p>
      <button
        onClick={() => router.push('/')}
        className="bg-[#F2784B] hover:bg-orange-500 text-white px-6 py-3 rounded-md shadow-md transition-transform transform hover:scale-105"
      >
        Clique aqui para voltar para a página inicial
      </button>
    </div>
  );
}

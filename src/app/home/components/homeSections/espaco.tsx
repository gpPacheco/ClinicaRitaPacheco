"use client";
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from 'next/image';

export function Local() {
  const imagens = [
    "/podologia_infantil/foto_a.jpg", 
    "/podologia_infantil/foto_b.jpg",
    "/sobre/3.jpg",
    "/sobre/4.jpg",
  ];

  const [indiceAtual, setIndiceAtual] = useState(0);
  const carrosselRef = useRef(null); // Para referenciar o carrossel
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Funções para navegação no carrossel
  const proximaImagem = () => {
    setIndiceAtual((prevIndice) =>
      prevIndice === imagens.length - 1 ? 0 : prevIndice + 1
    );
  };

  const imagemAnterior = () => {
    setIndiceAtual((prevIndice) =>
      prevIndice === 0 ? imagens.length - 1 : prevIndice - 1
    );
  };

  // Detectar início do toque (swipe)
  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  // Detectar fim do toque e comparar para determinar se foi um swipe
  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swipe para a esquerda (próxima imagem)
      proximaImagem();
    }
    if (touchStartX.current - touchEndX.current < -50) {
      // Swipe para a direita (imagem anterior)
      imagemAnterior();
    }
  };

  // Detectar movimento do toque
  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.touches[0].clientX;
  };

  return (
    <div className="w-full px-4 py-8 bg-gradient-to-b from-[#dbbeb0] via-[#f7f0ea] to-[#dbbeb0]">
      <h1 className="text-2xl text-zinc-800 font-semibold text-center mb-4">Conheça nosso espaço</h1>
      
      <div
        className="relative max-w-[600px] mx-auto"
        ref={carrosselRef}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="overflow-hidden">
          <Image
            src={imagens[indiceAtual]}
            alt={`Imagem ${indiceAtual + 1}`}
            className="w-full h-auto rounded-lg shadow-lg"
            width={300}
            height={300}
          />
        </div>

        {/* Botão anterior */}
        <button
          className="absolute text-white top-1/2 left-0 transform -translate-y-1/2 p-2"
          onClick={imagemAnterior}
        >
          <ChevronLeft size={24} />
        </button>

        {/* Botão próximo */}
        <button
          className="absolute text-white top-1/2 right-0 transform -translate-y-1/2 p-2"
          onClick={proximaImagem}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Indicadores do carrossel */}
      <div className="flex justify-center mt-4 space-x-2">
        {imagens.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === indiceAtual ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

"use client";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Depoimentos() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carrosselRef = useRef<HTMLDivElement>(null);
  const depoimentos = [1, 2, 3, 4, 5]; // Lista de depoimentos
  const totalItems = depoimentos.length;

  const handleNext = () => {
    if (currentIndex < totalItems - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-16 text-center bg-gradient-to-b from-[#dbbeb0] to-[#f7f0ea] shadow-md">
      <p className="text-lg font-bold text-gray-900 opacity-50 hover:opacity-100 transition duration-300 ease-in-out">
        O que dizem nossos pacientes
      </p>

      <div className="relative flex items-center justify-center w-full mt-8">
        {/* Botão para ir ao card anterior */}
        <button
          onClick={handlePrev}
          className=" left-0 z-10 bg-gray-200 p-2 rounded-full shadow-lg hover:bg-gray-300 transition"
          disabled={currentIndex === 0}
        >
          <ChevronLeft size={24} />
        </button>

        <div className="overflow-hidden w-full max-w-4xl">
          <div
            ref={carrosselRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / 3}%)`, // Move o carrossel com base no índice
            }}
          >
            {depoimentos.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 shadow-md rounded-md p-4 w-[calc(100%/2.5)] mx-2 flex-shrink-0"
              >
                <h2 className="text-lg font-bold">Depoimento {item}</h2>
                <p className="text-gray-600">Texto do depoimento {item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Botão para ir ao próximo card */}
        <button
          onClick={handleNext}
          className=" right-0 z-10 bg-gray-200 p-2 rounded-full shadow-lg hover:bg-gray-300 transition"
          disabled={currentIndex === totalItems - 1}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}

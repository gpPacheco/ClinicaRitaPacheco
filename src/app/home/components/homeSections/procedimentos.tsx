"use client";
import Image from "next/image";
import { SetStateAction, useState } from "react";

export function Procedimentos() {
  const [selectedProcedure, setSelectedProcedure] = useState<string | null>(null);

  const handleProcedureClick = (procedure: string) => {
    setSelectedProcedure(procedure);
  };

  return (
    <div className="w-full px-4 mb-12 mt-12">
      <div className="text-xl text-center mb-4">Nossas especialidades</div>
      <div className="flex flex-wrap justify-center items-center gap-4">
        <Image
          className="w-60 h-40 object-cover rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg"
          src="/2.jpg"
          alt="Procedimento 1"
          width={240}
          height={160}
          onClick={() => handleProcedureClick("Unhas encravadas")}
        />
        <Image
          className="w-60 h-40 object-cover rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg"
          src="/2.jpg"
          alt="Procedimento 2"
          width={240}
          height={160}
          onClick={() => handleProcedureClick("Podologia Infantil")}
        />
        <Image
          className="w-60 h-40 object-cover rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg"
          src="/2.jpg"
          alt="Procedimento 3"
          width={240}
          height={160}
          onClick={() => handleProcedureClick("Pé De Risco")}
        />
      </div>
      {selectedProcedure && (
        <div className="mt-4 text-center">
          <h2 className="text-2xl font-semibold">{selectedProcedure}</h2>
          <p className="mt-2 text-gray-600">
            Aqui você pode adicionar mais informações sobre o procedimento selecionado.
          </p>
        </div>
      )}
    </div>
  );
}

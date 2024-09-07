"use client";
import Image from "next/image";
import { SetStateAction, useState } from "react";

export function Procedimentos() {
  const [selectedProcedure, setSelectedProcedure] = useState(null);

  const handleProcedureClick = (procedure: string | SetStateAction<null>) => {
    setSelectedProcedure(procedure);
  };

  return (
    <div className="w-full px-4 mb-12 mt-12">
      <div className="text-xl text-center mb-4">Nossas especialidades</div>
      <div className="flex justify-center items-center space-x-7">
        <Image
          className="w-60 h-40 object-cover rounded-lg shadow-md cursor-pointer"
          src="/2.jpg"
          alt="Procedimento 1"
          width={200}
          height={100}
          onClick={() => handleProcedureClick("Procedimento 1")}
        />
        <Image
          className="w-60 h-40 object-cover rounded-lg shadow-md cursor-pointer"
          src="/2.jpg"
          alt="Procedimento 2"
          width={200}
          height={100}
          onClick={() => handleProcedureClick("Procedimento 2")}
        />
        <Image
          className="w-60 h-40 object-cover rounded-lg shadow-md cursor-pointer"
          src="/2.jpg"
          alt="Procedimento 3"
          width={200}
          height={100}
          onClick={() => handleProcedureClick("Procedimento 3")}
        />
      </div>
      {selectedProcedure && (
        <div className="mt-4">
          <h2>{selectedProcedure}</h2>
          <p>Aqui você pode adicionar mais informações sobre o procedimento selecionado.</p>
        </div>
      )}
    </div>
  );
}
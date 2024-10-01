"use client";
import { FaUserMd, FaChild, FaSyringe } from "react-icons/fa"; // Exemplos de ícones

export function Procedimentos() {
  const procedures = [
    { title: "Onicocriptose", icon: <FaUserMd />, description: "Tratamento eficaz para aliviar dores causadas por unhas encravadas." },
    { title: "Podologia Infantil", icon: <FaChild />, description: "Cuidados especializados para a saúde dos pés das crianças." },
    { title: "Onicomicose", icon: <FaSyringe />, description: "Tratamento da infecção fúngica das unhas, com resultados seguros." },
  ];

  return (
    <div className="w-full px-4 py-8 bg-gradient-to-b from-[#f7f0ea] to-[#dbbeb0] shadow-lg p-3">
      <div className="text-xl text-center font-semibold mb-6">
        Nossas especialidades
      </div>
      <div className="flex flex-wrap justify-center items-center gap-6">
        {procedures.map((procedure) => (
          <div key={procedure.title} className="bg-[#dbbeb0] w-64 p-6 rounded-lg shadow-md text-center transition-transform transform hover:scale-105 hover:shadow-lg">
            <div className="flex justify-center mb-4">
              <div className="text-4xl text-zinc-600">{procedure.icon}</div>
            </div>
            <h2 className="text-lg font-medium mb-2">{procedure.title}</h2>
            <p className="text-gray-600 text-sm">{procedure.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
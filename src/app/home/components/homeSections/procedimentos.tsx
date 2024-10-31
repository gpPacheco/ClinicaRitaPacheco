"use client";
import { FaUserMd, FaChild, FaSyringe } from "react-icons/fa";

export function Procedimentos() {
  const procedures = [
    {
      title: "Onicocriptose",
      icon: <FaUserMd />,
      description:
        "Tratamento eficaz para aliviar dores causadas por unhas encravadas.",
      more: "Saiba mais!",
    },
    {
      title: "Podologia Infantil",
      icon: <FaChild />,
      description: "Cuidados especializados para a saúde dos pés das crianças.",
      more: "Saiba mais!",
    },
    {
      title: "Onicomicose",
      icon: <FaSyringe />,
      description:
        "Tratamento da infecção fúngica das unhas, com resultados seguros.",
      more: "Saiba mais!",
    },
  ];

  return (
    <div className="w-full px-4 py-5 bg-gradient-to-b from-[#f7f0ea] to-[#dbbeb0] shadow-lg p-3">
      <div className="text-3xl font-light text-gray-800 text-center mb-5">
        Confira nossas{"  "}
        <a
          href="/especialidades"
          className="font-light text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700 underline hover:text-orange-700 transition-colors duration-300"
        >
          Especialidades
        </a>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-6">
        {procedures.map((procedure) => (
          <a
            href="/especialidades"
            key={procedure.title}
            className="bg-[#dbbeb0] w-64 p-6 rounded-lg shadow-md text-center transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer"
          >
            <div className="flex justify-center mb-4">
              <div className="text-4xl text-zinc-600">{procedure.icon}</div>
            </div>
            <h2 className="text-lg font-medium mb-2">{procedure.title}</h2>
            <p className="text-gray-700 text-sm">{procedure.description} </p>
            <p className="text-gray-700 text-sm underline mt-1">{procedure.more} </p>
          </a>
        ))}
      </div>
    </div>
  );
}

//   ______    ____
//  /\    /\  | "o |
// |  \/\/  |/ ___\|
// |gpPacheco_/
// /_/_/ /_/_/

"use client";
import Image from "next/image";

export function Procedimentos() {
  const procedures = [
    { title: "Unhas encravadas", image: "/2.jpg" },
    { title: "Podologia Infantil", image: "/2.jpg" },
    { title: "Micose", image: "/2.jpg" },
  ];

  return (
    <div className="w-full px-4 bg-gradient-to-b from-[#f7f0ea] to-[#dbbeb0] shadow-md">
      <div className="text-xl text-center font-semibold mb-4">Nossas especialidades</div>
      <div className="flex flex-wrap justify-center items-center gap-4">
        {procedures.map((procedure) => (
          <div key={procedure.title} className="text-center">
            <Image
              className="w-60 h-40 object-cover rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg"
              src={procedure.image}
              alt={procedure.title}
              width={240}
              height={160}
            />
            <h2 className="text-lg font-semibold mt-2">{procedure.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

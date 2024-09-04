"use client";

export function Depoimentos() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <p className="text-lg font-bold text-gray-600 opacity-50 hover:opacity-100 transition duration-300 ease-in-out">
        O que dizem nossos pacientes
      </p>
      <div className="container flex flex-wrap justify-center gap-4 mt-8">
        {[1, 2, 3].map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 shadow-md rounded-md p-4 w-64 h-40 transition duration-300 ease-in-out hover:scale-110"
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).classList.add("scale-110");
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).classList.remove("scale-110");
            }}
          >
            <h2 className="text-lg font-bold">Depoimento {item}</h2>
            <p className="text-gray-600">Texto do depoimento {item}</p>
          </div>
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

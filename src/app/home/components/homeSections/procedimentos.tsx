"use client";
import Image from "next/image"

export function Procedimentos() {
  return (
    <div className="w-full px-4 mb-12 mt-12">
      <div className="text-xl text-center mb-4">Procedimentos</div>
      <div className="flex justify-center items-center space-x-7">
        <Image
          className="w-60 h-40 object-cover rounded-lg shadow-md"
          src="/2.jpg"
          alt="Procedimento 1"
          width={200}
          height={100}
        />
        <Image
          className="w-60 h-40 object-cover rounded-lg shadow-md"
          src="/2.jpg"
          alt="Procedimento 2"
          width={200}
          height={100}
        />
        <Image
          className="w-60 h-40 object-cover rounded-lg shadow-md"
          src="/2.jpg"
          alt="Procedimento 3"
          width={200}
          height={100}
        />
      </div>
    </div>
  );
}

//   ______    ____
//  /\    /\  | "o |
// |  \/\/  |/ ___\|
// |gpPacheco_/
// /_/_/ /_/_/
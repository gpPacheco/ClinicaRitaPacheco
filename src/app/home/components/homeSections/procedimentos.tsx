"use client";
import Image from "next/image"

export function Procedimentos() {
  return (
    <div className="w-full px-4 mb-12">
      <div className="text-xl text-center mb-4">Procedimentos</div>
      <div className="flex justify-center items-center space-x-7">
        <Image
          className="w-60 h-40 object-cover"
          src=""
          alt="Imagem 1"
        />
        <Image
          className="w-60 h-40 object-cover"
          src=""
          alt="Imagem 2"
        />
        <Image
          className="w-60 h-40 object-cover"
          src=""
          alt="Imagem 3"
        />
      </div>
    </div>
  );
}
'use client'

import { MoveRight } from "lucide-react";
import { useRouter } from "next/navigation";

export function FaixaContato() {
  const router = useRouter();

  function navigate(link: string) {
    router.push(link);
  }

  return (
    <div className="bg-zinc-200/50 flex w-full h-auto justify-center text-lg py-4 bg-beige px-4 items-center">
      <span className="italic mr-4">Entre em contato conosco:</span>
      <div className="flex items-center">
        <button
          onClick={() => navigate("contato")}
          className="bg-zinc-200 hover:bg-zinc-300 text-beige-dark font-bold py-2 px-4 text-base transition-all flex items-center border border-beige-dark rounded"
        >
          Envie sua Mensagem <MoveRight size={18} className="ml-2" strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}

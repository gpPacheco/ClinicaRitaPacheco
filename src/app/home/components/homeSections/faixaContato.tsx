'use client'

import { MoveRight } from "lucide-react";
import { useRouter } from "next/navigation";

export function FaixaContato() {
  const router = useRouter();

  function navigate(link: string) {
    router.push(link);
  }

  return (
    <div className="bg-zinc-100 flex w-full h-auto justify-center text-lg py-4 px-6 items-center shadow-md rounded-md">
      <span className="italic text-zinc-700 mr-4">
        Entre em contato conosco:
      </span>
      <div className="flex items-center">
        <button
          onClick={() => navigate("contato")}
          className="bg-zinc-200 hover:bg-zinc-300 text-zinc-800 font-semibold py-2 px-6 text-base transition-all flex items-center border border-zinc-300 rounded shadow-sm hover:shadow-lg"
        >
          Envie sua Mensagem
          <MoveRight size={18} className="ml-2" strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}

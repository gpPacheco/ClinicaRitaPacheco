import Link from "next/link"
import type { Metadata } from "next"

// Metadata específica para página 404
export const metadata: Metadata = {
  title: "Página não encontrada - Rita Pacheco Podologia",
  description: "A página que você procura não foi encontrada. Volte para a página inicial da clínica Rita Pacheco.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#f7f0ea] to-[#dbbeb0] px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gray-800 mb-2">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Página não encontrada</h2>
          <p className="text-lg text-gray-600 mb-6">
            Desculpe, a página que você está procurando não existe ou foi movida.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-[#8B4513] hover:bg-[#A0522D] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:ring-offset-2"
            aria-label="Voltar para a página inicial"
          >
            Voltar ao Início
          </Link>

          <p className="text-sm text-gray-500">Ou use o menu de navegação acima para encontrar o que procura.</p>
        </div>
      </div>
    </div>
  )
}

//   ______    ____
//  /\    /\  | "o |
// |  \/\/  |/ ___\|
// |gpPacheco_/
// /_/_/ /_/_/

export default function Loading() {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#f7f0ea] to-[#dbbeb0]"
      role="status"
      aria-live="polite"
      aria-label="Carregando conteúdo"
    >
      <div className="text-center">
        <div className="relative">
          {/* Spinner otimizado */}
          <div className="w-16 h-16 border-4 border-[#8B4513] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>

          {/* Pulse effect */}
          <div className="absolute inset-0 w-16 h-16 border-4 border-[#8B4513] border-opacity-20 rounded-full animate-ping mx-auto"></div>
        </div>

        <p className="text-lg font-medium text-gray-700 animate-pulse">Carregando...</p>

        <p className="text-sm text-gray-500 mt-2">Preparando o melhor conteúdo para você</p>
      </div>
    </div>
  )
}

//   ______    ____
//  /\    /\  | "o |
// |  \/\/  |/ ___\|
// |gpPacheco_/
// /_/_/ /_/_/

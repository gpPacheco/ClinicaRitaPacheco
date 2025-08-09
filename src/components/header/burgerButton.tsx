"use client"

import { memo } from "react"

interface BurgerButtonProps {
  isOpen: boolean
  onClick: () => void
}

const BurgerButton = memo(({ isOpen, onClick }: BurgerButtonProps) => (
  <button
    className="relative h-6 w-6 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-lg p-1 hover:bg-orange-100 transition-colors duration-200"
    onClick={onClick}
    aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
    aria-expanded={isOpen}
    aria-controls="mobile-menu"
  >
    <span className="sr-only">{isOpen ? "Fechar menu" : "Abrir menu"}</span>

    {/* Linha superior */}
    <span
      className={`absolute left-1/2 top-1/2 block h-0.5 w-5 bg-gray-700 transition-all duration-300 ease-in-out ${
        isOpen ? "rotate-45 transform -translate-x-1/2 -translate-y-1/2" : "transform -translate-x-1/2 -translate-y-2"
      }`}
    />

    {/* Linha do meio */}
    <span
      className={`absolute left-1/2 top-1/2 block h-0.5 w-5 bg-gray-700 transition-all duration-300 ease-in-out ${
        isOpen ? "opacity-0" : "transform -translate-x-1/2 -translate-y-1/2"
      }`}
    />

    {/* Linha inferior */}
    <span
      className={`absolute left-1/2 top-1/2 block h-0.5 w-5 bg-gray-700 transition-all duration-300 ease-in-out ${
        isOpen ? "-rotate-45 transform -translate-x-1/2 -translate-y-1/2" : "transform -translate-x-1/2 translate-y-1"
      }`}
    />
  </button>
))

BurgerButton.displayName = "BurgerButton"

export default BurgerButton

//   ______    ____
//  /\    /\  | "o |
// |  \/\/  |/ ___\|
// |gpPacheco_/
// /_/_/ /_/_/

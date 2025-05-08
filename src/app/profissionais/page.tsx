"use client"

import React, { useState, useCallback, lazy, Suspense } from "react"
import { FaAward, FaGraduationCap, FaTimes, FaChevronRight } from "react-icons/fa"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { FaixaContato } from "@/components/faixaContato"

interface Profissional {
  id: number
  nome: string
  especialidade: string
  descricao: string
  especializacoes: string[]
  formacao: string[]
}

// Move data outside component to prevent recreation on each render
const profissionaisData: Profissional[] = [
  {
    id: 1,
    nome: "Rita Pacheco",
    especialidade: "Podóloga",
    descricao:
      "Podóloga desde 2010 (Senac Franca) especialista em: Podologia Gerôntica, Diabetes, Laserterapia, Podologia Pediatrica e Podologia Esportiva",
    especializacoes: [
      "Atendimento ao Portador de Diabetes Miellitus (2015, Senac Aclimação -SP)",
      "Podologia Geriátrica, Esportiva e Laserterapia para Onicomicose",
    ],
    formacao: ["Pós-graduada em Distúrbio de Linguagem (1995, Cefac SP)", "Fonoaudióloga desde 1994 (Univ. Franca-SP)"],
  },
]

// Pre-define animation variants to improve performance
const cardVariants = {
  hover: { y: -10 },
  tap: { scale: 0.98 },
}

const modalBackdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
}

const modalContentVariants = {
  hidden: { scale: 0.9, y: 20 },
  visible: { scale: 1, y: 0 },
  exit: { scale: 0.9, y: 20 },
}

// Memoize the ProfissionalCard component
const ProfissionalCard = React.memo(
  ({
    profissional,
    onClick,
  }: {
    profissional: Profissional
    onClick: (profissional: Profissional) => void
  }) => {
    return (
      <motion.div
        variants={cardVariants}
        whileHover="hover"
        whileTap="tap"
        className="relative w-full max-w-sm cursor-pointer group"
        onClick={() => onClick(profissional)}
      >
        <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-lg relative">
          <Image
            src="/perfil.jpg"
            alt={profissional.nome}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end items-center text-center p-6">
            <h3 className="text-2xl font-medium text-white mb-1">{profissional.nome}</h3>
            <p className="text-orange-200 mb-4">{profissional.especialidade}</p>
            <div className="flex items-center justify-center text-white/90 group-hover:text-white transition-colors">
              <span className="mr-2">Ver detalhes</span>
              <FaChevronRight className="transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </motion.div>
    )
  },
)

ProfissionalCard.displayName = "ProfissionalCard"

// Memoize the Modal component
const ProfissionalModal = React.memo(
  ({
    profissional,
    onClose,
  }: {
    profissional: Profissional
    onClose: () => void
  }) => {
    return (
      <motion.div
        variants={modalBackdropVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          variants={modalContentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="bg-white rounded-xl shadow-2xl relative max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10 bg-white rounded-full p-1 shadow"
            onClick={onClose}
            aria-label="Fechar"
          >
            <FaTimes className="text-xl" />
          </button>

          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 relative h-64 md:h-auto">
              <Image
                src="/perfil.jpg"
                alt={profissional.nome}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-top brightness-90"
              />
            </div>

            <div className="p-6 md:w-2/3 text-center md:text-left overflow-y-auto">
              <h2 className="text-2xl md:text-3xl font-medium mb-2 text-[#7b4f38]">{profissional.nome}</h2>
              <p className="text-lg font-medium text-orange-600 mb-4">{profissional.especialidade}</p>
              <p className="text-gray-700 mb-6">{profissional.descricao}</p>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center mb-2 justify-center md:justify-start">
                    <FaAward className="text-orange-500 mr-2" />
                    <h3 className="font-semibold text-gray-800">Especializações</h3>
                  </div>
                  <ul className="space-y-2 pl-6 md:pl-8 text-left">
                    {profissional.especializacoes.map((especializacao, idx) => (
                      <li key={idx} className="text-gray-700 list-disc">
                        {especializacao}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex items-center mb-2 justify-center md:justify-start">
                    <FaGraduationCap className="text-orange-500 mr-2" />
                    <h3 className="font-semibold text-gray-800">Formação</h3>
                  </div>
                  <ul className="space-y-2 pl-6 md:pl-8 text-left">
                    {profissional.formacao.map((formacao, idx) => (
                      <li key={idx} className="text-gray-700 list-disc">
                        {formacao}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    )
  },
)

ProfissionalModal.displayName = "ProfissionalModal"

const Profissionais = () => {
  const [selectedProfissional, setSelectedProfissional] = useState<Profissional | null>(null)

  const handleCardClick = useCallback((profissional: Profissional) => {
    setSelectedProfissional(profissional)
  }, [])

  const handleCloseModal = useCallback(() => {
    setSelectedProfissional(null)
  }, [])

  return (
    <div className="px-4 py-12 md:py-16 bg-gradient-to-b from-[#f7f0ea] to-[#dbbeb0] min-h-screen flex flex-col">
      <div className="container mx-auto flex-grow flex flex-col items-center justify-center">
        <div className="text-center mb-12 w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4">
            Conheça a{" "}
            <span className="font-light text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">
              Profissional
            </span>{" "}
            da clínica!
          </h2>
          <p className="text-lg md:text-xl text-gray-700">
            Com <span className="font-medium text-orange-600">mais de 15 anos</span> de experiência!
          </p>
        </div>

        {/* Container centralizado com apenas um card */}
        <div className="w-full flex justify-center">
          <ProfissionalCard profissional={profissionaisData[0]} onClick={handleCardClick} />
        </div>

        <AnimatePresence>
          {selectedProfissional && <ProfissionalModal profissional={selectedProfissional} onClose={handleCloseModal} />}
        </AnimatePresence>

        <div className="mt-16 w-full">
          <Suspense fallback={<div className="h-32 flex items-center justify-center">Carregando...</div>}>
            <FaixaContato />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default Profissionais
//   ______    ____
//  /\    /\  | "o |
// |  \/\/  |/ ___\|
// |gpPacheco_/
// /_/_/ /_/_/

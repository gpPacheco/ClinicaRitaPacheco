"use client"; 
import { usePathname } from "next/navigation"; // Para capturar a rota atual
import { motion, AnimatePresence } from "framer-motion"; // Importando as funções de animação

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // Obtendo a rota atual

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname} // Transição baseada na mudança de rota
        initial={{ opacity: 0, x: -200 }} // Animação de entrada
        animate={{ opacity: 1, x: 0 }}   // Animação ativa
        exit={{ opacity: 0, x: 200 }}     // Animação de saída
        transition={{ duration: 0.5 }}    // Duração da transição
      >
        {children} {/* Renderiza o conteúdo */}
      </motion.div>
    </AnimatePresence>
  );
}

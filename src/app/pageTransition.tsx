"use client";
import { usePathname } from "next/navigation"; // Para capturar a rota atual
import { motion, AnimatePresence } from "framer-motion"; // Importando as funções de animação

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // Obtendo a rota atual

  return (
    <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
      <motion.div
        key={pathname} // Transição baseada na mudança de rota
        initial={{ opacity: 0, x: -50, scale: 0.95 }} // Animação de entrada com leve escala
        animate={{ opacity: 1, x: 0, scale: 1 }}      // Animação ativa
        exit={{ opacity: 0, x: 50, scale: 0.95 }}     // Animação de saída com leve escala
        transition={{ duration: 0.3, ease: "easeInOut" }} // Transição mais rápida (0.3s) e suave
      >
        {children} {/* Renderiza o conteúdo */}
      </motion.div>
    </AnimatePresence>
  );
}

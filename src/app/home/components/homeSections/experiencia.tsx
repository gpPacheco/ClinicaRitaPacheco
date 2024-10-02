"use client";
import { motion } from "framer-motion";

export function Experiencia() {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-[#f7f0ea] py-6">    
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
        <motion.div
          className="bg-[#dbbeb0] rounded-lg p-4 text-center text-zinc-600 shadow-lg"
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xl font-bold">Mais de 15 anos</p>
          <p>de experiência</p>
        </motion.div>

        <motion.div
          className="bg-[#dbbeb0] rounded-lg p-4 text-center text-zinc-600 shadow-lg"
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xl font-bold">500+</p>
          <p>projetos concluídos</p>
        </motion.div>

        <motion.div
          className="bg-[#dbbeb0] rounded-lg p-4 text-center text-zinc-600 shadow-lg"
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xl font-bold">100+</p>
          <p>clientes satisfeitos</p>
        </motion.div>
      </div>
    </div>
  );
}

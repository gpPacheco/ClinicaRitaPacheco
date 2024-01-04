"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Lks } from "./links";
import Image from "next/image"
export function Header() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenSizeThreshold = 768;
      setIsMobileMenuOpen(window.innerWidth <= screenSizeThreshold);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function navigate(link: string) {
    router.push(link);
  }
  return (
    <div className="bg-zinc-100/50 flex flex-row gap-10 justify-around fixed w-full h-20 z-50 items-center px-4 font-light">
      <Image src="/ritapachecointeiro-logo.png" alt="Logo" className="h-fit" />
      {isMobileMenuOpen ? (
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-xs gap-15 text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-200 dark:focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      ) : (
        <>
          <Lks onClick={() => navigate("/")}>HOME</Lks>
          <Lks onClick={() => navigate("/profissionais")}>PROFISSIONAIS</Lks>
          <Lks onClick={() => navigate("/clinica")}>A CLINICA</Lks>
          <Lks onClick={() => navigate("/especialidades")}>ESPECIALIDADES</Lks>
          <Lks onClick={() => navigate("/produtos")}>PRODUTOS</Lks>
          <Lks onClick={() => navigate("/curiosidades")}>CURIOSIDADES</Lks>
          <Lks onClick={() => navigate("/contato")}>CONTATO</Lks>
        </>
      )}
    </div>
  );
}

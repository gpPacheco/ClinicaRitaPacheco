"use client";
import Image from "next/image";
import { FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin, FaTiktok, FaRegAddressBook } from "react-icons/fa";

export function Rodape() {
  return (
    <footer className="bg-gradient-to-r from-gray-100 via-[#dbbeb0] to-gray-100">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <a href="/" target="_self">
              <Image
                src="/logo.png"
                alt="Logo"
                width={200}
                height={200}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </a>
            <div className="flex mt-8 space-x-6 text-gray-600">
              <a
                className="hover:opacity-75"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> WhatsApp </span>
                <FaWhatsapp className="w-6 h-6" />
              </a>
              <a className="hover:opacity-75" target="_blank" rel="noreferrer">
                <span className="sr-only"> Instagram </span>
                <FaInstagram className="w-6 h-6" />
              </a>
              <a className="hover:opacity-75" target="_blank" rel="noreferrer">
                <span className="sr-only"> Facebook </span>
                <FaFacebook className="w-6 h-6" />
              </a>
              <a className="hover:opacity-75" target="_blank" rel="noreferrer">
                <span className="sr-only"> LinkedIn </span>
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a className="hover:opacity-75" target="_blank" rel="noreferrer">
                <span className="sr-only"> TikTok </span>
                <FaTiktok className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="font-medium">Links Rápidos</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-600">
                <a className="hover:opacity-75"> Sobre </a>
                <a className="hover:opacity-75"> Reportagens </a>
                <a className="hover:opacity-75"> Trabalhe Conosco </a>
              </nav>
            </div>
            <div>
              <p className="font-medium">Contato</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a
                  className="hover:opacity-75"
                  href="https://api.whatsapp.com/send/?phone=5516993108637&text&type=phone_number&app_absent=0"
                >
                  <span className="flex items-center">
                    <FaWhatsapp className="mr-1" />(16) 99310-8637
                  </span>
                </a>
                <a className="hover:opacity-75">
                  <span className="flex items-center">
                    <FaRegAddressBook className="mr-1" />(16) 3720-5691
                  </span>
                </a>
                <a className="hover:opacity-75"> </a>
              </nav>
            </div>
            <div>
              <p className="font-medium">Saiba Mais</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-600">
                <a className="hover:opacity-75"> Mentorias </a>
                <a className="hover:opacity-75"> Cursos </a>
                <a className="hover:opacity-75"> Avaliações </a>
              </nav>
            </div>
            <div>
              <p className="font-medium">Legal</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a className="hover:opacity-75"> Política de Privacidade </a>
                <a className="hover:opacity-75"> Termos &amp; Condições </a>
                <a className="hover:opacity-75"> Acessibilidade </a>
              </nav>
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs text-zinc-950">
          <a
            className="hover:text-orange-600 text-zinc-950 text-ml font-bold underline"
            href="/"
          >
           © Clinica Rita Pacheco
          </a>
        </p>
      </div>
    </footer>
  );
}

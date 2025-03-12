import Image from "next/image";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTiktok,
  FaRegAddressBook,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export function Rodape() {
  return (
    <footer className="bg-gradient-to-r from-[#dbbeb0] via-[#f7f0ea] to-[#dbbeb0]">
      <div className="max-w-screen-xl px-4 py-3 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Logo e Redes Sociais */}
          <div>
            <a href="/" target="_self" className="flex justify-center">
              <Image
                src="/marca.png"
                alt="Logo"
                width={150}
                height={150}
                priority // Garante que a imagem seja carregada com prioridade
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </a>
            <div className="flex mt-8 space-x-6 text-gray-600 justify-center sm:flex sm:items-center">
              <a
                className="hover:opacity-75"
                href="https://api.whatsapp.com/send/?phone=5516993108637&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> WhatsApp </span>
                <FaWhatsapp className="w-6 h-6" />
              </a>
              <a
                className="hover:opacity-75"
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/ritapacheco.clinic/"
              >
                <span className="sr-only"> Instagram </span>
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                className="hover:opacity-75"
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/ritapachecopodologa"
              >
                <span className="sr-only"> Facebook </span>
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                className="hover:opacity-75"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/company/clinica-rita-pacheco/"
              >
                <span className="sr-only"> LinkedIn </span>
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                className="hover:opacity-75"
                target="_blank"
                rel="noreferrer"
                href="https://www.tiktok.com/@ritafpachecoo"
              >
                <span className="sr-only"> TikTok </span>
                <FaTiktok className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Links Rápidos, Contato, Saiba Mais e Localização */}
          <div className="grid grid-cols-2 gap-3 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4 mt-3">
            {/* Links Rápidos */}
            <div>
              <p className="font-medium">Links Rápidos</p>
              <nav className="flex flex-col mt-2 space-y-2 text-sm text-gray-800">
                <a className="hover:opacity-75" href="/clinica/sobre">
                  Sobre
                </a>
                <a className="hover:opacity-75"> Reportagens </a>
              </nav>
            </div>

            {/* Contato */}
            <div>
              <p className="font-medium">Contato</p>
              <nav className="flex flex-col mt-2 space-y-2 text-sm text-gray-800">
                <a
                  className="hover:opacity-75"
                  href="https://api.whatsapp.com/send/?phone=5516993108637&text&type=phone_number&app_absent=0"
                >
                  <span className="flex items-center">
                    <FaWhatsapp className="mr-1" />
                    (16) 99310-8637
                  </span>
                </a>
                <a className="hover:opacity-75">
                  <span className="flex items-center">
                    <FaRegAddressBook className="mr-1" />
                    (16) 3720-5691
                  </span>
                </a>
              </nav>
            </div>

            {/* Saiba Mais */}
            <div>
              <p className="font-medium">Saiba Mais</p>
              <nav className="flex flex-col mt-2 space-y-2 text-sm text-gray-800">
                <a className="hover:opacity-75" href="/mentoria">
                  Mentorias
                </a>
                <a className="hover:opacity-75" href="/cursos">
                  Cursos
                </a>
              </nav>
            </div>

            {/* Localização */}
            <div>
              <p className="font-medium">Localização</p>
              <nav className="flex flex-col mt-2 space-y-2 text-sm text-gray-800">
                <a
                  className="hover:opacity-75"
                  href="https://maps.app.goo.gl/FejJqAM4TTUXhMLu6"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="flex items-center underline">
                    <FaLocationDot className="mr-1" />
                    Onde estamos
                  </span>
                </a>
                <a className="hover:opacity-75">
                  Av. 7 de Setembro, Nº | 650 Sala 01 e 02
                </a>
                <a className="hover:opacity-75"> Bairro São José | 14401-278</a>
                <a className="hover:opacity-75"> Franca - SP </a>
              </nav>
            </div>
          </div>
        </div>

        {/* Créditos */}
        <p className="mt-4 text-xs text-zinc-950 text-center">
          <a
            className="hover:text-gray-600 text-zinc-950 text-ml font-bold underline"
            href="/"
          >
            © Clinica Rita Pacheco{"  "}
          </a>
          | Developed by{"  "}
          <a
            className="hover:text-gray-600 text-zinc-950 text-ml font-bold underline"
            href="https://github.com/gpPacheco"
            target="_blank"
            rel="noreferrer"
          >
            Gabriel Pacheco
          </a>
        </p>
      </div>
    </footer>
  );
}
//   ______    ____
//  /\    /\  | "o |
// |  \/\/  |/ ___\|
// |gpPacheco_/
// /_/_/ /_/_/

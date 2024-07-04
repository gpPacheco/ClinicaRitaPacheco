"use client";
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
    <footer className="bg-gradient-to-r from-[#f7f0ea] via-[#dbbeb0] to-[#f7f0ea]">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <a href="/" target="_self">
              <Image
                src="/marca.png"
                alt="Logo"
                width={150}
                height={150}
                style={{ maxWidth: "100%", height: "auto", marginLeft: "32px" }}
              />
            </a>
            <div className="flex mt-8 space-x-6 text-gray-600">
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
                href="https://www.instagram.com/ritafpacheco/"
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
          <div className="grid grid-cols-1 gap-3 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
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
              <p className="font-medium">Localização</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
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
        <p className="mt-8 text-xs text-zinc-950 text-center">
          <a
            className="hover:text-gray-600 text-zinc-950 text-ml font-bold underline"
            href="/"
          >
            © Clinica Rita Pacheco
          </a>
        </p>
      </div>
    </footer>
  );
}

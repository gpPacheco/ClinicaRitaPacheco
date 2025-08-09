"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { useMemo } from "react"
import { FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin, FaTiktok, FaPhone } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"

interface SocialLink {
  name: string
  href: string
  icon: React.ReactNode
  ariaLabel: string
}

interface NavigationSection {
  title: string
  links: Array<{
    name: string
    href: string
    external?: boolean
  }>
}

export function Rodape() {
  // Memoizar dados estáticos
  const socialLinks: SocialLink[] = useMemo(
    () => [
      {
        name: "WhatsApp",
        href: "https://api.whatsapp.com/send/?phone=5516993108637&text&type=phone_number&app_absent=0",
        icon: <FaWhatsapp className="w-6 h-6" />,
        ariaLabel: "Contato via WhatsApp",
      },
      {
        name: "Instagram",
        href: "https://www.instagram.com/ritapacheco.clinic/",
        icon: <FaInstagram className="w-6 h-6" />,
        ariaLabel: "Siga-nos no Instagram",
      },
      {
        name: "Facebook",
        href: "https://www.facebook.com/ritapachecopodologa",
        icon: <FaFacebook className="w-6 h-6" />,
        ariaLabel: "Curta nossa página no Facebook",
      },
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/company/clinica-rita-pacheco/",
        icon: <FaLinkedin className="w-6 h-6" />,
        ariaLabel: "Conecte-se conosco no LinkedIn",
      },
      {
        name: "TikTok",
        href: "https://www.tiktok.com/@ritafpachecoo",
        icon: <FaTiktok className="w-6 h-6" />,
        ariaLabel: "Siga-nos no TikTok",
      },
    ],
    [],
  )

  const navigationSections: NavigationSection[] = useMemo(
    () => [
      {
        title: "Links Rápidos",
        links: [
          { name: "Sobre", href: "/clinica/sobre" },
          { name: "Especialidades", href: "/especialidades" },
          { name: "Espaço", href: "/clinica/espaco" },
        ],
      },
      {
        title: "Contato",
        links: [
          { name: "(16) 99310-8637", href: "https://api.whatsapp.com/send/?phone=5516993108637", external: true },
          { name: "(16) 3720-5691", href: "tel:+551637205691" },
        ],
      },
      {
        title: "Saiba Mais",
        links: [
          { name: "Mentorias", href: "/aprenda" },
          { name: "Cursos", href: "/aprenda" },
          { name: "Profissionais", href: "/profissionais" },
        ],
      },
    ],
    [],
  )

  return (
    <footer className="bg-gradient-to-r from-[#dbbeb0] via-[#f7f0ea] to-[#dbbeb0] border-t border-orange-200/30">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* Logo e Redes Sociais */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex justify-center lg:justify-start mb-6">
              <Image
                src="/marca.png"
                alt="Logo Clínica Rita Pacheco - Podologia especializada em Franca"
                width={150}
                height={150}
                className="hover:scale-105 transition-transform duration-300"
                priority
              />
            </Link>

            <p className="text-gray-600 text-center lg:text-left mb-6 max-w-sm">
              Cuidados especializados para seus pés com profissionalismo, carinho e as melhores técnicas de podologia.
            </p>

            <div className="flex justify-center lg:justify-start space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-orange-600 transition-colors duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-lg p-1"
                  aria-label={social.ariaLabel}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Seções de Navegação */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {navigationSections.map((section) => (
                <div key={section.title}>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">{section.title}</h3>
                  <nav className="space-y-3">
                    {section.links.map((link) => (
                      <div key={link.name}>
                        {link.external ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-gray-600 hover:text-orange-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded"
                          >
                            {link.name.includes("99310") ? (
                              <FaWhatsapp className="mr-2 text-green-500" />
                            ) : (
                              <FaPhone className="mr-2" />
                            )}
                            {link.name}
                          </a>
                        ) : (
                          <Link
                            href={link.href}
                            className="text-gray-600 hover:text-orange-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded block"
                          >
                            {link.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </nav>
                </div>
              ))}
            </div>
          </div>

          {/* Localização */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Localização</h3>
            <div className="space-y-3">
              <a
                href="https://maps.app.goo.gl/FejJqAM4TTUXhMLu6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-orange-600 hover:text-orange-700 font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded"
              >
                <FaLocationDot className="mr-2" />
                Ver no mapa
              </a>
              <address className="not-italic text-gray-600 space-y-1">
                <p>Av. 7 de Setembro, Nº 650</p>
                <p>Salas 01 e 02</p>
                <p>Bairro São José</p>
                <p>CEP: 14401-278</p>
                <p>Franca - SP</p>
              </address>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-gray-300 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-gray-600 text-center sm:text-left">
              © {new Date().getFullYear()}{" "}
              <Link href="/" className="font-semibold hover:text-orange-600 transition-colors duration-300">
                Clínica Rita Pacheco
              </Link>
              . Todos os direitos reservados.
            </p>

            <p className="text-sm text-gray-600 text-center sm:text-right">
              Desenvolvido por{" "}
              <a
                href="https://github.com/gpPacheco"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:text-orange-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded"
              >
                Gabriel Pacheco
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

//   ______    ____
//  /\    /\  | "o |
// |  \/\/  |/ ___\|
// |gpPacheco_/
// /_/_/ /_/_/

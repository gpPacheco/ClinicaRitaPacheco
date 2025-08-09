"use client"

import { memo } from "react"
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa"

const SocialMenu = memo(() => {
  const socialLinks = [
    {
      href: "https://instagram.com/podologa.ritapacheco",
      icon: FaInstagram,
      label: "Instagram",
      color: "hover:text-pink-600",
    },
    {
      href: "https://wa.me/5516999999999",
      icon: FaWhatsapp,
      label: "WhatsApp",
      color: "hover:text-green-600",
    },
    {
      href: "https://facebook.com/ritapachecopodologia",
      icon: FaFacebook,
      label: "Facebook",
      color: "hover:text-blue-600",
    },
  ]

  return (
    <div className="flex items-center space-x-4">
      <span className="text-sm text-gray-600">Siga-nos:</span>
      <div className="flex space-x-3">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-gray-500 ${social.color} transition-colors duration-200 p-2 rounded-full hover:bg-gray-100`}
            aria-label={social.label}
          >
            <social.icon className="h-5 w-5" />
          </a>
        ))}
      </div>
    </div>
  )
})

SocialMenu.displayName = "SocialMenu"

export default SocialMenu

//   ______    ____
//  /\    /\  | "o |
// |  \/\/  |/ ___\|
// |gpPacheco_/
// /_/_/ /_/_/

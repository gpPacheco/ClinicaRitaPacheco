"use client"

import { MapPin, ExternalLink } from 'lucide-react'
import { useState } from "react"

export default function Location() {
  const [isLoading, setIsLoading] = useState(true)

  const handleMapLoad = () => {
    setIsLoading(false)
  }

  const handleMapError = () => {
    setIsLoading(false)
  }

  return (
    <section className="w-full" aria-label="Localização da clínica">
      <header className="text-center mb-6">
        <a
          href="https://maps.app.goo.gl/FejJqAM4TTUXhMLu6"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 text-3xl text-gray-800 hover:text-orange-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-lg p-2"
          aria-label="Ver localização no Google Maps (abre em nova aba)"
        >
          <MapPin size={32} className="group-hover:scale-110 transition-transform duration-300" />
          <span className="font-light underline decoration-2 underline-offset-4 decoration-orange-500/30 group-hover:decoration-orange-600">
            Onde estamos
          </span>
          <ExternalLink size={20} className="opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
        </a>
      </header>

      <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
              <p className="text-gray-600">Carregando mapa...</p>
            </div>
          </div>
        )}

        <iframe
          className="w-full h-80 md:h-96 border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.563340110967!2d-47.399299!3d-20.536321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b6f941d77f1b8b%3A0x5cb7286ab5cda5da!2sAv.%207%20de%20Setembro%2C%20650%20-%20S%C3%A3o%20Jos%C3%A9%2C%20Franca%20-%20SP%2C%2014401-278!5e0!3m2!1spt!2sbr!4v1696865609804!5m2!1spt!2sbr"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização da Clínica Rita Pacheco - Av. 7 de Setembro, 650, São José, Franca - SP"
          onLoad={handleMapLoad}
          onError={handleMapError}
        />
      </div>

      <div className="mt-6 text-center">
        <address className="not-italic text-gray-600 space-y-1">
          <p className="font-medium text-gray-800">Clínica Rita Pacheco</p>
          <p>Av. 7 de Setembro, 650 - Salas 01 e 02</p>
          <p>Bairro São José - CEP: 14401-278</p>
          <p>Franca - SP</p>
        </address>

        <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://maps.app.goo.gl/FejJqAM4TTUXhMLu6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            <MapPin size={18} />
            Ver no Google Maps
          </a>

          <a
            href="https://api.whatsapp.com/send/?phone=5516993108637&text=Olá, gostaria de saber como chegar à clínica&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
            </svg>
            Pedir Direções
          </a>
        </div>
      </div>
    </section>
  )
}

//   ______    ____
//  /\    /\  | "o |
// |  \/\/  |/ ___\|
// |gpPacheco_/
// /_/_/ /_/_/

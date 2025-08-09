import type React from "react"
import { Header } from "@/components/header"
import "./globals.css"
import type { Metadata } from "next"
import { Poppins, Dancing_Script, Great_Vibes, Lora } from 'next/font/google'
import { Rodape } from "@/components/footer"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

// Fontes da identidade visual
const poppins = Poppins({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"]
})

const dancingScript = Dancing_Script({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dancing-script",
  weight: ["400", "500", "600", "700"]
})

const greatVibes = Great_Vibes({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-great-vibes",
  weight: ["400"]
})

const lora = Lora({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
  weight: ["400", "500", "600", "700"]
})

export const metadata: Metadata = {
  title: {
    default: "Podóloga em Franca - Rita Pacheco | Cuidados Completos para Seus Pés",
    template: "%s | Rita Pacheco Podologia",
  },
  description:
    "Podóloga em Franca especializada em cuidados dos pés para todas as idades. Serviços de podologia, podologia esportiva, geriátrica e infantil.",
  keywords: [
    "podóloga",
    "podologia em Franca",
    "unha encravada",
    "micose",
    "cuidados dos pés",
    "podologia esportiva",
    "podologia geriátrica",
    "podologia infantil",
    "Franca",
    "São Paulo",
  ],
  authors: [{ name: "Rita Pacheco" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://clinica-rita-pacheco.vercel.app",
    title: "Podóloga em Franca - Cuidados Completos para Seus Pés",
    description: "Encontre uma podóloga em Franca especializada em tratamentos completos para seus pés.",
    siteName: "Rita Pacheco Podologia",
    images: [{ url: "/logo-site.png", width: 1200, height: 630, alt: "Logo da Clínica Rita Pacheco" }],
  },
  icons: { icon: "/logo-site.png" },
  metadataBase: new URL("https://clinica-rita-pacheco.vercel.app"),
}

function GlobalLoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
        <p className="mt-4 text-gray-600">Carregando...</p>
      </div>
    </div>
  )
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Rita Pacheco Podologia",
    description: "Clínica de podologia especializada em cuidados dos pés",
    url: "https://clinica-rita-pacheco.vercel.app",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. 7 de Setembro, 650",
      addressLocality: "Franca",
      addressRegion: "SP",
      addressCountry: "BR",
    },
  }

  return (
    <html lang="pt-BR" className={`${poppins.variable} ${dancingScript.variable} ${greatVibes.variable} ${lora.variable}`}>
      <body 
        className="min-h-screen flex flex-col overflow-x-hidden bg-comfort-light font-poppins"
        style={{
          fontFamily: 'var(--font-poppins), system-ui, -apple-system, sans-serif'
        }}
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        <main className="flex-1 pt-20">
          {children}
        </main>
        <Rodape />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}

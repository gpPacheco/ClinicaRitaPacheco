import { Suspense } from "react"
import dynamic from "next/dynamic"
import { FaixaContato } from "@/components/faixaContato"
import { EmblaCarousel } from "./home/carrossel"
import type { Metadata } from "next"

// Lazy loading otimizado
const Procedimentos = dynamic(
  () => import("./home/components/procedimentos").then((mod) => ({ default: mod.Procedimentos })),
  {
    loading: () => (
      <div className="h-96 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    ),
  }
)

const Local = dynamic(() => import("./home/components/espaco").then((mod) => ({ default: mod.Local })), {
  loading: () => (
    <div className="h-96 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
    </div>
  ),
})

const Cursos = dynamic(() => import("./home/components/cursos").then((mod) => ({ default: mod.Cursos })), {
  loading: () => (
    <div className="h-96 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
    </div>
  ),
})

const Avaliacoes = dynamic(() => import("./home/components/avaliacoes").then((mod) => ({ default: mod.Avaliacoes })), {
  loading: () => (
    <div className="h-96 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
    </div>
  ),
})

const Depoimentos = dynamic(
  () => import("./home/components/depoimentos").then((mod) => ({ default: mod.Depoimentos })),
  {
    loading: () => (
      <div className="h-96 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    ),
  }
)

const Location = dynamic(() => import("@/components/location"), {
  loading: () => (
    <div className="h-96 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
    </div>
  ),
})

export const metadata: Metadata = {
  title: "Podóloga em Franca - Rita Pacheco | Cuidados Completos para Seus Pés",
  description:
    "Clínica de podologia em Franca especializada em tratamentos para todas as idades. Procedimentos, cursos e cuidados profissionais para seus pés.",
  openGraph: {
    title: "Podóloga em Franca - Rita Pacheco",
    description: "Cuidados completos para seus pés com profissionalismo e carinho",
    url: "https://clinica-rita-pacheco.vercel.app",
  },
}

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Hero Section */}
      <section aria-label="Apresentação principal">
        <EmblaCarousel />
      </section>

      {/* Contact Banner */}
      <section 
        className="w-full py-16 px-4 bg-gradient-to-br from-comfort-cream via-comfort-pearl to-comfort-blush"
        aria-label="Informações de contato"
      >
        <FaixaContato />
      </section>

      {/* Main Content Sections */}
      <Suspense fallback={<div className="h-96 animate-pulse bg-gray-200 rounded-lg mx-4 my-8" />}>
        <Procedimentos />
      </Suspense>

      <Suspense fallback={<div className="h-96 animate-pulse bg-gray-200 rounded-lg mx-4 my-8" />}>
        <Local />
      </Suspense>

      <Suspense fallback={<div className="h-96 animate-pulse bg-gray-200 rounded-lg mx-4 my-8" />}>
        <Cursos />
      </Suspense>

      <Suspense fallback={<div className="h-96 animate-pulse bg-gray-200 rounded-lg mx-4 my-8" />}>
        <Depoimentos />
      </Suspense>

      <Suspense fallback={<div className="h-96 animate-pulse bg-gray-200 rounded-lg mx-4 my-8" />}>
        <Avaliacoes />
      </Suspense>

      {/* Location Section */}
      <section 
        className="px-4 py-16 bg-gradient-to-br from-comfort-blush to-comfort-rose"
        aria-label="Localização"
      >
        <Suspense fallback={<div className="h-96 animate-pulse bg-gray-300 rounded-lg" />}>
          <Location />
        </Suspense>
      </section>
    </div>
  )
}

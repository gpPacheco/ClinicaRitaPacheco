"use client"

import React, { useState } from "react"
import Image from "next/image"
import { Play, Quote, Star, ArrowLeft, ArrowRight } from "lucide-react"
import { InteractiveCard } from "@/components/ui/interactive-card"

interface Testimonial {
  id: number
  name: string
  service: string
  comment: string
  rating: number
  photo?: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Maria Silva",
    service: "Podologia Geriátrica",
    comment: "Excelente atendimento! A Dra. Rita é muito cuidadosa e profissional. Recomendo para todos que precisam de cuidados especiais com os pés.",
    rating: 5,
  },
  {
    id: 2,
    name: "João Santos",
    service: "Podologia Esportiva",
    comment: "Como atleta, preciso de cuidados especializados. O tratamento aqui é excepcional e me ajudou muito na minha performance.",
    rating: 5,
  },
  {
    id: 3,
    name: "Ana Costa",
    service: "Podologia Infantil",
    comment: "Minha filha ficou muito à vontade durante o atendimento. Profissional experiente e ambiente acolhedor.",
    rating: 5,
  },
  {
    id: 4,
    name: "Pedro Lima",
    service: "Tratamento de Unha Encravada",
    comment: "Procedimento realizado com muita precisão e cuidado. Sem dor e com ótimo resultado. Muito satisfeito!",
    rating: 5,
  }
]

const featuredVideo = {
  id: "dQw4w9WgXcQ", // Substitua pelo ID real do vídeo
  title: "Depoimento - Paciente Rita Pacheco",
  thumbnail: "/depoimentos/video-thumb.jpg"
}

export function Depoimentos() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
      />
    ))
  }

  return (
    <section className="w-full px-6 py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="text-5xl md:text-6xl font-bold mb-4 text-blue-600">
            Depoimentos
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
            O que nossos pacientes dizem
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full"></div>
          <p className="font-light text-gray-600 leading-relaxed text-lg mt-6 max-w-2xl mx-auto">
            A satisfação e confiança dos nossos pacientes é nosso maior reconhecimento
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Section */}
          <div className="relative">
            <InteractiveCard className="relative overflow-hidden rounded-3xl group">
              <div className="relative aspect-video bg-gradient-to-br from-blue-100 to-blue-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setIsVideoModalOpen(true)}
                    className="group/play bg-white/90 hover:bg-white rounded-full p-6 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                    aria-label="Reproduzir vídeo de depoimento"
                  >
                    <Play className="w-12 h-12 text-blue-600 ml-1 group-hover/play:text-blue-800 transition-colors" />
                  </button>
                </div>
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                
                {/* Video title */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg">
                    {featuredVideo.title}
                  </h3>
                </div>
              </div>
            </InteractiveCard>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative">
            <InteractiveCard className="p-8 md:p-10 h-full">
              <div className="relative min-h-[300px] flex flex-col justify-between">
                {/* Quote Icon */}
                <div className="absolute -top-2 -left-2 text-blue-200">
                  <Quote className="w-16 h-16" />
                </div>

                {/* Testimonial Content */}
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>
                  
                  <blockquote className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6 font-light">
                    &ldquo;{testimonials[currentIndex].comment}&rdquo;
                  </blockquote>
                  
                  <div className="border-t border-gray-200 pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-800 text-lg">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-blue-600 font-medium">
                          {testimonials[currentIndex].service}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-8">
                  <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentIndex 
                            ? "bg-blue-600 w-8" 
                            : "bg-gray-300 hover:bg-gray-400"
                        }`}
                        aria-label={`Ver depoimento ${index + 1}`}
                      />
                    ))}
                  </div>
                  
                  <div className="flex space-x-2">
                    <button
                      onClick={prevTestimonial}
                      className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 transition-all duration-300"
                      aria-label="Depoimento anterior"
                    >
                      <ArrowLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 transition-all duration-300"
                      aria-label="Próximo depoimento"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </InteractiveCard>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <InteractiveCard className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-10 rounded-3xl max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Quer compartilhar sua experiência?
            </h3>
            <p className="text-blue-100 mb-6 text-lg">
              Sua opinião é muito importante para nós e para outros pacientes
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Deixar Depoimento
            </button>
          </InteractiveCard>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div 
            className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${featuredVideo.id}?autoplay=1`}
                title={featuredVideo.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-4 text-center">
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="px-6 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

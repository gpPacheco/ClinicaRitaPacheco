"use client"

import React, { useState } from "react"
import { Play, Quote, Star, ArrowLeft, ArrowRight } from "lucide-react"
import { InteractiveCard } from "@/components/ui/interactive-card"

interface Testimonial {
  id: number
  name: string
  service: string
  comment: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Maria Silva",
    service: "Podologia Geriátrica",
    comment: "Excelente atendimento! A Dra. Rita é muito cuidadosa e profissional.",
    rating: 5,
  },
  {
    id: 2,
    name: "João Santos",
    service: "Podologia Esportiva",
    comment: "Como atleta, preciso de cuidados especializados. O tratamento aqui é excepcional.",
    rating: 5,
  },
  {
    id: 3,
    name: "Ana Costa",
    service: "Podologia Infantil",
    comment: "Minha filha ficou muito à vontade durante o atendimento. Ambiente acolhedor.",
    rating: 5,
  }
]

export default function Depoimentos() {
  const [currentIndex, setCurrentIndex] = useState(0)

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
    <section className="w-full px-6 py-20 bg-gradient-to-br from-comfort-cream via-comfort-pearl to-comfort-light">
      <div className="container mx-auto max-w-7xl">
        <header className="text-center mb-16">
          <div className="text-5xl md:text-6xl font-dancing font-bold mb-4 text-comfort-accent">
            Depoimentos
          </div>
          <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-comfort-text mb-6">
            O que nossos pacientes dizem
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-comfort-accent to-comfort-warm mx-auto rounded-full"></div>
        </header>

        <div className="max-w-4xl mx-auto">
          <InteractiveCard className="p-8 md:p-10">
            <div className="relative min-h-[300px] flex flex-col justify-between">
              <div className="absolute -top-2 -left-2 text-comfort-pearl">
                <Quote className="w-16 h-16" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>
                
                <blockquote className="text-comfort-text font-poppins text-lg md:text-xl leading-relaxed mb-6 font-light">
                  &ldquo;{testimonials[currentIndex].comment}&rdquo;
                </blockquote>
                
                <div className="border-t border-comfort-pearl pt-6">
                  <h4 className="font-poppins font-semibold text-comfort-text text-lg">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-comfort-accent font-poppins font-medium">
                    {testimonials[currentIndex].service}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between mt-8">
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex 
                          ? "bg-comfort-accent w-8" 
                          : "bg-gray-300 hover:bg-comfort-pearl"
                      }`}
                      aria-label={`Ver depoimento ${index + 1}`}
                    />
                  ))}
                </div>
                
                <div className="flex space-x-2">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 rounded-full bg-comfort-pearl hover:bg-comfort-blush text-comfort-text-muted hover:text-comfort-accent transition-all duration-300"
                    aria-label="Depoimento anterior"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-2 rounded-full bg-comfort-pearl hover:bg-comfort-blush text-comfort-text-muted hover:text-comfort-accent transition-all duration-300"
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
    </section>
  )
}

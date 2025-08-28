"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
import { useRouter } from "next/navigation"
import { CalendarIcon, X, Heart } from 'lucide-react'
import { Calendar } from "react-calendar"
import type { CalendarProps } from "react-calendar"
import "react-calendar/dist/Calendar.css"
import { InteractiveCard } from "./ui/interactive-card"

type Value = CalendarProps["value"]

interface FormData {
  nome: string
  dataAgendamento: Date | null
  hasCadastro: boolean | null
}

export function FaixaContato() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    dataAgendamento: new Date(),
    hasCadastro: null,
  })
  const [dataInvalida, setDataInvalida] = useState(false)

  const today = useMemo(() => {
    const date = new Date()
    date.setHours(0, 0, 0, 0)
    return date
  }, [])

  const handleOpen = useCallback(() => setIsOpen(true), [])
  const handleClose = useCallback(() => {
    setIsOpen(false)
    setFormData({
      nome: "",
      dataAgendamento: new Date(),
      hasCadastro: null,
    })
    setDataInvalida(false)
  }, [])

  // Removido fluxo de WhatsApp: direcionar para Login/Cadastro conforme seleção

  // CTA: Se o usuário indicar que tem cadastro, enviar para /login; se não, para /cadastro
  const handlePrimaryCTA = useCallback(() => {
    if (formData.hasCadastro === true) {
      router.push("/login")
    } else if (formData.hasCadastro === false) {
      router.push("/cadastro")
    } else {
      // Se não escolheu ainda, abre o modal para escolher
      setIsOpen(true)
    }
  }, [formData.hasCadastro, router])

  const handleDateChange = useCallback(
    (value: Value) => {
      let selectedDate: Date | null = null

      if (Array.isArray(value)) {
        selectedDate = value[0] instanceof Date ? value[0] : null
      } else {
        selectedDate = value as Date | null
      }

      if (selectedDate) {
        const dateToCheck = new Date(selectedDate)
        dateToCheck.setHours(0, 0, 0, 0)

        if (dateToCheck < today) {
          setDataInvalida(true)
        } else {
          setDataInvalida(false)
          setFormData((prev) => ({ ...prev, dataAgendamento: selectedDate }))
        }
      }
    },
    [today],
  )

  const updateFormData = useCallback((field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }, [])

  const isFormValid = useMemo(() => {
    if (dataInvalida || !formData.dataAgendamento) return false
    if (formData.hasCadastro === false && !formData.nome.trim()) return false
    return true
  }, [formData, dataInvalida])

  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest(".modal-content")) {
        handleClose()
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleEscape)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen, handleClose])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <section className="flex flex-col items-center justify-center py-16" aria-label="Agendamento de consultas">
      <div className="text-center mb-12">
        <div className="text-5xl md:text-6xl font-dancing font-bold mb-6 text-comfort-accent">
          Agende sua consulta
        </div>
        <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-comfort-text mb-6">Cuidado especial para seus pés</h2>
        <p className="font-poppins font-light text-comfort-text-muted leading-relaxed text-lg max-w-2xl mx-auto mb-8">
          Escolha a data ideal para seu atendimento personalizado. Nossa equipe está pronta para oferecer o melhor
          cuidado em um ambiente acolhedor e relaxante.
        </p>
        <div className="flex items-center justify-center gap-2 mb-8">
          <Heart className="text-comfort-accent animate-pulse" size={20} />
          <span className="font-poppins font-light text-comfort-text-muted">Mais de 1000 clientes satisfeitos</span>
          <Heart className="text-comfort-accent animate-pulse" size={20} />
        </div>
      </div>

      <button
        onClick={handlePrimaryCTA}
  className="bg-gradient-to-r from-comfort-accent to-comfort-warm text-white px-12 py-5 rounded-full font-poppins font-medium shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-comfort-accent/30 active:scale-95 text-lg flex items-center gap-4 group"
        aria-label="Abrir formulário de agendamento"
      >
        <CalendarIcon
          size={24}
          className="group-hover:scale-110 transition-transform duration-300"
          aria-hidden="true"
        />
        <span>Agendar Consulta</span>
        <div className="w-2 h-2 bg-white rounded-full group-hover:scale-150 transition-transform duration-300"></div>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-md flex justify-center items-center z-50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <InteractiveCard className="modal-content w-full max-w-lg relative animate-in fade-in zoom-in duration-500">
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 p-3 hover:bg-comfort-pearl rounded-full transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-comfort-accent"
              aria-label="Fechar modal"
            >
              <X size={24} className="text-comfort-text" />
            </button>

            <div className="p-8">
              <header className="text-center mb-8">
                <h2 id="modal-title" className="text-3xl font-dancing font-semibold text-comfort-accent mb-4">
                  Agende sua consulta
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-comfort-accent to-comfort-warm mx-auto rounded-full"></div>
              </header>

              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="flex justify-center">
                  <Calendar
                    onChange={handleDateChange}
                    value={formData.dataAgendamento}
                    className="w-full rounded-2xl border-0 shadow-none"
                    tileClassName={({ date }) => {
                      const isSelected = date.toDateString() === formData.dataAgendamento?.toDateString()
                      const isPast = date < today
                      return `
                        ${isSelected ? "!bg-comfort-accent !text-white shadow-lg" : "hover:bg-comfort-pearl"}
                        ${isPast ? "!text-gray-400 !cursor-not-allowed" : ""}
                        transition-all duration-200 rounded-lg
                      `
                    }}
                    tileDisabled={({ date }) => {
                      const isPast = date < today
                      const isWeekend = [0, 6].includes(date.getDay())
                      return isPast || isWeekend
                    }}
                    locale="pt-BR"
                    minDate={today}
                    prevLabel="‹"
                    nextLabel="›"
                    prev2Label="«"
                    next2Label="»"
                  />
                </div>

        {dataInvalida && (
                  <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
          <p className="text-red-600 text-sm text-center">Não é possível agendar datas no passado ou em fins de semana.</p>
                  </div>
                )}

                {formData.dataAgendamento && !dataInvalida && (
                  <div className="space-y-6">
                    {formData.hasCadastro === null && (
                      <div className="space-y-4">
                        <p className="font-light text-gray-600 text-center">Você já possui cadastro conosco?</p>
                        <div className="grid grid-cols-2 gap-4">
                          <button
                            type="button"
                            onClick={() => updateFormData("hasCadastro", true)}
                            className="bg-green-500 hover:bg-green-600 text-white py-4 rounded-2xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                          >
                            ✓ Já tenho cadastro
                          </button>
                          <button
                            type="button"
                            onClick={() => updateFormData("hasCadastro", false)}
                            className="bg-gradient-to-r from-comfort-accent to-comfort-warm text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-comfort-accent/30 active:scale-95"
                          >
                            ✨ Não tenho cadastro
                          </button>
                        </div>
                      </div>
                    )}

                    {formData.hasCadastro === false && (
                      <div className="space-y-6">
                        <div>
                          <label htmlFor="nome" className="block font-light text-gray-600 mb-3">
                            Nome completo *
                          </label>
                          <input
                            id="nome"
                            type="text"
                            placeholder="Digite seu nome completo"
                            value={formData.nome}
                            onChange={(e) => updateFormData("nome", e.target.value)}
                            className="w-full border border-comfort-pearl p-4 rounded-2xl bg-white/50 backdrop-blur-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-comfort-accent focus:border-comfort-accent transition-all duration-300 font-light text-comfort-text"
                            required
                            autoComplete="name"
                          />
                        </div>
                        <a
                          href="/cadastro"
                          className="w-full inline-flex justify-center bg-comfort-accent hover:bg-comfort-warm text-white py-4 rounded-2xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-comfort-accent"
                        >
                          Criar cadastro
                        </a>
                        <p className="text-sm font-light text-gray-600 text-center">
                          Já possui cadastro?{" "}
                          <button
                            type="button"
                            onClick={() => updateFormData("hasCadastro", true)}
                            className="text-comfort-accent hover:text-comfort-warm underline font-medium transition-colors duration-300"
                          >
                            Clique aqui
                          </button>
                        </p>
                      </div>
                    )}

                    {formData.hasCadastro === true && (
                      <div className="space-y-6">
                        <a
                          href="/login"
                          className="w-full inline-flex justify-center bg-comfort-accent hover:bg-comfort-warm text-white py-4 rounded-2xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-comfort-accent"
                        >
                          Fazer login
                        </a>

                        <p className="text-sm font-light text-gray-600 text-center">
                          Não possui cadastro?{" "}
                          <button
                            type="button"
                            onClick={() => updateFormData("hasCadastro", false)}
                            className="text-comfort-accent hover:text-comfort-warm underline font-medium transition-colors duration-300"
                          >
                            Clique aqui
                          </button>
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </form>
            </div>
          </InteractiveCard>
        </div>
      )}
    </section>
  )
}

"use client"

import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import { addBusinessDays, todayStart } from "@/lib/date-utils"

type Apt = {
  id: string
  service: string
  professional: string | null
  date: string
  time: string
  status: string
}

export default function UsuarioAgendamentosPage() {
  const [items, setItems] = useState<Apt[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string>("")

  const fetchItems = async () => {
    try {
      setLoading(true)
      const res = await fetch("/api/agendamentos", { cache: "no-store" })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error || "Erro ao carregar agendamentos.")
      setItems(json.items || [])
    } catch (e: any) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchItems()
  }, [])

  const canCancel = (apt: Apt) => {
    const d = new Date(apt.date + "T00:00:00")
    const limit = addBusinessDays(todayStart(), 3)
    return d >= limit
  }

  const onCancel = async (id: string) => {
    const apt = items.find(i => i.id === id)
    if (!apt) return
    if (!canCancel(apt)) {
      alert("Cancelamentos só são permitidos com 3 dias úteis de antecedência.")
      return
    }
    if (!confirm("Deseja realmente cancelar este agendamento?")) return
    const res = await fetch(`/api/agendamentos/${id}`, { method: "DELETE" })
    if (!res.ok) {
      const j = await res.json().catch(()=>({}))
      alert(j.error || "Erro ao cancelar.")
      return
    }
    fetchItems()
  }

  const onReschedule = async (id: string) => {
    // Simples stub: redirecionar para página de agendar com um parâmetro (poderíamos implementar um modal)
    window.location.href = "/usuario/agendar?from=" + encodeURIComponent(id)
  }

  if (loading) return <div>Carregando…</div>

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-comfort-text">Meus agendamentos</h1>
        <Link href="/usuario/agendar" className="text-comfort-accent hover:text-comfort-warm">
          Novo agendamento
        </Link>
      </div>
      {error && <div className="text-red-600 text-sm">{error}</div>}
      <div className="space-y-3">
        {items.map((apt) => (
          <div key={apt.id} className="rounded-lg border bg-white p-4">
            <div className="flex justify-between">
              <div>
                <p className="font-medium text-comfort-text">{apt.service}</p>
                <p className="text-sm text-comfort-text-muted">Profissional: {apt.professional || "—"}</p>
                <p className="text-sm text-comfort-text-muted">
                  {apt.date} às {apt.time}
                </p>
              </div>
              <div className="text-sm text-comfort-text-muted">{apt.status}</div>
            </div>
            <div className="mt-3 flex gap-3">
              <button onClick={() => onReschedule(apt.id)} className="text-sm text-comfort-accent">Remarcar</button>
              <button onClick={() => onCancel(apt.id)} className="text-sm text-red-600">Cancelar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

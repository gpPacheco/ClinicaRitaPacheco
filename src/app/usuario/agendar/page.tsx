"use client"

import { useMemo, useState, useEffect } from "react"
import { isWeekend } from "@/lib/date-utils"
import { useRouter } from "next/navigation"

export default function UsuarioAgendarPage() {
  const today = useMemo(() => {
    const d = new Date()
    d.setHours(0, 0, 0, 0)
    return d
  }, [])

  const [date, setDate] = useState<string>("")
  const [time, setTime] = useState<string>("")
  const [busyTimes, setBusyTimes] = useState<string[]>([])
  const [error, setError] = useState<string>("")
  const router = useRouter()

  const validate = (dStr: string): string | null => {
    if (!dStr) return "Escolha uma data."
    const d = new Date(dStr + "T00:00:00")
    d.setHours(0, 0, 0, 0)
    if (d < today) return "Não é possível agendar datas no passado."
    const dow = d.getDay()
    if (dow === 0 || dow === 6) return "Não é possível agendar em sábados ou domingos."
    return null
  }

  const onDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value
    setDate(v)
    const msg = validate(v)
    setError(msg || "")
    // busca horários ocupados para essa data
    if (!msg) fetchBusyTimes(v)
  }

  const fetchBusyTimes = async (d: string) => {
    if (!d) return setBusyTimes([])
    try {
      const res = await fetch(`/api/agendamentos/availability?date=${d}`)
      const json = await res.json()
      if (!res.ok) throw new Error(json.error || "Erro ao carregar disponibilidade")
      setBusyTimes(json.times || [])
    } catch (e: any) {
      // falha silenciosa: manter lista vazia
      setBusyTimes([])
    }
  }

  const [service, setService] = useState("Podologia Geriátrica")
  const [professional, setProfessional] = useState("Rita Pacheco")
  const [notes, setNotes] = useState("")
  const [submitMsg, setSubmitMsg] = useState<string>("")
  const [submitting, setSubmitting] = useState(false)

  const onSubmit = async () => {
    setSubmitMsg("")
    if (error || !date || !time) return
    // Validação extra: não enviar finais de semana
    const d = new Date(date + "T00:00:00")
    if (isWeekend(d)) {
      setError("Não é possível agendar em sábados ou domingos.")
      return
    }
    // valida horário no cliente também
    const timeRegex = /^([0-1]\d|2[0-3]):([0-5]\d)$/
    if (!timeRegex.test(String(time))) {
      setError("Formato de horário inválido.")
      return
    }
    const [hh, mm] = String(time).split(":").map(Number)
    const minutes = hh * 60 + mm
    const inMorning = minutes >= (8 * 60) && minutes < (12 * 60 + 0)
    const inAfternoon = minutes >= (13 * 60) && minutes <= (18 * 60)
    if (!(inMorning || inAfternoon)) {
      setError("Horário fora do expediente (08:00-12:00, 13:00-18:00).")
      return
    }
    // checa se o horário está ocupado
    if (busyTimes.includes(time)) {
      setError("Horário já reservado, escolha outro horário.")
      return
    }
    setSubmitting(true)
    try {
      const res = await fetch("/api/agendamentos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service,
          professional,
          date,
          time,
          user_notes: notes,
        }),
      })
      const json = await res.json()
      if (!res.ok) {
        if (res.status === 409) throw new Error(json.error || "Horário já reservado.")
        throw new Error(json.error || "Falha ao agendar.")
      }
      // redireciona para lista de agendamentos
      router.push("/usuario/agendamentos")
    } catch (e: any) {
      setSubmitMsg(e.message)
    } finally {
      setSubmitting(false)
    }
  }

  useEffect(()=>{
    // carregar horários ocupados quando a data for setada inicialmente
    if (date) fetchBusyTimes(date)
  },[date])

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold text-comfort-text">Agendar consulta</h1>
      <form className="space-y-4 bg-white border rounded-lg p-4" onSubmit={(e)=>{e.preventDefault(); onSubmit();}}>
        <div>
          <label className="block text-sm text-comfort-text">Serviço</label>
          <select className="mt-1 w-full border rounded-md p-2" value={service} onChange={(e)=>setService(e.target.value)}>
            <option value="Podologia Geriátrica">Podologia Geriátrica</option>
            <option value="Podologia Esportiva">Podologia Esportiva</option>
            <option value="Podologia Infantil">Podologia Infantil</option>
            <option value="Spa dos pés">Spa dos pés</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-comfort-text">Profissional</label>
          <select className="mt-1 w-full border rounded-md p-2" value={professional} onChange={(e)=>setProfessional(e.target.value)}>
            <option value="Rita Pacheco">Rita Pacheco</option>
            <option value="Equipe">Equipe</option>
          </select>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-comfort-text">Data</label>
            <input
              type="date"
              className="mt-1 w-full border rounded-md p-2"
              value={date}
              min={today.toISOString().slice(0,10)}
              onChange={onDateChange}
            />
            {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
          </div>
          <div>
            <label className="block text-sm text-comfort-text">Hora</label>
            <input type="time" className="mt-1 w-full border rounded-md p-2" value={time} onChange={(e)=>setTime(e.target.value)} />
            {busyTimes.length>0 && date && (
              <p className="text-sm text-gray-600 mt-1">Horários já ocupados nesta data: {busyTimes.join(", ")}</p>
            )}
          </div>
        </div>
        <div>
          <label className="block text-sm text-comfort-text">Observações</label>
          <textarea className="mt-1 w-full border rounded-md p-2" rows={3} value={notes} onChange={(e)=>setNotes(e.target.value)} />
        </div>
        {submitMsg && <div className="text-sm mt-1 {submitMsg.startsWith('Agendamento') ? 'text-green-600' : 'text-red-600'}">{submitMsg}</div>}
        <button aria-label="Confirmar agendamento" disabled={!!error || !date || !time || submitting} className="bg-comfort-accent hover:bg-comfort-warm disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-md px-4 py-2 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" /></svg>
          {submitting ? "Agendando..." : "Confirmar e ver meus agendamentos"}
        </button>
      </form>
    </div>
  )
}

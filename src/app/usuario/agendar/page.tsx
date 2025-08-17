"use client"

import { useMemo, useState } from "react"
import { isWeekend } from "@/lib/date-utils"

export default function UsuarioAgendarPage() {
  const today = useMemo(() => {
    const d = new Date()
    d.setHours(0, 0, 0, 0)
    return d
  }, [])

  const [date, setDate] = useState<string>("")
  const [time, setTime] = useState<string>("")
  const [error, setError] = useState<string>("")

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
      if (!res.ok) throw new Error(json.error || "Falha ao agendar.")
      setSubmitMsg("Agendamento criado com sucesso!")
      // Opcional: redirecionar para /usuario/agendamentos
      // window.location.href = "/usuario/agendamentos"
    } catch (e: any) {
      setSubmitMsg(e.message)
    } finally {
      setSubmitting(false)
    }
  }

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
          </div>
        </div>
        <div>
          <label className="block text-sm text-comfort-text">Observações</label>
          <textarea className="mt-1 w-full border rounded-md p-2" rows={3} value={notes} onChange={(e)=>setNotes(e.target.value)} />
        </div>
        {submitMsg && <div className="text-sm mt-1 {submitMsg.startsWith('Agendamento') ? 'text-green-600' : 'text-red-600'}">{submitMsg}</div>}
        <button disabled={!!error || !date || !time || submitting} className="bg-comfort-accent hover:bg-comfort-warm disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-md px-4 py-2">
          Confirmar agendamento
        </button>
      </form>
    </div>
  )
}

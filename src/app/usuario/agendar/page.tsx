"use client"

import { useMemo, useState, useEffect, useCallback } from "react"
import { isWeekend, todayStart, formatDate, parseLocalYYYYMMDD, toLocalYYYYMMDD } from "@/lib/date-utils"
import { useRouter } from "next/navigation"
import { Calendar } from "react-calendar"
import type { CalendarProps } from "react-calendar"
import "react-calendar/dist/Calendar.css"
import { InteractiveCard } from "@/components/ui/interactive-card"

export default function UsuarioAgendarPage() {
  const router = useRouter()
  const today = useMemo(() => {
    const d = new Date()
    d.setHours(0, 0, 0, 0)
    return d
  }, [])

  const [date, setDate] = useState<string>(toLocalYYYYMMDD(today))
  const [time, setTime] = useState<string>("")
  const [busyTimes, setBusyTimes] = useState<string[]>([])
  const [availableTimes, setAvailableTimes] = useState<string[]>([])
  const [error, setError] = useState<string>("")

  // Gera slots de 30 minutos no expediente: 08:00-12:30 e 13:30-17:30
  const generateSlots = useMemo((): string[] => {
    const slots: string[] = []
    const push = (h:number, m:number)=> slots.push(String(h).padStart(2,'0')+":"+String(m).padStart(2,'0'))
    for (let h=8; h<=11; h++) { push(h,0); push(h,30) }
    push(12,0); push(12,30)
    push(13,30)
    for (let h=14; h<=17; h++) { push(h,0); push(h,30) }
    return Array.from(new Set(slots)).sort()
  }, [])

  const fetchBusyTimes = useCallback(async (d: string) => {
    if (!d) return setBusyTimes([])
    try {
      const res = await fetch(`/api/agendamentos/availability?date=${d}`)
      const json = await res.json()
      if (!res.ok) throw new Error(json.error || "Erro ao carregar disponibilidade")
      const busy: string[] = json.times || []
      setBusyTimes(busy)
      // calcular disponíveis
      let avail = generateSlots.filter(s => !busy.includes(s))

      // se a data for hoje, remover horários já passados
      const todayIso = toLocalYYYYMMDD(todayStart())
        if (d === todayIso) {
        const now = new Date()
        const nowMinutes = now.getHours()*60 + now.getMinutes()
        const slotToMinutes = (slot: string) => {
          const [hh, mm] = slot.split(":").map(Number)
          return hh*60 + mm
        }
        avail = avail.filter(s => slotToMinutes(s) > nowMinutes)
      }

      setAvailableTimes(avail)
    } catch (e:any) {
      setBusyTimes([])
      setAvailableTimes(generateSlots)
    }
  }, [generateSlots])

  const [service, setService] = useState("Podologia Geriátrica")
  const [notes, setNotes] = useState("")
  const [submitMsg, setSubmitMsg] = useState<string>("")
  const [submitting, setSubmitting] = useState(false)

  const validate = (dStr: string): string | null => {
    if (!dStr) return "Escolha uma data."
  const d = parseLocalYYYYMMDD(dStr)
  if (!d) return "Formato de data inválido."
    if (d < today) return "Não é possível agendar datas no passado."
    const dow = d.getDay()
    if (dow === 0 || dow === 6) return "Não é possível agendar em sábados ou domingos."
    return null
  }

  const onDateChange = (value: CalendarProps["value"]) => {
    const d = Array.isArray(value) ? value[0] as Date : value as Date
    if (!d) return
  const iso = toLocalYYYYMMDD(d)
  setDate(iso)
    const msg = validate(iso)
    setError(msg || "")
    if (!msg) fetchBusyTimes(iso)
  }

  const onSubmit = async () => {
    setSubmitMsg("")
    if (error || !date || !time) return
  const d = parseLocalYYYYMMDD(date)
  if (!d) { setError('Data inválida'); return }
  if (isWeekend(d)) {
      setError("Não é possível agendar em sábados ou domingos.")
      return
    }
    const timeRegex = /^([0-1]\d|2[0-3]):([0-5]\d)$/
    if (!timeRegex.test(String(time))) {
      setError("Formato de horário inválido.")
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
      router.push("/usuario/agendamentos")
    } catch (e: any) {
      setSubmitMsg(e.message)
    } finally {
      setSubmitting(false)
    }
  }

  useEffect(()=>{
    if (date) fetchBusyTimes(date)
  },[date, fetchBusyTimes])

  // Fechar modal ao clicar fora ou pressionar Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('.modal-content')) {
        router.push('/usuario/agendamentos')
      }
    }
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        router.push('/usuario/agendamentos')
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [router])

  // Controlar overflow do body enquanto modal estiver aberto
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = 'unset' }
  }, [])

  return (
    <div>
      <div className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-50 p-4">
        <InteractiveCard className="modal-content w-full max-w-md sm:max-w-lg relative animate-in fade-in zoom-in duration-300 max-h-[90vh] overflow-auto">
          <div className="p-4 sm:p-6">
            <header className="text-center mb-4">
              <h2 className="text-2xl font-poppins font-semibold text-comfort-accent">Agendar consulta</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-comfort-accent to-comfort-warm mx-auto rounded-full mt-2"></div>
            </header>

            <div className="space-y-4">

                <div>
                  <label className="block text-sm mb-2">Serviço</label>
                  <select className="mt-1 w-full border rounded-md p-2" value={service} onChange={(e)=>setService(e.target.value)}>
                    <option value="Podologia Geriátrica">Podologia Geriátrica</option>
                    <option value="Podologia Esportiva">Podologia Esportiva</option>
                    <option value="Podologia Infantil">Podologia Infantil</option>
                    <option value="Spa dos pés">Spa dos pés</option>
                  </select>
                </div>

              <div className="bg-white/70 backdrop-blur-md rounded-2xl p-4 lg:flex lg:justify-center md:flex md:justify-center">
                <div className="w-full lg:max-w-md flex justify-center">
                <Calendar
                  onChange={onDateChange}
                  value={parseLocalYYYYMMDD(date) || new Date()}
                  className="w-full rounded-2xl border-0 shadow-none"
                  tileClassName={({ date: d }) => {
                    const selectedDate = parseLocalYYYYMMDD(date) || new Date()
                    const isSelected = d.toDateString() === selectedDate.toDateString()
                    const isPast = d < today
                    return ` ${isSelected ? "!bg-comfort-accent !text-white shadow-lg" : "hover:bg-comfort-pearl"} ${isPast ? "!text-gray-400 !cursor-not-allowed" : ""} transition-all duration-150 rounded-lg`
                  }}
                  tileDisabled={({ date: d }) => {
                    const isPast = d < today
                    const weekend = [0,6].includes(d.getDay())
                    return isPast || weekend
                  }}
                  locale="pt-BR"
                  minDate={today}
                />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2">Horários disponíveis</label>
                <select value={time} onChange={(e)=>setTime(e.target.value)} className="w-full border rounded p-2 bg-white">
                  <option value="" disabled>Selecione um horário</option>
                  {availableTimes.length===0 && <option value="" disabled>Nenhum horário disponível</option>}
                  {availableTimes.map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm text-comfort-text">Observações</label>
                <textarea className="mt-1 w-full border rounded-md p-2" rows={3} value={notes} onChange={(e)=>setNotes(e.target.value)} />
              </div>

              {submitMsg && <div className="text-sm mt-1">{submitMsg}</div>}

              <div className="flex gap-2 mt-2 justify-end">
                <button aria-label="Confirmar agendamento" disabled={!!error || !date || !time || submitting} onClick={onSubmit} className="bg-comfort-accent hover:bg-comfort-warm disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-md px-4 py-2 flex items-center gap-2">
                  {submitting ? "Agendando..." : "Confirmar e ver meus agendamentos"}
                </button>
                <button type="button" onClick={()=>router.push('/usuario/agendamentos')} className="bg-gray-200 px-4 py-2 rounded">Fechar</button>
              </div>
            </div>
          </div>
        </InteractiveCard>
      </div>
    </div>
  )
}

"use client"

import Link from "next/link"
import { useEffect, useMemo, useState, useCallback } from "react"
import { addBusinessDays, todayStart, isWeekend } from "@/lib/date-utils"

type Apt = {
  id: string
  service: string
  professional: string | null
  date: string
  time: string
  status: string
}

export default function AgendamentosPage() {
  const [items, setItems] = useState<Apt[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string>("")
  const [toast, setToast] = useState<{msg:string, type:"success"|"error"|"info"} | null>(null)
  const [modal, setModal] = useState<{id:string, date:string, time:string}|null>(null)
  const [modalError, setModalError] = useState<string>("")
  const [modalLoading, setModalLoading] = useState(false)
  const [modalBusyTimes, setModalBusyTimes] = useState<string[]>([])
  const [modalAvailableTimes, setModalAvailableTimes] = useState<string[]>([])
  const [confirmCancel, setConfirmCancel] = useState<{id:string, service?:string}|null>(null)

  // Paginação
  const [page, setPage] = useState(1)
  const pageSize = 5
  const totalPages = Math.ceil(items.length / pageSize)
  const pagedItems = items.slice((page-1)*pageSize, page*pageSize)

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
    if (apt.status === "CANCELLED") {
      setToast({msg: "Agendamento já está cancelado.", type: "info"})
      return
    }
    if (!canCancel(apt)) {
      setToast({msg:"Cancelamentos só são permitidos com 3 dias úteis de antecedência.",type:"error"})
      return
    }
    // abrir modal de confirmação
    setConfirmCancel({ id, service: apt.service })
  }

  const handleConfirmCancel = async (id: string) => {
    setConfirmCancel(null)
    try {
      const res = await fetch(`/api/agendamentos/${id}`, { method: "DELETE" })
      if (!res.ok) {
        const j = await res.json().catch(()=>({}))
        setToast({msg: j.error || "Erro ao cancelar.", type: "error"})
        return
      }
      setToast({msg: "Agendamento cancelado com sucesso.", type: "success"})
      fetchItems()
    } catch (e: any) {
      setToast({msg: e.message || "Erro ao cancelar.", type: "error"})
    }
  }

  const onReschedule = (id: string, date: string, time: string) => {
    const apt = items.find(i => i.id === id)
    if (!apt) return
    if (apt.status === "CANCELLED") {
      setToast({msg: "Agendamento cancelado e não pode ser alterado.", type: "info"})
      return
    }
    setModal({id, date, time})
    setModalError("")
  // reset modal availability states
  setModalBusyTimes([])
  setModalAvailableTimes([])
  }

  const handleModalSubmit = async () => {
    if (!modal) return
    setModalLoading(true)
    setModalError("")
    // Validação
    const d = new Date(modal.date + "T00:00:00")
    if (d < todayStart()) {
      setModalError("Não é possível remarcar para datas no passado.")
      setModalLoading(false)
      return
    }
    if (isWeekend(d)) {
      setModalError("Não é possível remarcar para sábados ou domingos.")
      setModalLoading(false)
      return
    }
    if (!modal.time) {
      setModalError("Escolha o horário.")
      setModalLoading(false)
      return
    }
    try {
      const res = await fetch(`/api/agendamentos/${modal.id}`, {
        method: "PATCH",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({date: modal.date, time: modal.time})
      })
      const json = await res.json()
      if (!res.ok) {
        if (res.status === 409) throw new Error(json.error || "Horário já reservado.")
        throw new Error(json.error || "Falha ao remarcar.")
      }
      setToast({msg:"Agendamento remarcado com sucesso!",type:"success"})
      setModal(null)
      setModalBusyTimes([])
      setModalAvailableTimes([])
      fetchItems()
    } catch(e:any) {
      setModalError(e.message)
    } finally {
      setModalLoading(false)
    }
  }

  // Gera slots de 30 minutos no expediente
  const generateSlots = useMemo((): string[] => {
    const slots: string[] = []
    const push = (h:number, m:number)=> slots.push(String(h).padStart(2,'0')+":"+String(m).padStart(2,'0'))
    for (let h=8; h<=11; h++) { push(h,0); push(h,30) }
    for (let h=13; h<=18; h++) { push(h,0); if (h !== 18) push(h,30) }
    return slots
  }, [])

  const fetchModalAvailability = useCallback(async (dateStr: string, currentTime?: string) => {
    if (!dateStr) return setModalAvailableTimes([])
    try {
      const res = await fetch(`/api/agendamentos/availability?date=${dateStr}`)
      const json = await res.json()
      if (!res.ok) throw new Error(json.error || 'Erro ao buscar disponibilidade')
      let busy: string[] = json.times || []
      // permitir o próprio horário atual do agendamento ser selecionado novamente
      if (currentTime) {
        busy = busy.filter(t => t !== currentTime)
      }
      setModalBusyTimes(busy)
      const avail = generateSlots.filter(s => !busy.includes(s))
      setModalAvailableTimes(avail)
    } catch (e:any) {
      setModalBusyTimes([])
      setModalAvailableTimes(generateSlots)
    }
  }, [generateSlots])

  // auto dismiss toast
  useEffect(() => {
    if (!toast) return
    const id = setTimeout(() => setToast(null), 4000)
    return () => clearTimeout(id)
  }, [toast])

  // quando abrir modal, buscar disponibilidade para a data atual do agendamento
  useEffect(()=>{
    if (!modal) return
    fetchModalAvailability(modal.date, modal.time)
  },[modal, fetchModalAvailability])

  if (loading) return <div>Carregando…</div>

  // Badge de status
  const statusBadge = (status: string) => {
    const map: Record<string, string> = {
      CONFIRMED: "bg-green-100 text-green-700",
      PENDING: "bg-yellow-100 text-yellow-700",
      CANCELLED: "bg-red-100 text-red-700",
      default: "bg-gray-100 text-gray-700"
    }
    return <span className={`px-2 py-1 rounded text-xs font-semibold ${map[status]||map.default}`}>{status}</span>
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-comfort-text">Meus agendamentos</h1>
        <Link href="/usuario/agendar" className="inline-flex items-center gap-2 bg-comfort-accent text-white px-3 py-2 rounded hover:bg-comfort-warm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
          Novo agendamento
        </Link>
      </div>
      {toast && (
        <div className={`fixed top-6 right-6 z-50 px-4 py-2 rounded shadow-lg flex items-center gap-3 ${toast.type==='success'?'bg-green-500 text-white':toast.type==='error'?'bg-red-500 text-white':'bg-gray-700 text-white'}`} role="status">
          <div className="flex-1">{toast.msg}</div>
          <button aria-label="Fechar" onClick={()=>setToast(null)} className="font-bold">✕</button>
        </div>
      )}
      {error && <div className="text-red-600 text-sm">{error}</div>}
      <div className="space-y-3">
        {pagedItems.map((apt) => (
          <div key={apt.id} className="rounded-lg border bg-white p-4">
            <div className="flex justify-between">
              <div>
                <p className="font-medium text-comfort-text">{apt.service}</p>
                <p className="text-sm text-comfort-text-muted">Profissional: {apt.professional || "—"}</p>
                <p className="text-sm text-comfort-text-muted">
                  {apt.date} às {apt.time}
                </p>
              </div>
              <div>{statusBadge(apt.status)}</div>
            </div>
            <div className="mt-3 flex gap-3">
              <button disabled={apt.status === "CANCELLED"} onClick={() => onReschedule(apt.id, apt.date, apt.time)} className={`text-sm ${apt.status === "CANCELLED"?"text-gray-400":"text-comfort-accent"}`}>Remarcar</button>
              <button disabled={apt.status === "CANCELLED"} onClick={() => onCancel(apt.id)} className={`text-sm ${apt.status === "CANCELLED"?"text-gray-400":"text-red-600"}`}>Cancelar</button>
            </div>
          </div>
        ))}
      </div>
      {/* Paginação */}
      {totalPages > 1 && (
        <div className="flex gap-2 justify-center mt-4">
          <button disabled={page===1} onClick={()=>setPage(page-1)} className="px-3 py-1 rounded border bg-white disabled:bg-gray-100">Anterior</button>
          <span className="px-2">Página {page} de {totalPages}</span>
          <button disabled={page===totalPages} onClick={()=>setPage(page+1)} className="px-3 py-1 rounded border bg-white disabled:bg-gray-100">Próxima</button>
        </div>
      )}
  {/* Modal de remarcação */}
      {modal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
            <h2 className="text-lg font-semibold mb-4">Remarcar agendamento</h2>
            <div className="space-y-3">
              <div>
                <label className="block text-sm">Nova data</label>
                <input type="date" className="w-full border rounded p-2" value={modal.date} min={todayStart().toISOString().slice(0,10)} onChange={e=>{ const newDate = e.target.value; setModal(m=>m?{...m,date:newDate}:m); fetchModalAvailability(newDate, modal.time)}} />
              </div>
              <div>
                <label className="block text-sm">Escolha um horário disponível</label>
                <div className="mt-2 grid grid-cols-4 gap-2">
                  {generateSlots.map((s: string) => {
                    const busy = modalBusyTimes.includes(s)
                    const selected = modal.time === s
                    return (
                      <button
                        key={s}
                        type="button"
                        disabled={busy}
                        onClick={()=>setModal(m=>m?{...m,time:s}:m)}
                        className={`px-2 py-1 rounded text-sm border ${busy?"bg-gray-100 text-gray-400 cursor-not-allowed":"bg-white hover:bg-comfort-accent/10"} ${selected?"ring-2 ring-comfort-accent":''}`}
                      >
                        {s}
                      </button>
                    )
                  })}
                </div>
                {modalBusyTimes.length>0 && <p className="text-xs text-gray-600 mt-2">Horários ocupados: {modalBusyTimes.join(', ')}</p>}
              </div>
              {modalError && <div className="text-red-600 text-sm">{modalError}</div>}
            </div>
            <div className="flex gap-2 mt-4">
              <button onClick={handleModalSubmit} disabled={modalLoading} className="bg-comfort-accent text-white px-4 py-2 rounded">Salvar</button>
              <button onClick={()=>{ setModal(null); setModalBusyTimes([]); setModalAvailableTimes([]) }} className="bg-gray-200 px-4 py-2 rounded">Cancelar</button>
            </div>
          </div>
        </div>
      )}
        {/* Modal de confirmação de cancelamento */}
        {confirmCancel && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
              <h2 className="text-lg font-semibold mb-2">Confirmar cancelamento</h2>
              <p className="text-sm text-comfort-text-muted">Deseja cancelar o agendamento: <strong>{confirmCancel.service}</strong>?</p>
              <div className="flex gap-2 mt-4">
                <button onClick={()=>handleConfirmCancel(confirmCancel.id)} className="bg-red-600 text-white px-4 py-2 rounded">Sim, cancelar</button>
                <button onClick={()=>setConfirmCancel(null)} className="bg-gray-200 px-4 py-2 rounded">Voltar</button>
              </div>
            </div>
          </div>
        )}
    </div>
  )
}

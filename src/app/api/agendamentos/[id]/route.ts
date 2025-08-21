import { NextResponse } from "next/server"
import { createSupabaseServerClient } from "@/lib/supabase/server"

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const supabase = createSupabaseServerClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: "Não autenticado" }, { status: 401 })
  const { data, error } = await supabase
    .from("agendamentos")
    .select("*")
    .eq("id", params.id)
    .eq("user_id", user.id)
    .single()
  if (error) return NextResponse.json({ error: error.message }, { status: 404 })
  return NextResponse.json({ item: data })
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const supabase = createSupabaseServerClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: "Não autenticado" }, { status: 401 })
  const updates = await req.json()
  const { date, time } = updates || {}
  if (!date || !time) return NextResponse.json({ error: "date and time required" }, { status: 400 })

  // Busca o agendamento atual e verifica ownership
  const { data: existing, error: fetchErr } = await supabase
    .from("agendamentos")
    .select("id, status, date, time")
    .eq("id", params.id)
    .eq("user_id", user.id)
    .single()
  if (fetchErr || !existing) return NextResponse.json({ error: "Agendamento não encontrado." }, { status: 404 })
  if (existing.status === "CANCELLED") return NextResponse.json({ error: "Agendamento já cancelado e não pode ser alterado." }, { status: 400 })

  // Valida data/hora
  const d = new Date(String(date) + "T00:00:00")
  d.setHours(0, 0, 0, 0)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  if (d < today) return NextResponse.json({ error: "Não é possível agendar datas no passado." }, { status: 400 })
  const dow = d.getDay()
  if (dow === 0 || dow === 6) return NextResponse.json({ error: "Não é possível agendar aos finais de semana." }, { status: 400 })
  const timeRegex = /^([0-1]\d|2[0-3]):([0-5]\d)$/
  if (!timeRegex.test(String(time))) return NextResponse.json({ error: "Formato de horário inválido." }, { status: 400 })
  const [hh, mm] = String(time).split(":").map(Number)
  const minutes = hh * 60 + mm
  const inMorning = minutes >= (8 * 60) && minutes < (12 * 60 + 0)
  const inAfternoon = minutes >= (13 * 60) && minutes <= (18 * 60)
  if (!(inMorning || inAfternoon)) return NextResponse.json({ error: "Horário fora do expediente (08:00-12:00, 13:00-18:00)." }, { status: 400 })

  // Checa conflito com outros agendamentos
  const { data: conflict } = await supabase
    .from("agendamentos")
    .select("id")
    .eq("date", d.toISOString().slice(0,10))
    .eq("time", String(time))
    .neq("id", params.id)
    .neq("status", "CANCELLED")
    .limit(1)
    .single()
  if (conflict) return NextResponse.json({ error: "Horário já agendado." }, { status: 400 })

  const { data, error } = await supabase
    .from("agendamentos")
    .update({ date: d.toISOString().slice(0,10), time: String(time) })
    .eq("id", params.id)
    .eq("user_id", user.id)
    .select("*")
    .single()
  if (error) {
    const msg = (error && (error as any).message) || 'Erro ao atualizar agendamento.'
    if (/(unique|violat)/i.test(msg) || (error as any)?.code === '23505') {
      return NextResponse.json({ error: 'Horário já reservado.' }, { status: 409 })
    }
    return NextResponse.json({ error: msg }, { status: 400 })
  }
  return NextResponse.json({ item: data })
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  const supabase = createSupabaseServerClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: "Não autenticado" }, { status: 401 })

  // Verifica ownership e regra de antecedência já aplicada no cliente; servidor também pode checar disponibilidade
  const { data: existing, error: fetchErr } = await supabase
    .from("agendamentos")
    .select("id, date, status")
    .eq("id", params.id)
    .eq("user_id", user.id)
    .single()
  if (fetchErr || !existing) return NextResponse.json({ error: "Agendamento não encontrado." }, { status: 404 })
  if (existing.status === "CANCELLED") return NextResponse.json({ error: "Agendamento já cancelado." }, { status: 400 })

  const { error } = await supabase
    .from("agendamentos")
    .update({ status: "CANCELLED" })
    .eq("id", params.id)
    .eq("user_id", user.id)

  if (error) return NextResponse.json({ error: error.message }, { status: 400 })
  return NextResponse.json({ ok: true })
}

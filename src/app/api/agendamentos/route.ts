import { NextResponse } from "next/server"
import { createSupabaseServerClient } from "@/lib/supabase/server"

// Lista agendamentos do usuário autenticado
export async function GET() {
  const supabase = createSupabaseServerClient()
  const { data: { user }, error: userError } = await supabase.auth.getUser()
  if (userError || !user) return NextResponse.json({ error: "Não autenticado" }, { status: 401 })

  const { data, error } = await supabase
    .from("agendamentos")
    .select("*")
    .eq("user_id", user.id)
    .order("date", { ascending: true })
    .limit(100)
  if (error) return NextResponse.json({ error: error.message }, { status: 400 })
  return NextResponse.json({ items: data })
}

// Cria agendamento para o usuário
export async function POST(req: Request) {
  const supabase = createSupabaseServerClient()
  const { data: { user }, error: userError } = await supabase.auth.getUser()
  if (userError || !user) return NextResponse.json({ error: "Não autenticado" }, { status: 401 })
  const payload = await req.json()

  // Busca cliente do usuário logado
  const { data: cliente, error: clienteError } = await supabase
    .from("clientes")
    .select("id, name, email, phone")
    .eq("user_id", user.id)
    .single()
  if (clienteError || !cliente) return NextResponse.json({ error: "Perfil do cliente não encontrado." }, { status: 400 })

  const { service, professional, date, time, user_notes } = payload || {}
  if (!service || !date || !time) {
    return NextResponse.json({ error: "Campos obrigatórios: service, date, time." }, { status: 400 })
  }

  // Valida data (não passado e não fim de semana)
  const d = new Date(String(date) + "T00:00:00")
  d.setHours(0, 0, 0, 0)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  if (d < today) return NextResponse.json({ error: "Não é possível agendar datas no passado." }, { status: 400 })
  const dow = d.getDay()
  if (dow === 0 || dow === 6) return NextResponse.json({ error: "Não é possível agendar aos finais de semana." }, { status: 400 })

  // Valida horário comercial: 08:00-12:00 e 13:00-18:00
  const timeRegex = /^([0-1]\d|2[0-3]):([0-5]\d)$/
  if (!timeRegex.test(String(time))) return NextResponse.json({ error: "Formato de horário inválido." }, { status: 400 })
  const [hh, mm] = String(time).split(":").map(Number)
  const minutes = hh * 60 + mm
  const inMorning = minutes >= (8 * 60) && minutes < (12 * 60 + 0)
  const inAfternoon = minutes >= (13 * 60) && minutes <= (18 * 60)
  if (!(inMorning || inAfternoon)) return NextResponse.json({ error: "Horário fora do expediente (08:00-12:00, 13:00-18:00)." }, { status: 400 })

  // Checa conflito: existe agendamento no mesmo date+time que não esteja CANCELLED?
  const { data: conflict, error: conflictError } = await supabase
    .from("agendamentos")
    .select("id")
    .eq("date", d.toISOString().slice(0,10))
    .eq("time", String(time))
    .neq("status", "CANCELLED")
    .limit(1)
    .single()
  if (conflictError && (conflictError as any).code !== "PGRST116") {
    // PGRST116 - no rows, ignore
  }
  if (conflict) return NextResponse.json({ error: "Horário já agendado." }, { status: 400 })

  const insert = {
    user_id: user.id,
    cliente_id: cliente.id,
    service: String(service),
    professional: professional ? String(professional) : null,
    date: d.toISOString().slice(0, 10),
    time: String(time),
    user_notes: user_notes ? String(user_notes) : null,
  }

  const { data, error } = await supabase.from("agendamentos").insert(insert).select("*").single()
  if (error) {
    // tratar violação de constraint UNIQUE (date+time) — código do PostgREST/supabase pode variar
    const msg = (error && (error as any).message) || "Erro ao criar agendamento."
    if (/(unique|violat)/i.test(msg) || (error as any)?.code === '23505') {
      return NextResponse.json({ error: "Horário já reservado." }, { status: 409 })
    }
    return NextResponse.json({ error: msg }, { status: 400 })
  }
  return NextResponse.json({ item: data }, { status: 201 })
}

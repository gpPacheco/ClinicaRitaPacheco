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
  if (error) return NextResponse.json({ error: error.message }, { status: 400 })
  return NextResponse.json({ item: data }, { status: 201 })
}

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
  const insert = { ...payload, user_id: user.id }
  const { data, error } = await supabase.from("agendamentos").insert(insert).select("*").single()
  if (error) return NextResponse.json({ error: error.message }, { status: 400 })
  return NextResponse.json({ item: data }, { status: 201 })
}

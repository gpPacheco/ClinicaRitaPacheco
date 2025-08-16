import { NextResponse } from "next/server"
import { createSupabaseServerClient } from "@/lib/supabase/server"

// Lista clientes do usuário autenticado (RLS faz o filtro por user_id)
export async function GET() {
  const supabase = createSupabaseServerClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: "Não autenticado" }, { status: 401 })
  const { data, error } = await supabase.from("clientes").select("*").order("created_at", { ascending: false }).limit(50)
  if (error) return NextResponse.json({ error: error.message }, { status: 400 })
  return NextResponse.json({ items: data })
}

// Cria cliente para o usuário autenticado (RLS exige user_id = auth.uid())
export async function POST(req: Request) {
  const supabase = createSupabaseServerClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: "Não autenticado" }, { status: 401 })
  const body = await req.json()
  const insert = { ...body, user_id: user.id }
  const { data, error } = await supabase.from("clientes").insert(insert).select("*").single()
  if (error) return NextResponse.json({ error: error.message }, { status: 400 })
  return NextResponse.json({ item: data }, { status: 201 })
}

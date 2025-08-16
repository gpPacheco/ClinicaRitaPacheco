import { NextResponse } from "next/server"
import { createSupabaseServerClient } from "@/lib/supabase/server"

// Cria o registro de cliente após o signUp no cliente (usa sessão atual via cookies)
export async function POST(req: Request) {
  const body = await req.json()
  const { name, email, phone } = body || {}
  if (!name || !email) return NextResponse.json({ error: "Dados inválidos" }, { status: 400 })

  const supabase = createSupabaseServerClient()
  const { data: { user }, error: userError } = await supabase.auth.getUser()
  if (userError || !user) return NextResponse.json({ error: "Não autenticado" }, { status: 401 })

  // Insere cliente vinculado ao usuário logado (RLS valida user_id = auth.uid())
  const { error: insertError } = await supabase.from("clientes").insert({
    user_id: user.id,
    name,
    email,
    phone,
  })
  if (insertError) return NextResponse.json({ error: insertError.message }, { status: 400 })

  return NextResponse.json({ ok: true }, { status: 201 })
}

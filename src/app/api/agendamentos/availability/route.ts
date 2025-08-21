import { NextResponse } from "next/server"
import { createSupabaseServerClient } from "@/lib/supabase/server"

export async function GET(req: Request) {
  const supabase = createSupabaseServerClient()
  const { data: { user }, error: userError } = await supabase.auth.getUser()
  if (userError || !user) return NextResponse.json({ error: "Não autenticado" }, { status: 401 })

  const url = new URL(req.url)
  const date = url.searchParams.get("date")
  if (!date) return NextResponse.json({ error: "Parâmetro date é obrigatório (YYYY-MM-DD)." }, { status: 400 })

  const { data, error } = await supabase
    .from("agendamentos")
    .select("time")
    .eq("date", String(date))
    .neq("status", "CANCELLED")

  if (error) return NextResponse.json({ error: error.message }, { status: 400 })
  const times = (data || []).map((r: any) => r.time)
  return NextResponse.json({ times })
}

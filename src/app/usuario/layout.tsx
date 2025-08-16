import { redirect } from "next/navigation"
import { createSupabaseServerClient } from "@/lib/supabase/server"

export default async function UsuarioLayout({ children }: { children: React.ReactNode }) {
  // Proteção: exige usuário logado para acessar qualquer rota dentro de /usuario
  const supabase = createSupabaseServerClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect("/login")

  return (
    <div className="min-h-screen bg-comfort-cream">
      <main className="max-w-5xl mx-auto px-4 py-8">{children}</main>
    </div>
  )
}

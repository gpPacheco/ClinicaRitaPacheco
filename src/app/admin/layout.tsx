import { redirect } from "next/navigation"
import { createSupabaseServerClient } from "@/lib/supabase/server"

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  // Proteção do admin: exige login e metadado is_admin=true no usuário
  const supabase = createSupabaseServerClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect("/login")

  const isAdmin = (user.user_metadata as any)?.is_admin === true
  if (!isAdmin) redirect("/")

  return (
    <div className="min-h-screen bg-comfort-cream">
      <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
    </div>
  )
}

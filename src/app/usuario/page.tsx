import Link from "next/link"
import { LogoutButton } from "@/components/logout-button"
import { createSupabaseServerClient } from "@/lib/supabase/server"

export default async function UsuarioDashboardPage() {
  const supabase = createSupabaseServerClient()
  const { data: { user } } = await supabase.auth.getUser()
  const firstName = (user?.user_metadata?.name as string | undefined)?.split(" ")[0] || user?.email || "Usuário"

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-comfort-text">Olá, {firstName}</h1>
          <p className="text-sm text-comfort-text-muted">Gerencie seus agendamentos e dados</p>
        </div>
        <LogoutButton />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <Link
          href="/usuario/agendamentos"
          className="rounded-lg border p-6 bg-white hover:bg-comfort-pearl transition-colors"
        >
          <h2 className="font-medium text-comfort-text">Meus agendamentos</h2>
          <p className="text-sm text-comfort-text-muted">Veja, edite e cancele seus horários</p>
        </Link>
        <Link
          href="/usuario/agendar"
          className="rounded-lg border p-6 bg-white hover:bg-comfort-pearl transition-colors"
        >
          <h2 className="font-medium text-comfort-text">Agendar consulta</h2>
          <p className="text-sm text-comfort-text-muted">Escolha o serviço, profissional e horário</p>
        </Link>
      </div>
    </div>
  )
}

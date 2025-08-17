import { createSupabaseServerClient } from "@/lib/supabase/server"

export default async function MinhaContaPage() {
  const supabase = createSupabaseServerClient()
  const { data: { user } } = await supabase.auth.getUser()

  const email = user?.email || ""
  const name = (user?.user_metadata as any)?.name || ""
  const phone = (user?.user_metadata as any)?.phone || ""

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-comfort-text">Minha conta</h1>
      <div className="bg-white border rounded-lg p-4 space-y-3">
        <div>
          <div className="text-sm text-comfort-text-muted">Nome</div>
          <div className="font-medium text-comfort-text">{name || "—"}</div>
        </div>
        <div>
          <div className="text-sm text-comfort-text-muted">E-mail</div>
          <div className="font-medium text-comfort-text">{email}</div>
        </div>
        <div>
          <div className="text-sm text-comfort-text-muted">Telefone</div>
          <div className="font-medium text-comfort-text">{phone || "—"}</div>
        </div>
      </div>
    </div>
  )
}

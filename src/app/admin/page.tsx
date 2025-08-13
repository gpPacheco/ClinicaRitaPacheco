import Link from "next/link"

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-comfort-text">Administração</h1>
      <div className="grid sm:grid-cols-3 gap-4">
        <Link href="/admin/agendamentos" className="rounded-lg border p-6 bg-white hover:bg-comfort-pearl">
          <h2 className="font-medium text-comfort-text">Agendamentos</h2>
          <p className="text-sm text-comfort-text-muted">Gerencie horários e status</p>
        </Link>
        <Link href="/admin/clientes" className="rounded-lg border p-6 bg-white hover:bg-comfort-pearl">
          <h2 className="font-medium text-comfort-text">Clientes</h2>
          <p className="text-sm text-comfort-text-muted">Lista e detalhes</p>
        </Link>
        <Link href="/admin/servicos" className="rounded-lg border p-6 bg-white hover:bg-comfort-pearl">
          <h2 className="font-medium text-comfort-text">Serviços</h2>
          <p className="text-sm text-comfort-text-muted">Catálogo e preços</p>
        </Link>
      </div>
    </div>
  )
}

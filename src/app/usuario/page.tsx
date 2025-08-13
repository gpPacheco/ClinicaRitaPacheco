import Link from "next/link"

export default function UsuarioDashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-comfort-text">Minha área</h1>
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

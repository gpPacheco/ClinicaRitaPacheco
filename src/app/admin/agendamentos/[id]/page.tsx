import type { Appointment } from "@/types"

// Simula fetch
async function getAppointment(id: string): Promise<Appointment> {
  return {
    id,
    userId: "u1",
    service: "Podologia Esportiva",
    professional: "Rita Pacheco",
    date: "2025-08-20",
    time: "10:00",
    datetime: "2025-08-20T10:00:00.000Z",
    status: "CONFIRMED",
    userNotes: "",
    adminNotes: "",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
}

export default async function AdminAgendamentoDetalhePage({ params }: { params: { id: string } }) {
  const apt = await getAppointment(params.id)

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold text-comfort-text">Agendamento #{apt.id}</h1>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="rounded-lg border bg-white p-4">
          <h2 className="font-medium text-comfort-text mb-2">Informações</h2>
          <ul className="text-sm text-comfort-text-muted space-y-1">
            <li>Cliente: {apt.userId}</li>
            <li>Serviço: {apt.service}</li>
            <li>Profissional: {apt.professional}</li>
            <li>Data/Hora: {apt.date} às {apt.time}</li>
            <li>Status: {apt.status}</li>
          </ul>
        </div>
        <form className="rounded-lg border bg-white p-4 space-y-3">
          <h2 className="font-medium text-comfort-text">Anotações do atendimento</h2>
          <textarea className="w-full border rounded-md p-2" rows={6} defaultValue={apt.adminNotes} />
          <div className="flex gap-2">
            <button type="button" className="bg-comfort-accent hover:bg-comfort-warm text-white rounded-md px-4 py-2">
              Salvar notas
            </button>
            <button type="button" className="border rounded-md px-4 py-2">
              Marcar como concluído
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

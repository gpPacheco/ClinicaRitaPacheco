import Link from "next/link"
import type { Appointment } from "@/types"

const mockAppointments: Appointment[] = [
  {
    id: "1",
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
  },
]

export default function UsuarioAgendamentosPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-comfort-text">Meus agendamentos</h1>
        <Link href="/usuario/agendar" className="text-comfort-accent hover:text-comfort-warm">
          Novo agendamento
        </Link>
      </div>

      <div className="space-y-3">
        {mockAppointments.map((apt) => (
          <div key={apt.id} className="rounded-lg border bg-white p-4">
            <div className="flex justify-between">
              <div>
                <p className="font-medium text-comfort-text">{apt.service}</p>
                <p className="text-sm text-comfort-text-muted">Profissional: {apt.professional}</p>
                <p className="text-sm text-comfort-text-muted">
                  {apt.date} às {apt.time}
                </p>
              </div>
              <div className="text-sm text-comfort-text-muted">{apt.status}</div>
            </div>
            <div className="mt-3 flex gap-3">
              <button className="text-sm text-comfort-accent">Remarcar</button>
              <button className="text-sm text-red-600">Cancelar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

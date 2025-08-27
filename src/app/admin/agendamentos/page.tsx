import Link from "next/link"
import type { Appointment } from "@/types"
import { formatDate } from "@/lib/date-utils"

const mockAppointments: Appointment[] = [
  {
    id: "1",
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
  },
]

export default function AdminAgendamentosPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-comfort-text">Agendamentos</h1>
        <div className="text-sm text-comfort-text-muted">Total: {mockAppointments.length}</div>
      </div>

      <div className="space-y-3">
        {mockAppointments.map((apt) => (
          <div key={apt.id} className="rounded-lg border bg-white p-4">
            <div className="flex justify-between">
              <div>
                <p className="font-medium text-comfort-text">{apt.service}</p>
                <p className="text-sm text-comfort-text-muted">Cliente: {apt.userId}</p>
                <p className="text-sm text-comfort-text-muted">Profissional: {apt.professional}</p>
                <p className="text-sm text-comfort-text-muted">
                  {formatDate(apt.date)} às {apt.time} • {apt.status}
                </p>
              </div>
              <Link
                href={`/admin/agendamentos/${apt.id}`}
                className="self-start text-comfort-accent hover:text-comfort-warm"
              >
                Detalhes
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

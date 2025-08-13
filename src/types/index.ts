// Tipos compartilhados do domínio de agendamentos
export type AppointmentStatus = "PENDING" | "CONFIRMED" | "COMPLETED" | "CANCELLED"

export interface Appointment {
  id: string
  userId?: string
  service: string
  professional?: string
  date: string // yyyy-mm-dd
  time: string // HH:mm
  datetime: string // ISO para uso geral
  status: AppointmentStatus
  userNotes?: string
  adminNotes?: string
  createdAt: string
  updatedAt: string
}

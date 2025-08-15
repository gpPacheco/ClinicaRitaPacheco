export type UserRole = "user" | "admin"

export interface UserDoc {
  _id?: string
  name?: string
  email: string
  passwordHash?: string
  image?: string
  role?: UserRole
  createdAt?: string
  updatedAt?: string
}

export interface Cliente {
  _id?: string
  userId?: string
  name: string
  email: string
  phone?: string
  birthDate?: string
  notes?: string
  createdAt?: string
  updatedAt?: string
}
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

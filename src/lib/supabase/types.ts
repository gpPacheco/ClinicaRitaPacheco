// Tipagem gerada do Supabase (substitua por types gerados via CLI quando possível)
export type Json = string | number | boolean | null | { [key: string]: Json } | Json[]

export interface Database {
  public: {
    Tables: {
      clientes: {
        Row: {
          id: string
          user_id: string | null
          name: string
          email: string
          phone: string | null
          birth_date: string | null
          notes: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          name: string
          email: string
          phone?: string | null
          birth_date?: string | null
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: Partial<Database["public"]["Tables"]["clientes"]["Insert"]>
      }
      agendamentos: {
        Row: {
          id: string
          user_id: string | null
          cliente_id: string
          service: string
          professional: string | null
          date: string // yyyy-mm-dd
          time: string // HH:mm
          status: "PENDING" | "CONFIRMED" | "COMPLETED" | "CANCELLED"
          user_notes: string | null
          admin_notes: string | null
          created_at: string
          updated_at: string
        }
        Insert: Partial<Database["public"]["Tables"]["agendamentos"]["Row"]> & {
          cliente_id: string
          service: string
          date: string
          time: string
        }
        Update: Partial<Database["public"]["Tables"]["agendamentos"]["Row"]>
      }
      consultas: {
        Row: {
          id: string
          agendamento_id: string
          professional_notes: string | null
          attachments: Json[] | null
          created_at: string
          updated_at: string
        }
        Insert: Partial<Database["public"]["Tables"]["consultas"]["Row"]> & {
          agendamento_id: string
        }
        Update: Partial<Database["public"]["Tables"]["consultas"]["Row"]>
      }
    }
  }
}

//import { type Database } from "./types"
import { createSupabaseServerClient } from "./server"

// Regras de acesso para tabelas do sistema (clientes, agendamentos, consultas)
export const tables = {
  clientes: "clientes" as const,
  agendamentos: "agendamentos" as const,
  consultas: "consultas" as const,
}

// Exemplo de função server-side para buscar clientes do usuário autenticado
export async function fetchClientes() {
  const supabase = createSupabaseServerClient()
  const { data, error } = await supabase.from(tables.clientes).select("*").limit(50)
  if (error) throw error
  return data
}

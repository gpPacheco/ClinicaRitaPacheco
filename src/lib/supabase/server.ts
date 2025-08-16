// Helper para criar cliente do Supabase no servidor (App Router)
import { cookies } from "next/headers"
import { createServerClient } from "@supabase/ssr"

export function createSupabaseServerClient() {
  // Lê cookies da request/resposta do Next.js
  const cookieStore = cookies()
  // Cria um cliente vinculado aos cookies (mantém a sessão do usuário)
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set() {
          // O @supabase/ssr cuida da escrita em respostas das rotas/page
        },
        remove() {},
      },
    }
  )
}

// Helper para criar cliente do Supabase no cliente (browser)
import { createBrowserClient } from "@supabase/ssr"

// Retorna um cliente Supabase no browser. Se as variáveis de ambiente públicas
// não estiverem definidas no deploy, evita lançar durante a importação e
// retorna um cliente 'stub' mínimo para prevenir crashs no bundle.
export function createSupabaseBrowserClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) {
    // Mensagem clara para o console do deploy
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line no-console
      console.error(
        '@supabase/ssr: Supabase public env vars are missing. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in your deployment environment. See https://supabase.com/dashboard/project/_/settings/api'
      )
    }
    // Retorna um stub mínimo para evitar chamadas nulas. Se a app tentar usar
    // métodos que não existem, ela deverá tratar os retornos (null/empty).
    const stub: any = {
      auth: {
        getSession: async () => ({ data: { session: null } }),
        onAuthStateChange: (_cb: any) => ({ data: null }),
        signOut: async () => ({ error: null }),
      },
      from: () => ({ select: async () => ({ data: [], error: null }) }),
      // permite chamadas básicas sem quebrar o runtime
    }
    return stub
  }

  return createBrowserClient(url, key)
}

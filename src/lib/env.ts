// Configurações de ambiente centralizadas.
// Observação: Autenticação e banco são via Supabase. Variáveis do NextAuth foram descontinuadas.
export const env = {
  // URL pública do site
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",

  // [DESCONTINUADO] Mantido comentado para referência do que havia antes com NextAuth
  // NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  // NEXTAUTH_URL: process.env.NEXTAUTH_URL,

  // Supabase (autenticação + banco)
  SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
  SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
}

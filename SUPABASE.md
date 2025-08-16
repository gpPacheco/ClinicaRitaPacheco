# Supabase Setup

1) Variáveis de ambiente (crie `.env.local` na raiz):

NEXT_PUBLIC_SUPABASE_URL=... # URL do seu projeto
NEXT_PUBLIC_SUPABASE_ANON_KEY=... # anon key

2) Banco de dados
- No Supabase SQL Editor, rode o conteúdo de `supabase/schema.sql`.
- Ative RLS e políticas conforme no arquivo.

3) Tipos
- Opcional: Gere tipos com a CLI do Supabase e substitua `src/lib/supabase/types.ts`.

4) Autenticação
- Login: form em `src/components/login-form.tsx` usa `supabase.auth.signInWithPassword`.
- Cadastro: form em `src/components/signup-form.tsx` usa `supabase.auth.signUp` + POST `/api/auth/register` para inserir em `clientes`.

5) APIs
- `GET/POST /api/clientes` e `GET/POST /api/agendamentos`, `GET/PATCH/DELETE /api/agendamentos/[id]` usam Supabase e RLS.

6) Proteção de páginas
- Use `createSupabaseServerClient()` em layouts/pages server-side para checar `auth.getUser()` e redirecionar.

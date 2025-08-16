-- Extensões necessárias
create extension if not exists pgcrypto;

-- Esquema Supabase para o sistema de agendamentos
-- Tabela clientes
create table if not exists public.clientes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  name text not null,
  email text not null,
  phone text,
  birth_date date,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create unique index if not exists clientes_email_unique on public.clientes(email);

-- Tabela agendamentos
create table if not exists public.agendamentos (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  cliente_id uuid not null references public.clientes(id) on delete cascade,
  service text not null,
  professional text,
  date date not null,
  time text not null,
  status text not null default 'PENDING',
  user_notes text,
  admin_notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists agendamentos_user_idx on public.agendamentos(user_id, date);

-- Tabela consultas
create table if not exists public.consultas (
  id uuid primary key default gen_random_uuid(),
  agendamento_id uuid not null references public.agendamentos(id) on delete cascade,
  professional_notes text,
  attachments jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- RLS Policies
alter table public.clientes enable row level security;
alter table public.agendamentos enable row level security;
alter table public.consultas enable row level security;

-- Usuário autenticado pode ver/criar seus próprios registros (assumindo que user_id = auth.uid())
drop policy if exists clientes_select on public.clientes;
create policy clientes_select on public.clientes for select using (user_id = auth.uid());
drop policy if exists clientes_insert on public.clientes;
create policy clientes_insert on public.clientes for insert with check (user_id = auth.uid());
drop policy if exists clientes_update on public.clientes;
create policy clientes_update on public.clientes for update using (user_id = auth.uid());

drop policy if exists agendamentos_select on public.agendamentos;
create policy agendamentos_select on public.agendamentos for select using (user_id = auth.uid());
drop policy if exists agendamentos_insert on public.agendamentos;
create policy agendamentos_insert on public.agendamentos for insert with check (user_id = auth.uid());
drop policy if exists agendamentos_update on public.agendamentos;
create policy agendamentos_update on public.agendamentos for update using (user_id = auth.uid());

drop policy if exists consultas_select on public.consultas;
create policy consultas_select on public.consultas for select using (
  exists(select 1 from public.agendamentos a where a.id = agendamento_id and a.user_id = auth.uid())
);
drop policy if exists consultas_insert on public.consultas;
create policy consultas_insert on public.consultas for insert with check (
  exists(select 1 from public.agendamentos a where a.id = agendamento_id and a.user_id = auth.uid())
);
drop policy if exists consultas_update on public.consultas;
create policy consultas_update on public.consultas for update using (
  exists(select 1 from public.agendamentos a where a.id = agendamento_id and a.user_id = auth.uid())
);

-- Trigger simples para updated_at
create or replace function public.set_updated_at() returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

do $$ begin
  if not exists(select 1 from pg_trigger where tgname = 'clientes_set_updated_at') then
    create trigger clientes_set_updated_at before update on public.clientes for each row execute procedure public.set_updated_at();
  end if;
  if not exists(select 1 from pg_trigger where tgname = 'agendamentos_set_updated_at') then
    create trigger agendamentos_set_updated_at before update on public.agendamentos for each row execute procedure public.set_updated_at();
  end if;
  if not exists(select 1 from pg_trigger where tgname = 'consultas_set_updated_at') then
    create trigger consultas_set_updated_at before update on public.consultas for each row execute procedure public.set_updated_at();
  end if;
end $$;

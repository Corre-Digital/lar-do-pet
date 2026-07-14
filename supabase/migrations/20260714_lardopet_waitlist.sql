-- Lista de espera do Lar do Pet (fake door da landing).
-- ATENÇÃO: esta migration roda no Supabase do CORRE TALENT (projeto
-- "Banco de talentos e Site Vagas", iqwxngxspysznmnwswhl, sa-east-1),
-- não num projeto próprio do Lar do Pet. Decisão: reusar o projeto ativo
-- evita criar/acordar outro projeto só para e-mails (mesma receita do Ser+).
-- Aplicada via MCP em 2026-07-14. Versionada aqui como referência.
--
-- Segurança: insert-only para o anon (grant por coluna), sem policy nem
-- grant de SELECT: e-mails ilegíveis pela API, só service_role lê.

create table public.lardopet_waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null check (email ~* '^[^@[:space:]]+@[^@[:space:]]+\.[^@[:space:]]+$' and char_length(email) <= 320),
  source text not null default 'landing' check (char_length(source) <= 40),
  created_at timestamptz not null default now()
);

comment on table public.lardopet_waitlist is
  'Lista de espera do Lar do Pet (fake door da landing). Insert-only pro anon; leitura so via service_role.';

-- dedup case-insensitive
create unique index lardopet_waitlist_email_uniq on public.lardopet_waitlist (lower(email));

alter table public.lardopet_waitlist enable row level security;

-- anon pode inserir (validação fica nos CHECKs da tabela)
create policy lardopet_waitlist_anon_insert on public.lardopet_waitlist
  for insert to anon with check (true);

-- grants cirúrgicos, escopados SÓ a esta tabela nova
revoke all on table public.lardopet_waitlist from anon, authenticated;
grant insert (email, source) on table public.lardopet_waitlist to anon;

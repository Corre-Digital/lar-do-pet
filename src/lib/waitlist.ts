// Fake door: o navegador insere direto no Supabase (chave anon pública por
// design). Sem servidor nosso: a segurança é RLS + grant por coluna
// INSERT(email, source) na tabela lardopet_waitlist (insert-only; só
// service_role lê). Ver supabase/migrations/20260714_lardopet_waitlist.sql.

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string | undefined
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined

export type WaitlistResult = 'ok' | 'ja-inscrito' | 'invalido' | 'erro'

export async function joinWaitlist(email: string, source: string): Promise<WaitlistResult> {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return 'erro'
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/lardopet_waitlist`, {
      method: 'POST',
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
      },
      body: JSON.stringify({ email: email.trim().toLowerCase(), source }),
    })
    if (res.status === 201) return 'ok'
    if (res.status === 409) return 'ja-inscrito' // unique(lower(email))
    if (res.status === 400) return 'invalido' // CHECK de formato no banco
    return 'erro'
  } catch {
    return 'erro'
  }
}

/** Rola até o form da lista de espera (âncora dos CTAs da página). */
export function scrollToWaitlist() {
  document.getElementById('lista')?.scrollIntoView({ behavior: 'smooth' })
}

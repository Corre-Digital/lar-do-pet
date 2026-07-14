import { useState, type FormEvent } from 'react'
import { Container } from '@/components/ui/ui'
import { Icon } from '@/components/ui/icon'
import { cn } from '@/lib/utils'
import { CTA, WAITLIST } from '@/lib/content'
import { joinWaitlist, type WaitlistResult } from '@/lib/waitlist'

const MSG: Record<Exclude<WaitlistResult, 'ok'>, string> = {
  'ja-inscrito': WAITLIST.jaInscrito,
  invalido: WAITLIST.invalido,
  erro: WAITLIST.erro,
}

export function CtaFinal() {
  const [source, setSource] = useState(WAITLIST.chips[0].source)
  const [email, setEmail] = useState('')
  const [state, setState] = useState<'idle' | 'sending' | 'ok'>('idle')
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (state === 'sending') return
    setError(null)
    setState('sending')
    const result = await joinWaitlist(email, source)
    if (result === 'ok' || result === 'ja-inscrito') {
      setState('ok')
      if (result === 'ja-inscrito') setError(WAITLIST.jaInscrito)
    } else {
      setState('idle')
      setError(MSG[result])
    }
  }

  return (
    <section id="lista" className="scroll-mt-24 py-16 md:py-20">
      <Container>
        <div className="rounded-[28px] bg-teal-500 px-6 py-14 text-center md:px-8">
          <div className="mx-auto max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-teal-100">
              {CTA.frase.toUpperCase()}
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold text-white md:text-[2.75rem]">
              {CTA.title}
            </h2>
            <p className="mt-3 text-lg text-teal-50">{CTA.sub}</p>

            {state === 'ok' && !error ? (
              <p className="mx-auto mt-8 flex max-w-md items-center justify-center gap-2.5 rounded-full bg-white/15 px-6 py-4 text-base font-bold text-white">
                <Icon name="check-circle" size={22} className="shrink-0 text-gold-500" />
                {WAITLIST.ok}
              </p>
            ) : state === 'ok' && error ? (
              <p className="mx-auto mt-8 flex max-w-md items-center justify-center gap-2.5 rounded-full bg-white/15 px-6 py-4 text-base font-bold text-white">
                <Icon name="check-circle" size={22} className="shrink-0 text-gold-500" />
                {error}
              </p>
            ) : (
              <form onSubmit={onSubmit} className="mx-auto mt-8 max-w-md">
                <div className="flex justify-center gap-2">
                  {WAITLIST.chips.map((c) => (
                    <button
                      key={c.source}
                      type="button"
                      onClick={() => setSource(c.source)}
                      className={cn(
                        'rounded-full px-4 py-2 text-sm font-bold transition-colors',
                        source === c.source
                          ? 'bg-white text-teal-700'
                          : 'bg-white/15 text-teal-50 hover:bg-white/25',
                      )}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={WAITLIST.placeholder}
                    aria-label="Seu e-mail"
                    className="h-[54px] w-full flex-1 rounded-full border-0 bg-white px-6 text-base text-ink-900 placeholder:text-ink-500 focus:outline-none focus:ring-4 focus:ring-teal-700/40"
                  />
                  <button
                    type="submit"
                    disabled={state === 'sending'}
                    className="inline-flex h-[54px] shrink-0 items-center justify-center gap-2 rounded-full bg-amber-500 px-7 text-[17px] font-bold text-white shadow-sm transition-colors hover:bg-amber-600 disabled:opacity-60"
                  >
                    <Icon name="paw-print" size={20} />
                    {state === 'sending' ? WAITLIST.sending : WAITLIST.button}
                  </button>
                </div>
                {error && <p className="mt-3 text-sm font-semibold text-gold-300">{error}</p>}
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}

import type { ReactNode } from 'react'
import { Container, Logo } from '@/components/ui/ui'
import { FOOTER } from '@/lib/content'

export interface LegalSection {
  heading: string
  paragraphs: string[]
  bullets?: string[]
}
export interface LegalDoc {
  title: string
  intro: string
  sections: LegalSection[]
}

/** Renderiza texto com marcadores [REVISAR: ...] em destaque amarelo.
 *  As lacunas jurídicas ficam visíveis de propósito até o DPO/jurídico fechar. */
function Rich({ text }: { text: string }): ReactNode {
  const parts = text.split(/(\[REVISAR:[^\]]*\])/g)
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith('[REVISAR:') ? (
          <mark key={i} className="rounded-[6px] bg-gold-300 px-1.5 py-0.5 font-semibold text-ink-900">
            {p}
          </mark>
        ) : (
          p
        ),
      )}
    </>
  )
}

export function LegalPage({ doc, crossLink }: { doc: LegalDoc; crossLink: { href: string; label: string } }) {
  return (
    <div className="min-h-screen bg-cream">
      <header className="border-b border-line bg-cream">
        <Container className="flex h-[68px] items-center">
          <Logo size={36} />
        </Container>
      </header>

      <main>
        <Container className="max-w-[820px] py-12 md:py-16">
          <h1 className="font-display text-4xl font-bold text-ink-900">{doc.title}</h1>
          <p className="mt-3 text-lg leading-relaxed text-ink-700">
            <Rich text={doc.intro} />
          </p>

          {doc.sections.map((s) => (
            <section key={s.heading} className="mt-10">
              <h2 className="font-display text-2xl font-semibold text-ink-900">{s.heading}</h2>
              {s.paragraphs.map((p, i) => (
                <p key={i} className="mt-3 text-base leading-relaxed text-ink-700">
                  <Rich text={p} />
                </p>
              ))}
              {s.bullets && s.bullets.length > 0 && (
                <ul className="mt-3 list-disc space-y-2 pl-6">
                  {s.bullets.map((b, i) => (
                    <li key={i} className="text-base leading-relaxed text-ink-700">
                      <Rich text={b} />
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <div className="mt-12 rounded-lg border border-line bg-white p-6">
            <p className="text-base text-ink-700">
              Leia também: {' '}
              <a href={crossLink.href} className="font-bold text-teal-700 underline underline-offset-4 hover:text-amber-600">
                {crossLink.label}
              </a>
              {' '}· {' '}
              <a href="/" className="font-bold text-teal-700 underline underline-offset-4 hover:text-amber-600">
                voltar ao início
              </a>
            </p>
          </div>
        </Container>
      </main>

      <footer className="border-t border-line bg-cream-deep py-8">
        <Container>
          <p className="text-[13px] text-ink-muted">{FOOTER.copyright}</p>
        </Container>
      </footer>
    </div>
  )
}

export function NotFound() {
  return (
    <div className="grid min-h-screen place-items-center bg-cream px-6">
      <div className="text-center">
        <Logo size={44} className="justify-center" />
        <h1 className="mt-6 font-display text-3xl font-bold text-ink-900">Página não encontrada</h1>
        <p className="mt-3 text-lg text-ink-700">O endereço que você tentou abrir não existe.</p>
        <a
          href="/"
          className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-teal-600 px-6 text-base font-bold text-white transition-colors hover:bg-amber-500"
        >
          Voltar ao início
        </a>
      </div>
    </div>
  )
}

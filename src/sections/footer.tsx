import { Container, Logo } from '@/components/ui/ui'
import { FOOTER } from '@/lib/content'

// Itens do rodapé que já têm página real
const LINKS: Record<string, string> = {
  'Termos de uso': '/termos',
  'Privacidade e LGPD': '/privacidade',
}

export function Footer() {
  return (
    <footer className="bg-cream-deep py-14">
      <Container>
        <div className="grid gap-8 md:grid-cols-[1.4fr_repeat(4,minmax(0,1fr))]">
          <div>
            <Logo size={34} />
            <p className="mt-3 max-w-[260px] text-sm leading-relaxed text-ink-muted">{FOOTER.tagline}</p>
          </div>

          {FOOTER.cols.map((col) => (
            <div key={col.h}>
              <h3 className="text-sm font-bold text-ink-900">{col.h}</h3>
              <div className="mt-3.5 space-y-2.5">
                {col.items.map((i) => (
                  <a key={i} href={LINKS[i] ?? '#'} className="block text-sm text-ink-muted hover:text-teal-700">
                    {i}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-line" />
        <p className="mt-5 text-[13px] text-ink-muted">{FOOTER.copyright}</p>
      </Container>
    </footer>
  )
}

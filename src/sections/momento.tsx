import { Container, SectionHead } from '@/components/ui/ui'
import { Icon } from '@/components/ui/icon'
import { MomentoCard } from '@/components/brand/momento-card'
import { MOMENTO } from '@/lib/content'

export function MomentoDestaque() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Coluna de texto */}
          <div>
            <SectionHead kicker={MOMENTO.kicker} title={MOMENTO.title} />
            <p className="mt-4 text-lg leading-relaxed text-ink-700">{MOMENTO.text}</p>
            <ul className="mt-6 space-y-3">
              {MOMENTO.bullets.map((b) => (
                <li key={b} className="flex items-center gap-2.5">
                  <Icon name="check-circle" size={20} className="shrink-0 text-teal-600" />
                  <span className="text-ink-700">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card Momento do Cuidado */}
          <MomentoCard {...MOMENTO.card} className="mx-auto w-full max-w-[400px]" />
        </div>
      </Container>
    </section>
  )
}

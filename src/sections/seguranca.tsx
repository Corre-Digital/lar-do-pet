import { Container, SectionHead } from '@/components/ui/ui'
import { Icon } from '@/components/ui/icon'
import { SEGURANCA } from '@/lib/content'

export function Seguranca() {
  return (
    <section className="bg-ink-900 py-16 md:py-20">
      <Container>
        <SectionHead dark kicker={SEGURANCA.kicker} title={SEGURANCA.title} sub={SEGURANCA.sub} />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {SEGURANCA.questions.map((q) => (
            <div key={q.q} className="rounded-lg border border-white/10 bg-white/5 p-6">
              <h3 className="font-display text-xl font-semibold text-white">{q.q}</h3>
              <ul className="mt-4 space-y-3">
                {q.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Icon name="check" size={18} className="mt-0.5 shrink-0 text-[#7FC9B6]" />
                    <span className="text-[15px] leading-snug text-teal-100/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

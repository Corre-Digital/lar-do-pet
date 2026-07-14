import { Container, SectionHead } from '@/components/ui/ui'
import { COMO } from '@/lib/content'

export function ComoFunciona() {
  return (
    <section className="bg-teal-50 py-16 md:py-20">
      <Container>
        <SectionHead kicker={COMO.kicker} title={COMO.title} />

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {COMO.steps.map((s, i) => (
            <div key={s.t}>
              <div className="grid h-12 w-12 place-items-center rounded-full bg-teal-600 font-display text-xl font-bold text-white">
                {i + 1}
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink-900">{s.t}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-ink-700">{s.d}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

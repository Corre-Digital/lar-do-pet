import { Container, SectionHead } from '@/components/ui/ui'
import { SERVICOS } from '@/lib/content'

export function Servicos() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <SectionHead kicker={SERVICOS.kicker} title={SERVICOS.title} sub={SERVICOS.sub} />

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICOS.items.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-lg border border-line bg-white shadow-[0_2px_8px_rgba(59,138,124,0.10)]"
            >
              <img src={item.img} alt={item.title} className="aspect-[16/10] w-full object-cover" />
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-ink-900">{item.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-ink-muted">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

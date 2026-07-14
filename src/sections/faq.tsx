import { Container, SectionHead } from '@/components/ui/ui'
import { Icon } from '@/components/ui/icon'
import { FAQ } from '@/lib/content'

export function Faq() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <SectionHead kicker={FAQ.kicker} title={FAQ.title} />

        <div className="mt-8 max-w-3xl space-y-3.5">
          {FAQ.items.map((it) => (
            <div key={it.q} className="rounded-[14px] border border-line bg-white p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-lg font-semibold text-ink-900">{it.q}</h3>
                <Icon name="chevron-down" size={20} className="mt-0.5 shrink-0 text-ink-500" />
              </div>
              <p className="mt-2.5 text-[15px] leading-relaxed text-ink-muted">{it.a}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

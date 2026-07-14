import { Container, SectionHead, Kicker } from '@/components/ui/ui'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { HISTORIAS } from '@/lib/content'

export function Historias() {
  const { feature, testimonials } = HISTORIAS
  return (
    <section className="bg-teal-50 py-16 md:py-20">
      <Container>
        <SectionHead kicker={HISTORIAS.kicker} title={HISTORIAS.title} />

        {/* Feature: vídeo da história */}
        <div className="mt-8 grid overflow-hidden rounded-lg border border-line bg-white lg:grid-cols-2">
          <div className="relative min-h-[240px]">
            <img src={feature.cover} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 grid place-items-center">
              <span className="grid h-16 w-16 place-items-center rounded-full bg-white shadow-lg">
                <Icon name="play" size={26} fill="#2F7064" className="ml-1 text-teal-600" />
              </span>
            </div>
          </div>
          <div className="p-8">
            <Kicker>{feature.kicker}</Kicker>
            <h3 className="mt-2 font-display text-2xl font-bold text-ink-900">{feature.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-700">{feature.sub}</p>
            <div className="mt-5">
              <Button variant="primary" iconLeft="play">{feature.cta}</Button>
            </div>
          </div>
        </div>

        {/* Depoimentos */}
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-lg border border-line bg-white p-7">
              <p className="text-lg leading-relaxed text-ink-700">{`“${t.quote}”`}</p>
              <div className="mt-5 flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                <span>
                  <span className="block font-bold text-ink-900">{t.name}</span>
                  <span className="block text-[13px] text-ink-muted">{t.role}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

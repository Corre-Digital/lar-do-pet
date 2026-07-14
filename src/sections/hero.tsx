import { Container, Badge } from '@/components/ui/ui'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { MomentoCard } from '@/components/brand/momento-card'
import { HERO } from '@/lib/content'
import { scrollToWaitlist } from '@/lib/waitlist'

export function Hero() {
  return (
    <section className="py-12 md:py-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Coluna de texto */}
          <div>
            <Badge icon="shield-check">{HERO.badge}</Badge>
            <h1 className="mt-4 font-display text-[2.5rem] font-bold leading-[1.08] md:text-[3.25rem]">
              <span className="text-ink-900">{HERO.h1a}</span>
              <br />
              <span className="text-teal-500">{HERO.h1b}</span>
            </h1>
            <p className="mt-3 font-display text-2xl font-semibold text-ink-900">{HERO.frase}</p>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-700">{HERO.sub}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {HERO.ctas.map((c) => (
                <Button
                  key={c.label}
                  variant={c.variant}
                  size="lg"
                  iconLeft={c.icon}
                  className="sm:w-auto"
                  onClick={scrollToWaitlist}
                >
                  {c.label}
                </Button>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-5">
              {HERO.stats.map((s) => (
                <div key={s.label} className="flex items-center gap-2.5">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-teal-50 text-teal-700">
                    {s.gold ? (
                      <Icon name="star" size={20} fill="#E7CF6E" className="text-gold-500" />
                    ) : (
                      <Icon name={s.icon} size={20} className="text-teal-700" />
                    )}
                  </span>
                  <span>
                    <span className="block text-lg font-extrabold text-ink-900">{s.num}</span>
                    <span className="block text-[13px] font-medium text-ink-muted">{s.label}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual: foto + card Momento flutuando */}
          <div className="relative mx-auto w-full max-w-[560px]">
            <img
              src={HERO.photo}
              alt="Tutora com o pet no sofá de casa"
              className="aspect-[7/6] w-full rounded-[28px] border-[1.5px] border-line object-cover"
            />
            <MomentoCard
              {...HERO.momento}
              className="absolute -bottom-6 right-3 w-[272px] sm:right-5"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

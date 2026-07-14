import { PUBLICOS } from '@/lib/content'
import { Container, Kicker } from '@/components/ui/ui'
import { Button } from '@/components/ui/button'

export function DoisPublicos() {
  const { tutores, cuidadores } = PUBLICOS
  return (
    <section className="py-16 md:py-20">
      <Container className="grid gap-5 md:grid-cols-2">
        {/* Card tutores (fundo teal) */}
        <div className="rounded-xl bg-teal-600 p-10">
          <Kicker className="text-teal-100">{tutores.kicker}</Kicker>
          <h3 className="mt-3 font-display text-[1.75rem] font-bold text-white">{tutores.title}</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-teal-50">{tutores.text}</p>
          <Button variant="onDark" iconLeft="search" className="mt-6">
            {tutores.cta}
          </Button>
        </div>

        {/* Card cuidadores (fundo branco) */}
        <div className="rounded-xl border-[1.5px] border-line bg-white p-10">
          <Kicker>{cuidadores.kicker}</Kicker>
          <h3 className="mt-3 font-display text-[1.75rem] font-bold text-ink-900">{cuidadores.title}</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-700">{cuidadores.text}</p>
          <Button variant="primary" iconLeft="paw-print" className="mt-6">
            {cuidadores.cta}
          </Button>
        </div>
      </Container>
    </section>
  )
}

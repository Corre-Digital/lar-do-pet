import { Container } from '@/components/ui/ui'
import { Button } from '@/components/ui/button'
import { CTA } from '@/lib/content'

export function CtaFinal() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <div className="rounded-[28px] bg-teal-500 px-8 py-14 text-center">
          <div className="mx-auto max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-teal-100">
              {CTA.frase.toUpperCase()}
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold text-white md:text-[2.75rem]">
              {CTA.title}
            </h2>
            <p className="mt-3 text-lg text-teal-50">{CTA.sub}</p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Button variant="accent" iconLeft="search">
                Encontrar um cuidador
              </Button>
              <Button variant="onDark">Quero ser cuidador</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

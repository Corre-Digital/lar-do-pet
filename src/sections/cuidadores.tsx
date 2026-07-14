import { Container, SectionHead, Chip } from '@/components/ui/ui'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { CUIDADORES } from '@/lib/content'

export function Cuidadores() {
  return (
    <section className="bg-teal-50 py-16 md:py-20">
      <Container>
        <div className="flex items-end justify-between">
          <SectionHead kicker={CUIDADORES.kicker} title={CUIDADORES.title} />
          <a href="#" className="hidden items-center gap-1.5 text-[15px] font-bold text-teal-700 sm:flex">
            {CUIDADORES.verTodos}
            <Icon name="arrow-right" size={16} />
          </a>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {CUIDADORES.items.map((item) => (
            <div key={item.name} className="flex flex-col gap-4 rounded-lg border border-line bg-white p-6">
              {/* Topo: avatar + nome/badge + localização */}
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-teal-100 font-display text-xl font-bold text-teal-700">
                  {item.initial}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-display text-lg font-semibold text-ink-900">{item.name}</span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-teal-50 px-2 py-0.5 text-[11px] font-bold text-teal-700">
                      <Icon name="shield-check" size={12} />
                      Verificada
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[13px] text-ink-muted">
                    <Icon name="map-pin" size={13} className="text-ink-500" />
                    {item.loc}
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1.5 text-sm">
                <Icon name="star" size={16} fill="#E0A45C" className="text-amber-500" />
                <strong className="text-ink-900">{item.rating}</strong>
                <span className="text-ink-muted">
                  · {item.reviews} · {item.note}
                </span>
              </div>

              {/* Serviços */}
              <div className="flex flex-wrap gap-2">
                {item.services.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>

              {/* Rodapé: preço + ação */}
              <div className="flex items-center justify-between">
                <span>
                  <span className="font-display text-xl font-bold text-ink-900">{item.price}</span>
                  <span className="text-[13px] text-ink-muted"> / hora</span>
                </span>
                <Button variant="secondary" size="sm">
                  Ver perfil
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

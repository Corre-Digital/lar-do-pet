import { ShieldCheck, Home, Feather, PawPrint, Dog, Cat, Bird } from 'lucide-react'
import { Button } from '@/components/ui/button'

const pilares = [
  {
    icon: Feather,
    title: 'Calma num mercado barulhento',
    desc: 'Pastel e sereno onde os outros gritam. Cuidado sem estardalhaço.',
  },
  {
    icon: Home,
    title: 'Cuida do pet e da casa',
    desc: 'Duas tranquilidades: o animal bem e a sua casa segura na ausência.',
  },
  {
    icon: ShieldCheck,
    title: 'Confiança verificada',
    desc: 'Selo, antecedentes e certificação. Não é favor, é profissional.',
  },
]

const especies = [
  { icon: Dog, label: 'Cães' },
  { icon: Cat, label: 'Gatos' },
  { icon: Bird, label: 'Aves' },
]

function Wordmark() {
  return (
    <span className="font-display text-2xl font-bold text-teal-600">
      Lar<span className="text-teal-500">Do</span>Pet
    </span>
  )
}

export default function App() {
  return (
    <div className="min-h-screen">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-teal-500 text-white">
            <PawPrint className="h-5 w-5" />
          </span>
          <Wordmark />
        </div>
        <Button variant="ghost" size="sm">
          Entrar
        </Button>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        <section className="grid items-center gap-10 py-12 md:grid-cols-2 md:py-20">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-1 text-sm font-bold text-teal-700">
              <ShieldCheck className="h-4 w-4" /> Cuidadores verificados
            </p>
            <h1 className="font-display text-4xl font-bold leading-tight text-ink-900 md:text-5xl">
              Com quem você deixa o seu pet?
            </h1>
            <p className="mt-4 font-display text-xl font-medium text-teal-600">
              A tranquilidade de saber que tudo está bem.
            </p>
            <p className="mt-4 max-w-md text-lg text-ink-500">
              Cuidadores verificados que ficam com o seu pet na própria casa, com foto, horário e
              localização em tempo real. Viaje e trabalhe em paz.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg">Encontrar um cuidador</Button>
              <Button variant="secondary" size="lg">
                Quero ser cuidador
              </Button>
            </div>
          </div>

          <div className="rounded-lg border border-line bg-white p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-wide text-ink-500">
              Cuidado no lar, para
            </p>
            <div className="mt-5 grid grid-cols-3 gap-4">
              {especies.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-2 rounded-lg bg-cream py-5"
                >
                  <Icon className="h-8 w-8 text-teal-600" />
                  <span className="text-sm font-semibold text-ink-700">{label}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-ink-500">
              Banho, tosa, passeio, veterinário domiciliar e adestramento, tudo num só lugar.
            </p>
          </div>
        </section>

        <section className="grid gap-6 py-12 md:grid-cols-3">
          {pilares.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-lg border border-line bg-white p-7">
              <span className="grid h-12 w-12 place-items-center rounded-lg bg-teal-50">
                <Icon className="h-6 w-6 text-teal-700" />
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-ink-900">{title}</h3>
              <p className="mt-2 text-ink-500">{desc}</p>
            </div>
          ))}
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-ink-500">
          Lar do Pet, um projeto da comunidade Corre Digital. A tranquilidade de saber que tudo está
          bem.
        </div>
      </footer>
    </div>
  )
}

import { Header } from '@/sections/header'
import { Hero } from '@/sections/hero'
import { Servicos } from '@/sections/servicos'
import { ComoFunciona } from '@/sections/comofunciona'
import { MomentoDestaque } from '@/sections/momento'
import { Cuidadores } from '@/sections/cuidadores'
import { Seguranca } from '@/sections/seguranca'
import { DoisPublicos } from '@/sections/publicos'
import { Historias } from '@/sections/historias'
import { Faq } from '@/sections/faq'
import { CtaFinal } from '@/sections/cta'
import { Footer } from '@/sections/footer'

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main>
        <Hero />
        <Servicos />
        <ComoFunciona />
        <MomentoDestaque />
        <Cuidadores />
        <Seguranca />
        <DoisPublicos />
        <Historias />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
    </div>
  )
}

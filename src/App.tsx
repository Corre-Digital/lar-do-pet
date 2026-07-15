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
import { LegalPage, NotFound } from '@/legal/legal-page'
import { PRIVACIDADE, TERMOS } from '@/legal/content-legal'

function Landing() {
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

/** Roteamento mínimo por pathname (SPA com fallback /* -> index.html no Pages).
 *  Três rotas reais + 404 visual; sem dependência de router. */
export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  if (path === '/privacidade') {
    return <LegalPage doc={PRIVACIDADE} crossLink={{ href: '/termos', label: 'Termos de Uso' }} />
  }
  if (path === '/termos') {
    return <LegalPage doc={TERMOS} crossLink={{ href: '/privacidade', label: 'Política de Privacidade' }} />
  }
  if (path !== '/') return <NotFound />
  return <Landing />
}

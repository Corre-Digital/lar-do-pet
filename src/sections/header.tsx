import { useState } from 'react'
import { Container, Logo } from '@/components/ui/ui'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { NAV } from '@/lib/content'
import { scrollToWaitlist } from '@/lib/waitlist'

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-cream/85 backdrop-blur-md">
      <Container className="flex h-[76px] items-center gap-7">
        <Logo size={44} />
        <nav className="ml-3 hidden items-center gap-6 lg:flex">
          {NAV.map((l) => (
            <a key={l} href="#" className="text-[15px] font-semibold text-ink-700 transition-colors hover:text-amber-600">
              {l}
            </a>
          ))}
        </nav>
        <div className="ml-auto hidden items-center gap-3 lg:flex">
          <Button variant="ghost" size="sm">Entrar</Button>
          <Button variant="primary" size="sm" iconLeft="paw-print" onClick={scrollToWaitlist}>Criar conta</Button>
        </div>
        <button
          className="ml-auto grid h-11 w-11 place-items-center text-teal-700 lg:hidden"
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name="menu" size={26} />
        </button>
      </Container>

      {open && (
        <div className="border-t border-line bg-cream lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV.map((l) => (
              <a key={l} href="#" className="rounded-lg px-2 py-3 text-base font-semibold text-ink-700 hover:bg-teal-50">
                {l}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <Button variant="secondary" size="md" fullWidth>Entrar</Button>
              <Button variant="primary" size="md" fullWidth iconLeft="paw-print" onClick={() => { setOpen(false); scrollToWaitlist() }}>Criar conta</Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  )
}

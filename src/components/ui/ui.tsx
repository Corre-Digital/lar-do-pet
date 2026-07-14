import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Icon } from './icon'

/** Container central da landing (largura máx. do conteúdo). */
export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn('mx-auto w-full max-w-[1180px] px-6 md:px-10', className)}>{children}</div>
}

/** Rótulo-olho (kicker). Âmbar escuro sobre claro; teal-300 no escuro. */
export function Kicker({ children, dark = false, className }: { children: ReactNode; dark?: boolean; className?: string }) {
  return (
    <p className={cn('text-xs font-extrabold uppercase tracking-[0.14em]', dark ? 'text-teal-300' : 'text-amber-600', className)}>
      {children}
    </p>
  )
}

/** Cabeçalho de seção: kicker + título + subtítulo opcional. */
export function SectionHead({
  kicker, title, sub, dark = false, className, titleClass,
}: { kicker?: string; title: string; sub?: string; dark?: boolean; className?: string; titleClass?: string }) {
  return (
    <div className={cn('max-w-2xl', className)}>
      {kicker && <Kicker dark={dark}>{kicker}</Kicker>}
      <h2 className={cn('mt-2 font-display text-h2 md:text-[2.125rem] font-bold leading-[1.15]', dark ? 'text-white' : 'text-ink-900', titleClass)}>
        {title}
      </h2>
      {sub && <p className={cn('mt-3 text-lg leading-relaxed', dark ? 'text-teal-100/90' : 'text-ink-700')}>{sub}</p>}
    </div>
  )
}

/** Selo (pill) teal com ícone. */
export function Badge({ icon, children }: { icon?: string; children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 text-sm font-bold text-teal-700">
      {icon && <Icon name={icon} size={15} className="text-teal-700" />}
      {children}
    </span>
  )
}

/** Chip de habilidade/serviço. */
export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-white px-3 py-1.5 text-[13px] font-semibold text-teal-700">
      {children}
    </span>
  )
}

/** Logo: emblema + wordmark. */
export function Logo({ size = 44, className }: { size?: number; className?: string }) {
  return (
    <a href="#" className={cn('inline-flex items-center gap-2.5', className)} aria-label="Lar do Pet">
      <img src="/logo-emblem.svg" alt="" style={{ height: size, width: 'auto' }} />
      <span className="font-display text-[22px] font-bold text-teal-700">LarDoPet</span>
    </a>
  )
}

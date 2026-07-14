import { Icon } from '@/components/ui/icon'
import { cn } from '@/lib/utils'

/** MomentoCard — a assinatura da marca: a prova em tempo real (foto + horário
 *  + localização) que o cuidador envia. Usado no hero e na seção dedicada. */
export function MomentoCard({
  time, img, text, loc, className,
}: { time: string; img: string; text: string; loc: string; className?: string }) {
  return (
    <div className={cn('w-full rounded-lg border-[1.5px] border-line bg-[#FCFAF4] p-4 shadow-lg', className)}>
      <div className="flex items-center gap-2">
        <span className="grid h-8 w-8 place-items-center rounded-[9px] bg-teal-500 text-white">
          <Icon name="camera" size={16} />
        </span>
        <span className="text-sm font-bold text-ink-900">Momento do Cuidado</span>
        <span className="ml-auto text-[13px] font-bold text-teal-600">{time}</span>
      </div>
      <img src={img} alt={text} className="mt-3 aspect-[16/9] w-full rounded-[12px] object-cover" />
      <p className="mt-3 text-[15px] font-semibold text-ink-900">{text}</p>
      <p className="mt-1.5 flex items-center gap-1.5 text-[13px] text-ink-muted">
        <Icon name="map-pin" size={13} className="text-teal-600" />
        {loc}
      </p>
    </div>
  )
}

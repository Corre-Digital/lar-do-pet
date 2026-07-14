import type { CSSProperties } from 'react'
import {
  ArrowRight, Bath, Camera, Check, CheckCircle, ChevronDown, Dog, Footprints,
  GraduationCap, Heart, Home, MapPin, Menu, PawPrint, Play, Scissors, Search,
  ShieldCheck, Star, Stethoscope, Users, type LucideIcon,
} from 'lucide-react'

/** Icon — wrapper sobre o Lucide (linguagem de ícones da marca: linha
 *  arredondada, nunca emoji). Recebe o nome kebab e resolve para o componente. */
const ICONS: Record<string, LucideIcon> = {
  'arrow-right': ArrowRight, bath: Bath, camera: Camera, check: Check,
  'check-circle': CheckCircle, 'chevron-down': ChevronDown, dog: Dog,
  footprints: Footprints, 'graduation-cap': GraduationCap, heart: Heart,
  home: Home, 'map-pin': MapPin, menu: Menu, 'paw-print': PawPrint, play: Play,
  scissors: Scissors, search: Search, 'shield-check': ShieldCheck, star: Star,
  stethoscope: Stethoscope, users: Users,
}

export interface IconProps {
  name: string
  size?: number
  strokeWidth?: number
  className?: string
  fill?: string
  style?: CSSProperties
}

export function Icon({ name, size = 20, strokeWidth = 2, className, fill, style }: IconProps) {
  const Cmp = ICONS[name] ?? PawPrint
  return (
    <Cmp
      size={size}
      strokeWidth={strokeWidth}
      className={className}
      aria-hidden="true"
      style={style}
      {...(fill ? { fill } : {})}
    />
  )
}

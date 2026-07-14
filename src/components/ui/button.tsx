import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { Icon } from './icon'

/** Button — ação da marca. Arredondado (pill), quente, calmo.
 *  Assinatura: o primário teal vira âmbar no hover. Press = leve encolhimento. */
const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-bold transition-[background-color,border-color,box-shadow,transform] duration-200 ease-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream active:translate-y-px active:scale-[0.985] disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-teal-600 text-white shadow-sm hover:bg-amber-500 hover:shadow-md',
        accent: 'bg-amber-500 text-white shadow-sm hover:bg-amber-600 hover:shadow-md',
        secondary:
          'border-[1.5px] border-teal-500 bg-cream text-teal-700 hover:border-amber-500 hover:text-amber-600 hover:shadow-md',
        onDark: 'bg-white text-teal-700 hover:shadow-md',
        soft: 'bg-teal-100 text-teal-700 hover:bg-teal-200',
        ghost: 'text-teal-700 hover:bg-teal-50',
      },
      size: {
        sm: 'h-10 px-5 text-sm',
        md: 'h-12 px-6 text-base',
        lg: 'h-[54px] px-7 text-[17px]',
      },
      fullWidth: { true: 'w-full' },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  iconLeft?: string
  iconRight?: string
}

const ICON_SIZE = { sm: 16, md: 18, lg: 20 } as const

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, iconLeft, iconRight, children, ...props }, ref) => {
    const is = ICON_SIZE[(size ?? 'md') as keyof typeof ICON_SIZE]
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        {...props}
      >
        {iconLeft && <Icon name={iconLeft} size={is} />}
        {children}
        {iconRight && <Icon name={iconRight} size={is} />}
      </button>
    )
  },
)
Button.displayName = 'Button'

export { buttonVariants }

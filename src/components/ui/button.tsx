import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-bold transition-[color,background-color,border-color,box-shadow,transform] duration-200 ease-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream active:translate-y-px active:scale-[0.985] disabled:pointer-events-none disabled:opacity-50 disabled:hover:shadow-none',
  {
    variants: {
      variant: {
        // Primário verde; ao passar o mouse, vira âmbar (regra da marca)
        primary: 'bg-teal-600 text-white hover:bg-amber-500 hover:shadow-md',
        secondary:
          'border-2 border-teal-500 bg-white text-teal-700 hover:border-amber-500 hover:text-amber-600 hover:shadow-md',
        soft: 'bg-teal-100 text-teal-700 hover:bg-teal-200',
        ghost: 'text-teal-700 hover:bg-teal-50',
      },
      size: {
        default: 'h-12 px-6 text-base',
        lg: 'h-14 px-8 text-lg',
        sm: 'h-10 px-4 text-sm',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />
  ),
)
Button.displayName = 'Button'

export { Button, buttonVariants }

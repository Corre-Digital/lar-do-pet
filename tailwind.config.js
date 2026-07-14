import tailwindcssAnimate from 'tailwindcss-animate'

/** @type {import('tailwindcss').Config}
 *  Tokens do Design System Lar do Pet.
 *  Fonte de verdade: handoff do Claude Design (espelhado em src/index.css). */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Teal · marca
        teal: {
          50: '#ECF4F1',
          100: '#D8EAE4',
          200: '#BCDBD1',
          300: '#93C3B8',
          400: '#62A597',
          500: '#3B8A7C',
          600: '#2F7064',
          700: '#255A50',
          900: '#183F38',
        },
        // Âmbar · ação e hover
        amber: {
          100: '#F9E7CE',
          300: '#F0C894',
          500: '#E0A45C',
          600: '#C6843C',
        },
        // Dourado · pássaro
        gold: {
          100: '#FBF3D4',
          300: '#F3E7AE',
          500: '#E7CF6E',
        },
        // Neutros quentes
        cream: { DEFAULT: '#F4F0E2', deep: '#EDE7D6' },
        ink: {
          300: '#A7ADA5',
          500: '#7B837C',
          muted: '#5B5A4E',
          700: '#45514C',
          900: '#2A332F',
        },
        line: { DEFAULT: '#E6E0D2', soft: '#EFEBDD' },
        // Estados semânticos
        success: { DEFAULT: '#3B8A7C', bg: '#D8EAE4' },
        warning: { DEFAULT: '#C6843C', bg: '#F9E7CE' },
        danger: { DEFAULT: '#C96A5C', bg: '#F6E1DC' },
        info: { DEFAULT: '#4E93A0', bg: '#E1EEF0' },
      },
      fontFamily: {
        display: ['Quicksand', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Nunito', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      // Escala de tipografia do DS (some às escalas padrão do Tailwind)
      fontSize: {
        display: ['3.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        h1: ['2.125rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        h2: ['1.625rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        h3: ['1.25rem', { lineHeight: '1.25' }],
        h4: ['1.125rem', { lineHeight: '1.25' }],
        lead: ['1.25rem', { lineHeight: '1.5' }],
        body: ['1.125rem', { lineHeight: '1.5' }],
        ui: ['1rem', { lineHeight: '1.5' }],
      },
      letterSpacing: { caps: '0.08em' },
      // Raios do DS
      borderRadius: {
        xs: '6px',
        sm: '10px',
        md: '14px',
        lg: '20px',
        xl: '28px',
        '2xl': '36px',
        pill: '999px',
      },
      // Sombras quentes e difusas
      boxShadow: {
        xs: '0 1px 2px rgba(58, 74, 70, 0.06)',
        sm: '0 2px 8px rgba(58, 74, 70, 0.07)',
        md: '0 8px 24px rgba(44, 114, 104, 0.10)',
        lg: '0 16px 40px rgba(44, 114, 104, 0.12)',
      },
      transitionTimingFunction: {
        soft: 'cubic-bezier(0.4, 0, 0.2, 1)',
        out: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
      },
      transitionDuration: { fast: '140ms', DEFAULT: '220ms', slow: '380ms' },
      maxWidth: { container: '1200px', 'container-narrow': '780px' },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [tailwindcssAnimate],
}

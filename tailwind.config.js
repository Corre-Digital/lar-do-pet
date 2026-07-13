import tailwindcssAnimate from 'tailwindcss-animate'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Marca Lar do Pet (paleta do logo do aluno)
        teal: {
          50: '#ECF4F1',
          100: '#D8EAE4',
          300: '#93C3B8',
          500: '#3B8A7C',
          600: '#2F7064',
          700: '#255A50',
          900: '#183F38',
        },
        amber: {
          300: '#F0C894',
          500: '#E0A45C',
          600: '#C6843C',
        },
        gold: {
          100: '#FBF3D4',
          300: '#F3E7AE',
          500: '#E7CF6E',
        },
        cream: '#F4F0E2',
        ink: {
          500: '#7B837C',
          700: '#45514C',
          900: '#2A332F',
        },
        line: '#E6E0D2',
      },
      fontFamily: {
        display: ['Quicksand', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Nunito', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
      },
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

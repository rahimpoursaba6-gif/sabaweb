import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060E1B',
          900: '#0B1C33',
          800: '#122843',
          700: '#1B3557',
          600: '#2A4A72',
          500: '#4A6B93',
        },
        champagne: {
          DEFAULT: '#C5A059',
          light: '#D9BE86',
          dark: '#A8833C',
          soft: '#EFE4CE',
        },
        ivory: '#F8F6F1',
        mist: '#F1F4F8',
        ink: '#0D1B2A',
        graphite: '#4A4A4A',
      },
      fontFamily: {
        display: ['Jost', 'Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      maxWidth: {
        content: '1280px',
      },
      letterSpacing: {
        label: '0.22em',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'hero-scale': {
          from: { transform: 'scale(1.03)' },
          to: { transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fade-in 0.6s ease-out both',
        'hero-scale': 'hero-scale 1.6s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
    },
  },
  plugins: [],
} satisfies Config

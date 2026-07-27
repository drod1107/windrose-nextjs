import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: [
    './src/app/components/**/*.{js,jsx,ts,tsx}',
    './src/app/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // --- Brand palette (kept for backwards compatibility) ---
        'papaya-whip': '#FFEFD5',
        'gunmetal': '#2B3D4F',
        'myrtle-green': '#317873',
        'myrtle-green-light': '#3D958F',
        'palatinate': '#682860',
        'earth-yellow': '#E1A95F',

        // --- Evolved semantic tokens (2026 relaunch) ---
        // Deep bases for dark sections + gradients
        'gunmetal-deep': '#1E2C3A',
        'ink': '#22303C',
        // Primary (teal) family
        'teal-deep': '#245E59',
        // Bright, saturated CTA accent
        'gold': '#EBB24E',
        'gold-bright': '#F4C065',
        // Light surfaces for airy, readable content sections
        'cream': '#FFF7EC',
        'cloud': '#F3EFE6',
        'mist': '#E7EFEE',
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'var(--font-saira)', 'sans-serif'],
        serif: ['var(--font-lora)', 'var(--font-saira)', 'serif'],
        // Display headings + UI/body pairing for the relaunch
        display: ['var(--font-lora)', 'serif'],
        body: ['var(--font-montserrat)', 'sans-serif'],
        saira: ['var(--font-saira)', 'sans-serif'],
        lora: ['var(--font-lora)', 'serif'],
        hind: ['var(--font-hind)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      maxWidth: {
        'content': '72rem',
      },
      borderRadius: {
        'xl2': '1.25rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 10px 40px -12px rgba(16, 30, 40, 0.35)',
        'lift': '0 24px 60px -20px rgba(16, 30, 40, 0.45)',
      },
      textShadow: {
        'default': '2px 2px 4px rgba(0, 0, 0, 0.5)',
        'md': '2px 2px 4px rgba(0, 0, 0, 0.6)',
        'lg': '3px 3px 6px rgba(0, 0, 0, 0.8)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(6deg)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        'float-slow': 'float-slow 9s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    plugin(({ addUtilities }) => {
      addUtilities({
        '.text-shadow': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-md': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
        },
        '.text-shadow-lg': {
          textShadow: '3px 3px 6px rgba(0, 0, 0, 0.8)',
        },
      })
    })
  ],
}

export default config

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
        'signal-black': '#191C1A',
        'signal-lime': '#D9F65B',
        'signal-coral': '#EF7367',
        'signal-fog': '#EFF1EC',
        'signal-paper': '#FFFFFF',
        'signal-muted': '#555B54',
        'papaya-whip': '#FFFFFF',
        'gunmetal': '#272A26',
        'myrtle-green': '#353B30',
        'myrtle-green-light': '#34392F',
        'palatinate': '#403F3A',
        'earth-yellow': '#EF7367',

        // --- Evolved semantic tokens (2026 relaunch) ---
        // Deep bases for dark sections + gradients
        'gunmetal-deep': '#191C1A',
        'ink': '#1C201D',
        // Primary (teal) family
        'teal-deep': '#30392F',
        // Bright, saturated CTA accent
        'gold': '#D9F65B',
        'gold-bright': '#CBE84C',
        // Light surfaces for airy, readable content sections
        'cream': '#FFFFFF',
        'cloud': '#EFF1EC',
        'mist': '#F7F8F4',
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'var(--font-saira)', 'sans-serif'],
        serif: ['var(--font-lora)', 'var(--font-saira)', 'serif'],
        // Display headings + UI/body pairing for the relaunch
        display: ['var(--font-inter)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
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
        'soft': '0 10px 36px -22px rgba(25, 28, 26, 0.18)',
        'lift': '0 20px 48px -22px rgba(25, 28, 26, 0.24)',
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

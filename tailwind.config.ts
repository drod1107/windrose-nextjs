/** @type {import('tailwindcss').Config} */
export const content = [
  './src/app/components/**/*.{js,jsx,ts,tsx}',
  './src/app/**/*.{js,jsx,ts,tsx}'
];
export const theme = {
  extend: {
    colors: {
      'papaya-whip': '#FFEFD5',
      'gunmetal': '#2B3D4F',
      'myrtle-green': '#317873',
      'myrtle-green-light': '#3D958F',
      'palatinate': '#682860',
      'earth-yellow': '#E1A95F'
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      lora: ['Lora', 'serif'],
      hind: ['Hind Madurai', 'sans-serif']
    }
  }
};
export const plugins = [
  require('@tailwindcss/aspect-ratio')
];
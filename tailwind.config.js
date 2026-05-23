


/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        ink: '#111111',
      },
      fontFamily: {
        display: ['"Barlow"', 'sans-serif'],
        sans: ['"Barlow"', 'sans-serif'],
        mono: ['"Barlow"', 'monospace'],
      },
    },
  },
  plugins: [],
}



/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/components/**/*.{vue,js,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/app.vue',
    './app/error.vue'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#1B1D1C',
        paper: '#FDFBF7',
        bronze: {
          DEFAULT: '#9A6F3F',
          light: '#C08E52'
        },
        grey: '#6B6D64',
        line: '#DAD5CB',
        body: '#45483F'
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      }
    }
  },
  plugins: []
}

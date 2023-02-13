/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#7391c8',
        },
        secondary: {
          100: '#E3E7F1',
        },
        accent: {
          100: '#52688F',
          200: '#93c5fd',
          300: '#192740'
        }
      }
    },
  },
  plugins: [],
}

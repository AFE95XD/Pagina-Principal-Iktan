/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          'warm-gray': colors.stone,
          teal: colors.teal,
        },
    },
    fontFamily: {
      // Cormorant: ['Garamond'],
      // Domine: ['Domine'],
      Alfa: ['Alfa Slab One']
    },
  },
  plugins: [],
}

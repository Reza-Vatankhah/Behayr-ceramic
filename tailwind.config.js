/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        vazir: ['Vazir', "sans-serif"],
    },
    transitionProperty: {
      'left': 'left',
      'right': 'right',
    }
  },
  },
  plugins: [],
}

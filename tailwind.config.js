/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        vazir: ['Vazir', "sans-serif"],
    },
    backgroundImage: {
      'pattern': "url('src/assets/img/effect.png')",
    }
    },
  },
  plugins: [],
}

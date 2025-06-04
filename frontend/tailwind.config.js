/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        antonio: ['Antonio', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        norican: ['Norican', 'cursive'],

      },
    },
  },
  plugins: [],
}
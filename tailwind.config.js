/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ['"Pacifico"', 'cursive'],
        quicksand: ['"Quicksand"', 'sans-serif'],
        dancing: ['"Dancing Script"', 'cursive'],
      },
    },
  },
  plugins: [],
}

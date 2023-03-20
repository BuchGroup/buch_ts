/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'schedule': '#3b95e3',
        'light-black': '#2c2c2c',
        'our': '#2d6aa0',
      }
    },
  },
  plugins: [],
}

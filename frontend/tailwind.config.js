/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'raisin': '#382E31',
        'licorice': '#191516',
        'amaranth': '#AC274F',
        'blush': '#EB638B',
        'rose': '#FFD9DA',
      },
      screens: {
        'xs': '390px'
      },
      spacing: {
        '128': '27rem',
        '150': '35rem',
        '160': '45rem',
      }
    },
  },
  plugins: [],
}

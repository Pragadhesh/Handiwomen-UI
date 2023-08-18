/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'lightgrey': '#888888',
        'pink': '#E10982'
      },
      fontFamily: {
        opensans: ["OpenSans"],
        varelaround: ["VarelaRound"],
        hind: ["Hind"],
        montserrat: ["Montserrat"]
    }
    },
  },
  plugins: [],
};
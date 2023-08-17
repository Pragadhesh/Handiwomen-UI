/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'mwhite': '#FFFFFF',
        'darkblue': '#181E4B',
        'skyblue': '#4475F2',
        'regular': '#5E6282'
      },
      fontFamily: {
        opensans: ["OpenSans"],
        varelaround: ["VarelaRound"]
    }
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Montserrat', 'serif'],
        mono: ['Raleway', 'monospace'],
        roboto: ['Roboto', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
});

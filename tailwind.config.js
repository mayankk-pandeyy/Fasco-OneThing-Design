/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'poppins': "Poppins",
        'volkhov': "Volkhov"
      },
      boxShadow : {
        'custom' : "2px 2px 4px 0px #000000"
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"],

  theme: {
    extend: {},
    fontFamily: {
      Zen: ["Zen Dots"],
      nerko:["Nerko One"],
     },  },
  plugins: [
    require("daisyui")
  ],

}

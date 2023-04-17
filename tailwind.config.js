/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/assets/css/style.css.{html,ts}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
}


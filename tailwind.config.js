/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/pages/**/*.{html,ts}',
    './src/app/components/**/*.{html,ts}',
    './src/index.html',
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  mode:'jit',
  theme: {
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
}


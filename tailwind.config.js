const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    colors: {
      rose: colors.rose,
      gray: colors.gray,
      white: colors.white,
    },
    extend: {
      fontFamily: {
        body: ["Georgia"],
        display: ['"Playfair Display"'],
        cursive: ['"Dancing Script"']
      }
    },
  },
  plugins: [],
}

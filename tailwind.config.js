/** @type {import("tailwindcss").Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#28e98c",
        secondary: "#000000",
        tertiary: "#575757",
        icons: "#999",

        dark: {
          bg: "#202020",
          text: "#ffffff",
        },

        light: {
          bg: "#ffffff",
          text: "#202020",
        },
      },
    },
  },
  plugins: [],
};

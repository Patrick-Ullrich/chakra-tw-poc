/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}", "./ui/**/*.{ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      primary: {
        100: "#DEEFDA",
        200: "#BCDEB5",
        300: "#9BCE91",
        400: "#79BD6C",
        500: "#58AD47",
        600: "#468A39",
        700: "#36582B",
        800: "#23451C",
        900: "#12230E",
      },
    },
    extend: {},
  },
  plugins: [],
};

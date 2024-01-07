const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        theme: {
          base: "hsl(4, 100%, 67%)",
          charcoalGrey: "hsl(235, 18%, 26%)",
          darkSlateGrey: "hsl(234, 29%, 20%)",
          grey: "hsl(231, 7%, 60%)",
        },
      },
    },
  },
};
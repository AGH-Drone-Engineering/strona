/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      colors: {
        agh: {
          green: "#00693c",
          greenHover: "#00522e",
          red: "#a71930",
          redHover: "#8a1427",
          black: "#1e1e1e",
        },
        main: {
          DEFAULT: "#00693c",
          hover: "#00522e",
          active: "#00522e",
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Inter"', "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      colors: {
        iot: {
          dark: "#0f172a",
          card: "#1e293b",
        },
        agh: {
          green: "#00693c",
          red: "#a71930",
        },
        neon: {
          cyan: "#00c875",
          purple: "#e11d48",
          red: "#ff2e2e",
          green: "#00ff41",
          teal: "#10b981",
          darkTeal: "#0f766e",
        },
        main: {
          DEFAULT: "#10b981",
          hover: "#34d399",
          active: "#34d399",
        },
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      fontFamily: {
        oxanium: ['"Oxanium"', "sans-serif"],
      },
    },
  },
  plugins: [],
};

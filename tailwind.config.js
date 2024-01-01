/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        movingGradient: {
          "0%, 100%": { backgroundPosition: "0 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
    colors: {
      colorOne: "#1B2021",
      colorTwo: "#30343F",
      colorThree: "#89023E",
      colorFour: "#EA638C",
      colorFive: "#FFD9DA",
    },
    screens: {
      md: "768px",
      lg: "991px",
      xl: "1320px",
    },
    container: {
      padding: "10px",
    },
  },
  plugins: [],
};

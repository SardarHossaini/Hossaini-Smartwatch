/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        secondary: "#888883",
      },
      fontSize: {
        "10xl": "20rem",
      },
    },
  },
  plugins: [],
};

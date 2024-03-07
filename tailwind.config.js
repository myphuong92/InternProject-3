/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1025px", // Adjusted for iPad Pro and larger
    },
    extend: {},
  },
  plugins: [],
};

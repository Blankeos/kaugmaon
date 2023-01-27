/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        azonix: ["Azonix", "sans-serif"],
      },
      colors: {
        primary: "#DBFF00",
        dark: "#181818",
      },
    },
  },
  plugins: [],
};

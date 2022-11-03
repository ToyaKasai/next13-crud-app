/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "rgba(0, 0, 0, 1)",
          90: "rgba(0, 0, 0, 0.90)",
          80: "rgba(0, 0, 0, 0.80)",
          70: "rgba(0, 0, 0, 0.7)",
          60: "rgba(0, 0, 0, 0.6)",
          50: "rgba(0, 0, 0, 0.5)",
          40: "rgba(0, 0, 0, 0.4)",
          30: "rgba(0, 0, 0, 0.3)",
          20: "rgba(0, 0, 0, 0.2)",
          10: "rgba(0, 0, 0, 0.1)",
        },
      },
    },
  },
  plugins: [],
};

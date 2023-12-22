/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'popopins': ["'Poppins', sans-serif"],
    },
    extend: {},
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui")],
}
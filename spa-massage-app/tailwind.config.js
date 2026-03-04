/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#c9a74a",
        "background-light": "#f8f7f6",
        "background-dark": "#1f1c13",
      },
      fontFamily: {
        "display": ["Manrope", "sans-serif"],
        "serif": ["Playfair Display", "serif"],
        "sans": ["Noto Sans", "sans-serif"],
        "noto-serif": ["Noto Serif", "serif"]
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "lg": "1rem",
        "xl": "1.5rem",
        "full": "9999px",
      },
    },
  },
  plugins: [],
}

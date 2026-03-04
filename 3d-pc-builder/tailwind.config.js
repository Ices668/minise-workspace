/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00aaff',
      },
      backgroundColor: {
        'dark-base': '#0a0a0a',
        'dark-surface': '#1a1a1a',
      },
      textColor: {
        'tech-blue': '#00aaff',
      }
    },
  },
  plugins: [],
}

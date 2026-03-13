/** @type {import('tailwindcss').Config} */

import colors from 'tailwindcss/colors';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
    extend: {
      colors: {
        'primary': colors.teal[600],
        'secondary': colors.yellow[500],
        'tertiary': colors.sky[500]
      },
      backgroundImage: {
        loginBg: "url('/login-bg.jpg')"
      },
      keyframes: {
        ping: {
          '75%': {
            transform: 'scale(5)',
          },
          '100%': {
            transform: 'scale(5)'
          }
        }
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./stories/*.{ts,tsx}"],
  theme: {
    backgroundImage: theme => ({
      'green-gradient': 'linear-gradient(to right, green, lightgreen)'
    }),
    colors: {
      //potential palletes.https://color.adobe.com/create/color-wheel #B4FF8B
      primary: {
          100: "#dfedcb",
          200: "#cae1aa",
          300: "#b5d489",
          400: "#a5cb70",
          500: "#96c258",
          600: "#87b24f",
          700: "#739e45",
          800: "#608a3c",
          900: "#41682c"
        },
        secondary: {
          100: "#ccead0",
          200: "#abddb3",
          300: "#8ad095",
          400: "#70c67e",
          500: "#59bb68",
          600: "#50ac5e",
          700: "#459952",
          800: "#3c8848",
          900: "#2c6835",
        },
        tertiary: {
          50: '#f8f7ea',
          100: "#edebca",
          200: "#e1dfa9",
          300: "#d5d288",
          400: "#cbc86e",
          500: "#c1bf55",
          600: "#afb04d",
          700: "#999c43",
          800: "#83893b",
          900: "#5f682c"
        },
        red: {
          100: "#f3dad7",
          200: "#e7b5af",
          300: "#dc8f86",
          400: "#d06a5e",
          500: "#c44536",
          600: "#9d372b",
          700: "#762920",
          800: "#4e1c16",
          900: "#270e0b"
          },
        //#DB504A, #3B0D11
        white: "#ffffff",
        black: "#000000",
        shade: {
          100: "#ffffff",
          200: "#ffffff",
          300: "#ffffff",
          400: "#ffffff",
          500: "#D7D7D7",
          600: "#cccccc",
          700: "#999999",
          800: "#666666",
          900: "#333333"
        },
    },
    fontFamily: {
      'sans': ['Noto Sans Bengali', 'sans-serif'],
      'serif': ['EB Garamond', 'serif'],
    },
    extend: {
      keyframes: {
        'shake': {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-10px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(10px)' },
        },
        'fly-in': {
          '0%': { transform: 'translateY(100px)', opacity: 0 },
          '100%': { transform: 'translateY(0px)', opacity: 1 }
        },
        'fly-away': {
          '0%': { transform: 'translateY(0)', opacity: 1 },
          '100%': { transform: 'translateY(-100px)', opacity: 0 }
        },
        'strike-through': {
          '0%': { textDecoration: 'none' },
          '100%': { textDecoration: 'line-through' }
        }
      },
      animation: {
        'shake': 'shake 1s cubic-bezier(0.36, 0.07, 0.19, 0.97) 3',
        'fly-in': 'fly-in 1s ease-out',
        'fly-away': 'fly-away 1s ease-in',
        'strike-through': 'strike-through 2s ease-in-out 1'
      }
    },
  },
  plugins: [
    require('tailwindcss-react-aria-components'),
    require('tailwindcss-animate')
  ]
};
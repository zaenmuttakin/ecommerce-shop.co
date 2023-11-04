/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["satoshi-variable", "sans-serif"],
        integral: ["integral-cf-bold", "sans-serif"],
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    colors: {
      black: {
        10: "#0000001A",
        20: "#00000033",
        40: "#00000066",
        60: "#00000099",
        100: "#000000",
      },
      gray: {
        10: "#F2F0F1",
        20: "#F0EEED",
        30: "#F0F0F0",
      },
      red : {
        10: "#FF33331A",
        100: "#FF3333",
      },
      white: "#FFFFFF",
      yellow : "#FFC633",
      green : "#01AB31"
    }
  },
  plugins: [],
}


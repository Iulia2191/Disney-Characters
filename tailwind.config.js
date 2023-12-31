/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      corePlugins: {
        animation: true,
      },
      colors: {
        button: '#172554',
        btnHover: '#4338ca',
        transparent: 'transparent',
        card: '#e0f2fe',
      },
      columns: {
        '4xs': '14rem',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        orange: 'rgb(243, 205, 6)',
        green: 'rgb(167, 243, 6)',
      },
      fontFamily: {
        main: ['Plus Jakarta Sans'],
        title: ['Raleway'],
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(-130%, 0)' },
        }
      },
      animation: {
        ticker: 'ticker 15s infinite linear',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};

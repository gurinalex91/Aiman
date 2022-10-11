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
    },
  },
  plugins: [],
};

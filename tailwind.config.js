/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        orange: "rgb(243, 205, 6)",
        green: "rgb(167, 243, 6)",
      },
      fontFamily: {
        main: ["Plus Jakarta Sans"],
        title: ["Raleway"],
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(-130%, 0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeRight: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        upDown: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(10%)" },
          "100%": { transform: "translateY(0)" },
        },
        rotate360: {
          "0%": { transform: "rotate(0)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        ticker: "ticker 15s infinite linear",
        marquee: "marquee 15s infinite linear",
        marqueeRight: "marqueeRight 15s infinite linear",
        fadeIn: "fadeIn 1s ease-in",
        upDown: "upDown 5s infinite ease-in-out",
        titleFadeIn: "fadeIn 3s ease-in",
        rotate360: "rotate360 30s infinite linear"
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        minhaCorP: "#FFCD01",
         minhaCorb: "#0E4C71"
      },
       fontFamily:{
         Inika: ['InikaBold', 'serif'],
      }
    },
  },
  plugins: [],
};



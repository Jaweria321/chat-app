/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [  
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        avenir: "Avenir LT Std"
      },
      fontSize: {
        c10: ['10px', '10px'],
      },
    },
  },
  plugins: [],
}


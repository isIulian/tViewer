/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        elegantViolet: {
          900: "#3B3486",
          800:"#584e97", 
          700:"#7469a8", 
          600:"#9085b9", 
          500:"#a096c3", 
          400:"#afa6cd", 
          300:"#bfb8d7", 
          200:"#cfc9e1", 
          100:"#dfdbeb", 
          50:"#efedf5", 
      }}
    },
  },
  plugins: [],
}


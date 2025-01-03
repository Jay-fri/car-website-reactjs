/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins:['poppins', 'sans-serif'],
        oleo:['Oleo Scripts', 'cursive'],
        exo:['Exo', 'sans-serif'],
        custom: [''],
      },
    },
  },
  plugins: [],
}


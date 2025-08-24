/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      colors:{
        "Asan-Shop-red":"#ea2e0e"
      }
    },
  },
  plugins: [],
}
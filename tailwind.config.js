/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
       poppins: ['Poppins', 'sans-serif'],
    },
    colors: {
      'og-blue': '#41cbe2',
      'light-dark': '#585858',
      'light-pink': '#F39F9F',
    },
    extend: {},
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(355, 70%, 54%)',
        primaryAlt: 'hsl(355, 66%, 50%)',
        titleColor: 'hsl(355, 4%, 15%)',
        textColor: 'hsl(355, 4%, 35%)',
        textColorLight: 'hsl(355, 4%, 55%)',
        bodyColor: '#fff',
        containerColor: '#fff',
      },
      fontFamily: {
        body: ['Poppins', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
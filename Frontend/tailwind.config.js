/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Make sure this path is correct
  ],
  theme: {
    extend: {
      fontFamily: {
        signika: ['Signika', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        inter: ['inter', 'sans-serif'],
        sansita:['sansita', 'sans-serif'],
        Albert: ['Albert', 'sans-serif']
      },
    },
  },
  plugins: [],
}

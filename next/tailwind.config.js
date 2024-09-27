/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        energy: '#E9FF66',
        nature: '#003317',
        darkNature: '#002311',
        lightNeon: '#FEFFEB',
        black: '#000000',
        white: '#FFFFFF',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'], // Font used in design
      },
    },
  },
  plugins: [],
};

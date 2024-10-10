// tailwind.config.ts
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Include all files in the `app` directory
    './components/**/*.{js,ts,jsx,tsx}', // Include all files in the `components` directory
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'], // Use the Manrope font globally
      },
      colors: {
        energy: '#E9FF66',
        nature: '#003317',
        darkNature: '#002311',
        lightNeon: '#FEFFEB',
        black: '#000000',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
};

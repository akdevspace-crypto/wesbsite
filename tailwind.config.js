/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00F0FF',
        'silver-white': '#E6E6E6',
        'dark-gray': '#111111',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
      },
      letterSpacing: {
        'futuristic': '0.2em',
      },
    },
  },
  plugins: [],
}

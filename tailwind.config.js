/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        space: {
          blue: '#0B132B',
          purple: '#1C2541',
          violet: '#5B6FC5',
          yellow: '#FFD700',
        },
      },
    },
  },
  plugins: [],
};
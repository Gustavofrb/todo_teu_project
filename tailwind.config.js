/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a1a1a',
          light: '#2a2a2a',
        },
        secondary: {
          DEFAULT: '#404040',
          light: '#666666',
        },
        accent: '#808080',
      },
    },
  },
  plugins: [],
};
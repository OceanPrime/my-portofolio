const { blue } = require('color-name');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#22d3ee',
        secondary: '#64748b',
        light: '#fafafa',
        blue: '#0ea5e9',
        dark: '#030712',
      },
      screens: {
        '2xl':'1320px',
      },
    },
  },
  plugins: [],
}


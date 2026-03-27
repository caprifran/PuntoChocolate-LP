/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        choco: '#3b2f2f',
        cream: '#f5e6d3',
        accent: '#f472b6',
      },
      borderRadius: {
        xl: '1.25rem',
      },
      boxShadow: {
        soft: '0 4px 24px 0 rgba(59,47,47,0.08)',
      },
    },
  },
  plugins: [],
};
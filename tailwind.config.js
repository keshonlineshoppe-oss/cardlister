/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#C9A84C',
        'gold-dark': '#B8943F',
        'gold-light': '#D4B85C',
        green: '#4CAF84',
        'green-dark': '#3D9A72',
        dark: '#0A0A0A',
        'dark-card': '#111111',
        'dark-border': '#1A1A1A',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

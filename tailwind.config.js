/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      primary: '#7ED957',
      secondary: '#FDE962',
      background: '#F2F2F2',
      background2: '#ededed',
      white: '#ffffff',
      black: '#000000',
      gray: 'gray',
      red: '#8b0000',
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

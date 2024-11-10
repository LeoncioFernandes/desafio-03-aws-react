/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        '40px': '2.5rem'
      },
      lineHeight: {
        130: '130%',
      },
      colors: {
        primary_text: '#18191F',
        secondary_text: '#FFFFFF',
        tertiary_text: '#D1D5DB',
        primary_color: '#09BC8A',
        secondary_color: '#004346',
        card_color: '#508991',
        dark_green: '#172A3A',
        red_custom: '#992020',
        bg_primary: '#FCFAFA',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({
      preferredStrategy: 'pseudoelements',
      nocompatible: true,
    }),
  ],
}


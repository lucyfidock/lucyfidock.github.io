/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // scan all React files
  ],
  theme: {
    extend: {
      colors: {
        'light-wisteria': {
          '50': '#fbf7fc',
          '100': '#f6eff8',
          '200': '#edddf1',
          '300': '#dfc3e4',
          '400': '#d0a4d6',
          '500': '#b577be',
          '600': '#9959a0',
          '700': '#804784',
          '800': '#6a3c6c',
          '900': '#58355a',
          '950': '#371a38',
        },
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],       // text default
        serif: ['Noto Serif', 'serif'],        // serif default
        heading: ['DM Serif Text', 'serif'],   // header default
      },
    },
  },
  plugins: [],
}

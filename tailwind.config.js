/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'pink': '#ed728e',
      'ltgrey': '#dddede',
      'midgrey': '#a2a09f',
      'dkgrey': '#20232b',
      'ltblue': '#99c0df',
      'dkblue': '#17415b',
    },
    extend: {},
  },
  plugins: [],
}

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
      'peach': '#F1C0B0',
      'dkblue': '#0E1B26',
      'cream': '#F3DFD8',
      'purple': '#998998',
      'green': '#405459',
      'ltgrey': '#dddede',
      'midgrey': '#a2a09f',
      'dkgrey': '#20232b',
      'ltblue': '#99c0df',
      'pink': '#F1C0B0',
      
    },
    extend: {},
  },
  plugins: [],
}

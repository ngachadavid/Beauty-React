/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      // 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  
    ],
    theme: {
  
      extend: {
        colors: {
          pink: "#EEB2B2",
          lpink: "#EABFAF",
          white: "#F5F5F5",
          black: "#000000",
          grey: "#6B6868",
          brown: "#ebd4b5",
          beige: "#F2DFD8",
          dbrown: "#9D6C5B"
        }
      },
    },
    plugins: [
      require('flowbite/plugin'),
  
    ],
  }
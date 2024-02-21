/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "Softblue": "hsl(215, 51%, 70%)",
        "Cyan": "hsl(178, 100%, 50%)",
        "BlueMain": "hsl(217, 54%, 11%)",
        "Bluecard": "hsl(216, 50%, 16%)",
        "blueline": "hsl(215, 32%, 27%)"
      },
      fontFamily: {
        "Outfit": ["Outfit", "sans-serif"]
      }
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      screens: {
        lg: '1140px',
        xl: '1140px',
        '2xl': '1140px',
      },
    },
    extend: { 
      fontFamily: {
        mons: ['Montserrat', "sans-serif;"],
        robo: ["Roboto", "sans-serif"]
      },

      colors: {
        "first" : "#243763",
        "second": "#FF6E31",
        "third": "#FFEBB7",
        "last": "#AD8E70",
      },

      spacing: {
        "128": "32rem",
      },

    },
  },
  plugins: [],
}
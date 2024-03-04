/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': "#181A20",
        'dark2': "#2C2C2C",
        'grey': "#5F6368",
        'grey2': "#737373",
        'greyWhite': "#dcd7fe",
        'greyWhite2': "#eeebfe",
        'deleteRed': "#e04a43",
        'successGreen': "#63ad0e",
        'orange': '#ffaa0e',
        'orange2': '#ffb52e',
        'orange3': '#fca300',
        'orange4': '#fac25a',
        'purple': '#663399',
        'purple2': '#7c4fa8',
        'transparent': '#f2f7ff',
        'transcard': '#e0eaff;'

      },
      fontFamily: {
        'author': 'Author'
      },
      screens: {
        "mobileDeviceOnly": { "min": "300px", "max": "799px" },
        "mobileDeviceLesserThan500": { "min": "300px", "max": "499px" },
        "smallerDevice": { "min": "300px", "max": "399px" },
        "smallDevice": { "min": "350px", "max": "1000px" },
        "semiSmallDevice": { "min": "351px", "max": "399px" },
        "bonusDevice": { "min": "400px", "max": "499px" },
        "aboveBonusDevice": { "min": "800px" },
        "generalDevice": { "max": "1000px" },
        "mediumDevice": { "min": "500px", "max": "1000px" },
        "tablet": { "min": "767px", "max": "1000px" },
        "largeDevice": { "min": "1001px" },
      },
    },
  },
  plugins: [],
}
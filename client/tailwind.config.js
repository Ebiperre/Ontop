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
        'purple': '#663399',
      },
      backgroundImage: {
      },
    },
  },
  plugins: [],
}
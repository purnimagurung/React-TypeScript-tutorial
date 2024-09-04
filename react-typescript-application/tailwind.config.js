/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-20" : "#F8F4E8",
        "gray-50" : "#EFF6E6",
        "gray-100" : "#DECCCC",
        "gray-500" : "#5E0000",
        "primary-100" : "#FFE1E0",
        "primary-300" : "#FFA6A3",
        "primary-500" : "#FFCD66",
        "secondary-400" : "#F8F4E8",
        "secondary-500" : "#FFC132",
      },
      backgroundImage: (theme) => ({
        "grandient-yellowred" : "linear-grandient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png)"
      }),
      fontFamily:{
        dmsans:["Dm Sans", "sans-serif"],
        montserrat:["Montserrat", "sans-serif"]
      },
      content:{
        evolvetext: "url('./assets/EvolveText.png)",
        abstractwaves: "url('./assets/AbstractWaves.png)",
        sparkles: "url('./assets/Sparkles.png)",
        evolvetext: "url('./assets/Circles.png)",
      }
    },
    screens: {
      xs:"480px",
      sm:"780px",
      md:"1060px",

    }
  },
  plugins: [],
}


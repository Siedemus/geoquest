/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cosmic: "#000000",
        cloudy: "#FFFFFF",
        noise: "#737373",
        salt: "#0F0F0F",
      },
      backgroundSize: {
        buttonZoom: "700%",
      },
      fontFamily: {
        gabarito: ["Gabarito", "sans-serif"],
        libreFranklin: ["Libre Franklin", "sans-serif"],
      },
      backgroundImage: {
        pastelRainbow:
          "linear-gradient(139deg, rgba(240,158,167,1) 0%, rgba(246,202,148,1) 16%, rgba(250,250,190,1) 33%, rgba(244,248,190,1) 34%, rgba(193,235,192,1) 51%, rgba(199,202,255,1) 65%, rgba(205,171,235,1) 83%, rgba(246,194,243,1) 100%)",
        pastelRainbowButton:
          "linear-gradient(295deg, rgba(255,255,255,1) 0%, rgba(240,158,167,1) 43%, rgba(246,202,148,1) 45%, rgba(250,250,190,1) 47%, rgba(244,248,190,1) 49%, rgba(193,235,192,1) 51%, rgba(199,202,255,1) 53%, rgba(205,171,235,1) 55%, rgba(246,194,243,1) 56%, rgba(255,255,255,1) 100%)",
      },
      animation: {
        pastel: "pastel 8s ease infinite",
      },
      keyframes: {
        pastel: {
          "0%, 100%": {
            "background-size": "350%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "350%",
            "background-position": "center right",
          },
        },
      },
    },
  },
  plugins: [],
};

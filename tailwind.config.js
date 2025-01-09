/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: "#1b1b1b",
        light: "#fff",
        accent: "#7B00D3",
        accentDark: "#ffdb4d",
        gray: "#747474",
				amarillo: "#FFFFF9",
        gold: "#FFFCD5",
        amarillito: "#fff4e0",
        genesis: "#bd1616",
        mercurio: "#8E4FD1",
        blue: "#3B64BC",
        semillas: "#86A54F",
        viento: "#4F9FD1",
        florecer: "#FECD27",
        futuro: "#D14F6D",
        ahora: "#2C7D37"
      },
      fontFamily:{
        mr: ["var(--font-mr)"],
        in: ["var(--font-in)"]
      },
      animation:{
        roll: "roll 24s linear infinite"
      },
      keyframes:{
        roll:{
          "0%": {transform: "translateX(100%)"},
          "100%": {transform: "translateX(-100%)"}
        }
      },
      screens:{
        sxl: "1180px",
        // @media (min-width: 1180px){...}
        xs: "480px"
        // @media (min-width: 480px){...}
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
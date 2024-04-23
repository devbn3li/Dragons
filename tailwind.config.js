/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      colors: {
        Graygradiant: "#9eadb9",
        background: "#161616",
        borderColor: "#757575",
        TextColor:"#3057ba"
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'ellipse': "url('/src/assets/Ellipse 11.png')",

      }
    },
  },
  daisyui: {
    themes: [
      {
        projectTheme: {
          primary: "#2D89FF",
          secondary: "#642DFF",
          accent: "#575757",
          neutral: "#1E1E1E",
          "base-100": "#FFFFFF",
        },
      },
      // "dark",
      // "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}

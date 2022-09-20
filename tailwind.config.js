module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          base: "hsl(203, 89%, 53%)",
          dark: "hsl(203, 89%, 46%)",
          light: "hsl(203, 89%, 96%)"
        },
        gray: {
          dark: "#657786",
          light: "#AAB8C2",
          extraLight: "E1E8ED",
          lightest: "F5F8FA"
        },
        black: {
          black: "#000000",
          gradient: "linear-gradient(113.83deg, rgba(18,18,18,1) 0.59%, rgba(18,18,18,1) 99.74%)",
          footer: "rgba(24,24,24,1)",
          play: "#282828"
        },
        green: {
          spotify: "#66D36E"
        }
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        NotoSansKorean: ["NotoSansKorean"],
      },
      colors: {
        white: "#ffffff",
        black: "#000000",
        text: "#323338",
        purple: "#6161FF",
        blue: "#0060B9",
      },
      fontWeight: {
        light: "300",
        normal: "500",
        bold: "700",
      },
    },
  },
  plugins: [],
}

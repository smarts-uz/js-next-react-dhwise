module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: {
          A700_87: "#ffffff87",
          A700_6c: "#ffffff6c",
          A700: "#ffffff",
          A700_9e: "#ffffff9e",
        },
        black: { 900: "#000000", "900_87": "#00000087" },
        blue_gray: { 50: "#f1f1f1" },
        gray: { 50: "#fafafa", 200: "#f0f0f0", 900: "#141414" },
        deep_orange: { 400: "#d87d4a", "400_01": "#d87c4a" },
      },
      fontFamily: { manrope: "Manrope" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

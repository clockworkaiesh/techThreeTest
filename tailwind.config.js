/* eslint-disable no-undef */
module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        secondary: "#131229",
        primary: "rgba(217, 217, 217, 0.05)",
        "accent-green": "#41FF96",
        "accent-purple": "#B69FFF",
        "default-text": "#ffffff",
        "light-text": "rgba(255, 255, 255, 0.5)",
        "glass-green": "rgba(81, 255, 159, 0.15)",
        "glass-purple": "rgba(255, 255, 255, 0.05)",
        "glass-white": "rgba(255, 255, 255, 0.75)",
        "dark-purple": "rgba(22, 15, 46, 0.50)",
        "max-blue-purple": "#A19DFF",
        "phthalo-green": "#0F3721",
      },
    },
  },
  variants: {},
  plugins: [],
  content: ["./index.html", "./src/**/*.jsx"],
};

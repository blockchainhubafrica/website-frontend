module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: "1.20rem",
        sm: "1.20rem",
        lg: "4rem",
        xl: "6rem",
        "2xl": "10rem",
      },
    },
    colors: {
      "green-200": "#00cf8e",
      "blue-200": "#00bdff",
      "blue-400": "#0043ff",
      "blue-600": "#11163b",
      "blue-800": "#00081f",
      "gray-100": "#f8f8f8",
      "gray-400": "#cfcfcf",
      "pink-100": "#d0c4c4",
      orange: "#ff9900",
    },
    fontFamily: {
      coolvetica: ["Coolvetica", "sans-serif"],
      "open-sans": ["Open sans", "helvetica"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "768px",
          },
          "@screen md": {
            maxWidth: "992px",
          },
          "@screen lg": {
            maxWidth: "1536px",
          },
          "@screen xl": {
            maxWidth: "1800px",
          },
          "@screen 2xl": {
            maxWidth: "2160px",
          },
        },
      });
    },
  ],
};

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          200: "#00bdff",
          400: "#0043ff",
          600: "#11163b",
          800: "#00081f",
        },
        gray: {
          100: "#f8f8f8",
          400: "#cfcfcf",
        },
        green: {
          200: "#00cf8e",
        },
        pink: { 100: "#d0c4c4" },
        orange: "#ff9900",
      },
      fontFamily: {
        coolvetica: ["Coolvetica", "sans-serif"],
        "open-sans": ["Open sans", "helvetica"],
      },
    },
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
            maxWidth: "1024px",
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

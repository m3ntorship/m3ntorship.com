module.exports = {
  purge: [
    "./components/**/*.js",
    "./components/**/*.jsx",
    "./pages/**/*.js",
    "./pages/**/*.jsx",
  ],
  // important: true,
  theme: {
    fontFamily: {
      body: ["Noto Sans HK", "sans-serif"],
    },
    extend: {
      colors: {
        c000: "#ffffff",
        c100: "#254151",
        c200: "#d55342",
        c300: "#efc94c",
        c400: "#3d9c85",
        c500: "#4777ce",
        c600: "#7d8589",
        c700: "#bac9d2",
        c800: "#f0ece3",
        c900: "#1f3948",
        c1000: "#ff980061",
      },
      fontSize: {
        sm: "0.875rem", //14px
        base: "1rem", // 16px
        md: "1.0625rem", // 17px
        lg: "1.25rem", // 20px
        large: "1.375rem", // 22px
        xl: "3.125rem", //50px
        xxl: "3.75rem", //60px
        xxxl: "6.875rem", //110px
        large: "2rem",
        medium: "2.9rem",
        banner: "4.375rem", //70px
      },
      lineHeight: {
        half: "0.5",
        none: "1",
        tighter: "1.2",
        tight: "1.25",
        snug: "1.375",
        normal: "1.5",
        relaxed: "1.625",
        loose: "2",
      },
      letterSpacing: {
        widest: "0.2em",
      },
      borderWidth: {
        "6": "6px",
      },
      spacing: {
        "7": "1.75rem",
        "28": "7rem",
      },
    },
  },
  corePlugins: {
    textDecoration: false,
    container: false,
  },
  variants: {},
  plugins: [],
};

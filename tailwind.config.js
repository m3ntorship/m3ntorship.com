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
        c000: "#ffffff", //white
        c100: "#000000", // black
        c200: "#66f28d",
        c300: "#2D5BFF",
        c400: "rgba(102, 242, 141, 0.61)",
        c500: "rgba(0, 0, 0, 0.38)",
        c600: "rgba(0, 0, 0, 0.51)",
        c700: "rgba(0, 0, 0, 0.7)",
        c800: "rgba(0, 0, 0, 0.96)",
        c900: "#0A0A0A",
        c1000: "rgba(238, 239, 240, 0.2)",
        c1100 :"rgba(196, 196, 196, 0.29)"
      },
      fontSize: {
        xxs: "0.875rem", //14px
        xs: "1rem", // 16px
        sm: "1.25rem", // 20px
        base: "1.5rem", // 24px
        md: "1.75rem", // 28px
        lg: "2.125rem", //34px
        xlg: "2.375rem", //38px
        xxlg: "2.5rem", //40px
        xxxlg: "3.75rem", //60px
        super: "4.375rem", //70px
        ultra: "5rem", //80px
        giant: "7.75rem", //124px
      },
      spacing: {
        smBtn: "1.5rem 2.5rem", // 16px 40px
        baseBtn: "1.5rem 3.5rem", // 16px 56px
        mdBtn: " 1.5rem 4rem", // 16px 64px
        lgBtn: "1.5rem 4.5rem", // 16px 72px
        vlgBtn: "1.5rem 6.5rem", // 16px 104px
        giantBtn: "1.5rem 18rem"
      },
      lineHeight: {
        body: "1.2",
      },
    },
  },
  corePlugins: {
    container: false,
  },
  variants: {},
  plugins: [],
};

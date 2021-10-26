module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./safelist.txt"],
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      nav: "#17052F",
    }),
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    fontSize: {
      "3xl": ["32px", "44px"],
      "2xl": ["24px", "36px"],
      xl: ["21px", "32px"],
      lg: ["18px", "22px"],
      base: ["15px", "22px"],
      sm: ["13px", "18px"],
      xs: ["11px", "16px"],
    },
  },
  variants: {
    extend: {},
  },
};

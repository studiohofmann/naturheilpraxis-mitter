import Typography from "typography";

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.45,
  scaleRatio: 2.2,
  googleFonts: [
    {
      name: "Archivo Narrow",
      styles: ["600"],
    },
    {
      name: "Roboto",
      styles: ["400"],
    },
  ],
  headerFontFamily: ["Archivo Narrow", "sans-serif"],
  bodyFontFamily: ["Roboto", "sans-serif"],
});

typography.injectStyles();

export default typography;

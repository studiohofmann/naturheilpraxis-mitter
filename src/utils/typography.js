import Typography from "typography";

const theme = {
  baseFontSize: "17px",
  baseLineHeight: "26px",
  scaleRatio: 2,
};

const typography = new Typography(theme);
const { scale, rhythm } = typography;

const { fontSize, lineHeight } = scale(0);
// fontSize = 1rem
// lineHeight = 1.52941rem

const one = rhythm(1);
// one = 1.52941rem

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],

  theme: {
    extend: {
      fontFamily: {
        paragraph: ["'Barlow Condensed', sans-serif"],
        heading: ["'Barlow Condensed', sans-serif"],
      },
      fontWeight: {
        bold: "700",
      },
      colors: {
        text: "#586f6b",
        linkbackground: "#D8EAF2",
        linktext: "#9BBCC9",
        gray: "edede9",
        yellow: "#FAF2C6",
        green: "#DAFCC7",
        lightgray: "#FAF0E6",
      },
    },

    screens: {
      tablet: "640px",
      md: "768px",
      laptop: "1024px",
      desktop: "1280px",
      "2xl": "1536px",
    },
  },
};

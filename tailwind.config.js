/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],

  theme: {
    extend: {
      fontFamily: {
        paragraph: ["'Outfit', sans-serif"],
        heading: ["'Outfit', sans-serif"],
      },
      fontWeight: {
        bold: "700",
        paragraph: "300",
      },

      colors: {
        textcolor: "#6A8D9C",
        linkbackgroundcolor: "#CBDDE3",
        gray: "#E3E3D8",
        yellow: "#E8DBAE",
        green: "#E1F0DC",
        creme: "#EDEDE4",
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

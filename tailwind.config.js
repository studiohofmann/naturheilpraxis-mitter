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
        textcolor: "#3B434A",
        linkbackgroundcolor: "#99BA99",
        gray: "#DBDBDB",
        yellow: "#D6D49F",
        green: "#E6E6E6",
        blue: "#6F95B0",
        menu: "#E6E6E6",
      },
    },

    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
};

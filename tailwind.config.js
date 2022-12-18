/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        Snow: "#FFFFFF",
        Purple: "#793EF5",
        X: "#72F500",
        Dark: "#1E1E1E",
        Yellow: "#FFC33F",
        Red: "#FB5159",
        Blue: "#2153FF",
        Gray: {
          Gray50: "#E2E6EB",
          Gray10: "#F1F4F8",
        },
        Gray1: "#333333",
        Gray6: "#F2F2F2",
        Grey: {
          Light: "#F6F5F9",
        },
        FieldStroke: "#CECECE",
      },
      boxShadow: {
        HomeSideBar: "0px 12px 34px rgba(0, 0, 0, 0.04)",
      },
      gridTemplateColumns: {
        HomeGrid: "1.2fr 4.8fr",
        Grid1: "1fr 3fr",
      },
      screens: {
        SmallPhones: { min: " 220px", max: "380px" },
        // => @media (min-width: 320px) { ... }

        RangeForPhone: { min: "200px", max: "1023px" },
        // => @media (min-width: 200px) and (max-width:1023px) { ... }

        // MediumPhones: "375px",
        // // => @media (min-width: 375px) { ... }

        LargePhones: { min: "425px", max: "767px" },
        // => @media (min-width: 425px) { ... }

        Tablet: { min: "768px", max: "1023px" },
        // => @media (min-width: 768px) { ... }

        Laptop: { min: "1024px", max: "1439px" },
        // => @media (min-width: 1024px) { ... }

        LargeLaptop: "1440px",
        // => @media (min-width: 1440px) { ... }

        "4kDesktop": "2560px",
        // => @media (min-width: 2560px) { ... }
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      mixBlendMode: {
        // Ensure these are included
        normal: "normal",
        multiply: "multiply",
        screen: "screen",
        overlay: "overlay",
        darken: "darken",
        lighten: "lighten",
        colorDodge: "color-dodge",
        colorBurn: "color-burn",
        hardLight: "hard-light",
        softLight: "soft-light",
        difference: "difference",
        exclusion: "exclusion",
        hue: "hue",
        saturation: "saturation",
        color: "color",
        luminosity: "luminosity",
      },

      fontFamily: {
        Dimentions: ["Dimentions", "sans-serif"],
      },
      fontFamily: {
        "smallest-pixel": ["SmallestPixel", "sans-serif"],
      },
      fontFamily: {
        HelveticaNowDisplayMedium: ["HelveticaNowDisplayMedium", "sans-serif"],
      },

      screens: {
        "max-sm": { max: "640px" },
        "max-md": { max: "768px" },
        "max-lg": { max: "1024px" },
        "max-xl": { max: "1280px" },
        "max-2xl": { max: "1536px" },
      },
    },
  },
  plugins: [],
};

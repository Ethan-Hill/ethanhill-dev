import type { Config } from "tailwindcss";
const {
  iconsPlugin,
  getIconCollections,
} = require("@egoist/tailwindcss-icons");

export default <Partial<Config>>{
  plugins: [
    iconsPlugin({
      // Select the icon collections you want to use
      collections: getIconCollections(["mdi", "uil"]),
    }),
  ],
  theme: {
    fontFamily: {
      sans: "'Be Vietnam Pro'",
    },
    extend: {
      colors: {
        primaryBg: "#1E1E1E",
        headerBg: "#181818",
      },
      transitionProperty: {
        height: "height",
      },
      animation: {
        text: "text 3s ease infinite",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
};

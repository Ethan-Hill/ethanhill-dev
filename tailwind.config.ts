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
    },
  },
};

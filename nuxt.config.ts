// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@vueuse/nuxt",
    "nuxt-swiper",
  ],

  build: {
    transpile: ["gsap"],
  },

  css: ["~/assets/css/main.css"],

  googleFonts: {
    preload: false,
    families: {
      "Be+Vietnam+Pro": true,
    },
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
    },
  },
});

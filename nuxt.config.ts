// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@vueuse/nuxt",
    "nuxt-swiper",
    "@morev/vue-transitions/nuxt",
    "nuxt-gtag",
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

    // global transition
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },

  gtag: {
    id: "G-QPVY7WLSMV",
  },
});

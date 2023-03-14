// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@vueuse/nuxt"],

  googleFonts: {
    preload: true,
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

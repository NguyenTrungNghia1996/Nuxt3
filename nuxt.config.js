// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
    head: {
      script: [
        {
          src: "https://www.youtube.com/player_api",
        },
      ],
    },
  },
  css: ["@/assets/main.css"],
  modules: ["@unocss/nuxt", "@pinia/nuxt", "@nuxt/devtools", "@vueuse/nuxt", "nuxt-icon", "@element-plus/nuxt"],
  buildModules: ["@nuxtjs/google-fonts"],
  pinia: {
    autoImports: [
      ["defineStore", "acceptHMRUpdate"], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  imports: {
    dirs: ["stores"],
  },
  googleFonts: {
    families: {
      // Specify the fonts you want to use
      // Example:
      Roboto: true,
      'Open+Sans': {
        wght: [400, 700] // Specify the font weights to load
      }
    },
    display: 'swap' // Optional: Specify the font-display property
  }
})

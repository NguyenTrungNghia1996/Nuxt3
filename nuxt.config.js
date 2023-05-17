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
  modules: ["@unocss/nuxt", '@pinia/nuxt',"@nuxt/devtools","@vueuse/nuxt",'nuxt-icon','@element-plus/nuxt'],
  pinia: {
    autoImports: [
      ['defineStore', 'acceptHMRUpdate'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  imports: {
    dirs: ['stores'],
  },
});

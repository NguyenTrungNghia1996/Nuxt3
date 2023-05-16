// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@unocss/nuxt", '@pinia/nuxt',"@nuxt/devtools","@vueuse/nuxt",'nuxt-icon'],
  pinia: {
    autoImports: [
      ['defineStore', 'acceptHMRUpdate'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  imports: {
    dirs: ['stores'],
  },
});

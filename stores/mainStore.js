import { defineStore } from "pinia";
export const useMainStore = defineStore('main', {
  state: () => ({
    counter: 0,
    name: 'Eduardo',
  }),
  actions: {
    reset() {
      this.counter = 0
    },
    setCounter(value) {
      this.counter = value
    }
  },
  getters: {
    doubleCounter() {
      return this.counter * 2
    },
    doubleCounterPlusOne() {
      return this.doubleCounter + 1
    },
  },

})
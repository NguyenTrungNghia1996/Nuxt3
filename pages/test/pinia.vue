<template>
  <div class="flex justify-center">
    <div>
      <p class="text-center">Pinia</p>
      <div class="flex">
        <input type="number" v-model="counter" placeholder="counterPinia" min="1" />
        <button type="button" @click="setCounter">Set!</button>
        <button type="button" @click="reset">Resset!</button>
      </div>

      <p>Soure: {{ mainStore.counter }} // {{ mainStore.name }}</p>
      <p>Getters: doubleCounter: {{ mainStore.doubleCounter }}</p>
      <p>Getters: doubleCounterPlusOne: {{ mainStore.doubleCounterPlusOne }}</p>
    </div>
  </div>
</template>
<script setup>
const mainStore = useMainStore()
const counter = ref(1)
const setCounter = () => {
  mainStore.setCounter(counter.value)
}
const reset = () => {
  mainStore.reset()
  counter.value = 0
}
</script>

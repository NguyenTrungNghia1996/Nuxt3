<template>
  <div>
    {{ model_percent }}
    <Youtube :idVideo="currentVideo" :key="currentVideo"  v-model:model_percent="model_percent"/>
    <div @click="nextVideo">next</div>
  </div>
</template>
<script setup>
import { watchArray } from "@vueuse/core"

const model_percent = ref(0)
const list_video = ref(["pbeHdo18Jig", "iuc2n00FetY","BJqN9pt0jU8","_u-pFE4syUw"])
const idCurrentVideo = ref(0)
const currentVideo = computed(() => {
  if (list_video.value[idCurrentVideo.value] !== undefined) {
    return list_video.value[idCurrentVideo.value]
  } else {
    idCurrentVideo.value = 0
    return list_video.value[0]
  }
})
const nextVideo = () => {
  idCurrentVideo.value++
}
watch(model_percent, (newValue) => {
  if (newValue.toFixed() == 100) {
    idCurrentVideo.value++
  }
})
</script>


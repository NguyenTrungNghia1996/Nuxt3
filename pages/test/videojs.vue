<template>
  <div class="">
    <p>https://streaming.lmoocs.gov.la/vod/_defist_/smil:mooclao/site_2/Video/5da75f7a-3cd5-452a-8aac-c48ae93ce36f.smil/playlist.m3u8 </p>
     {{ model_percent }}%
    <input v-model="url" type="text" placeholder="Basic Input" />
    <ClientOnly>
      <Videojs class="w-1/2 aspect-video mx-auto" :options="videoOptions" :key="url" v-model:model_percent="model_percent"/>
    </ClientOnly>
  </div>
</template>
<script setup>
const model_percent = ref(0)
const url = ref("")
const videoOptions = computed(() => {
  return {
    autoplay: true,
    controls: true,
    sources: [
      {
        src: url.value,
      },
    ],
  }
})
</script>

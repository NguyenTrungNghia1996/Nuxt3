<template>
  <div>
    <video
      ref="videoPlayer"
      class="video-js !aspect-video !w-full !h-full"
    />
  </div>
</template>
<script setup>
import videojs from "video.js";
import qualitySelector from "videojs-hls-quality-selector";
import qualityLevels from "videojs-contrib-quality-levels";
if (!videojs.getPlugin("qualityLevels")) {
  videojs.registerPlugin("qualityLevels", qualityLevels);
}
if (!videojs.getPlugin("hlsQualitySelector")) {
  videojs.registerPlugin("hlsQualitySelector", qualitySelector);
}
import("video.js/dist/video-js.css");
// import("videojs-hls-quality-selector/dist/videojs-hls-quality-selector.css");
const props = defineProps({
  options: {
    type: Object,
    default: {},
    required:true
  },
  model_percent: {
    type: Number,
    default: 0,
  }
});

const videoPlayer = ref();
const isPlaying = ref(false);
let intervalId = null;
const time = ref(0);
const duration = ref(0);
let player;
const percent_local = computed(() => {
  let data =((time.value / duration.value) * 100)
  return isNaN(data) ? 0 : data
})
const emit = defineEmits(["update:model_percent"]);
watch(percent_local, (newValue) => {
  emit("update:model_percent", Math.ceil(newValue));
})
watch(isPlaying, () => {
  if (intervalId !== null) {
    clearInterval(intervalId);
  }
  if (isPlaying.value) {
    intervalId = setInterval(() => {
      if (
        player.cache_.currentTime.toFixed() > 0 &&
        player.cache_.duration.toFixed() > 0
      ) {
        time.value = player.cache_.currentTime.toFixed();
        duration.value = player.cache_.duration.toFixed();
      }
    }, 1000);
  } else {
    player.stop();
  }
});

onMounted(async () => {
  player = videojs(videoPlayer.value, props.options, () => {
    player.hlsQualitySelector({ displayCurrentQuality: true });
    // player.play();
    isPlaying.value = true;
  });
});
onBeforeUnmount(() => {
  if (player) {
    player.dispose();
  }
});
</script>

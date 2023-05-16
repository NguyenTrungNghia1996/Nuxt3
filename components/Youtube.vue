<template>
  <div>
    <!-- {{ time }}//{{ duration }}//{{ isPlaying }}//{{ percent_local }} -->
    <div class="w-full aspect-video" :class="props.class" ref="playerIframe"></div>
  </div>
</template>
<script setup>
const props = defineProps({
  idVideo: {
    type: String,
    default: "",
    required: true,
  },
  model_percent: {
    type: Number,
    default: 0,
  },
  class: {
    type: String,
    default: "",
  }
});
const emit = defineEmits(["update:model_percent"]);

const isPlaying = ref(false);
let intervalId = null;
const time = ref(0);
const duration = ref(0);
onMounted(() => {
  onYouTubePlayerAPIReady(props.idVideo);
});
const player = ref(null);
const playerIframe = ref(null);
const onYouTubePlayerAPIReady = (id) => {
  player.value = new YT.Player(playerIframe.value, {
    width: "100%",
    height: "auto",
    videoId: id,
    playerVars: { autoplay: 1 },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
};
const onPlayerReady = (event) => {
  event.target.playVideo();
};
// when video ends
const onPlayerStateChange = (event) => {
  if (event.data == 1) {
    isPlaying.value = true;
  }
  // console.log(event.target);
  // if (event.data === 0) {
  //   $("#player").css("display", "none");
  // }
};
watch(isPlaying, () => {
  if (intervalId !== null) {
    clearInterval(intervalId);
  }
  if (isPlaying.value) {
    intervalId = setInterval(() => {
      if (
        (player.value.getCurrentTime()).toFixed() > 0 &&
        (player.value.getDuration()).toFixed() > 0
      ) {
        time.value = (player.value.getCurrentTime()).toFixed();
        duration.value = (player.value.getDuration()).toFixed();
      }
    }, 1000);
  } else {
    player.stopVideo();
  }
});
const percent_local = computed(() => {
  let data = ((time.value / duration.value) * 100)
  return isNaN(data) ? 0 : data
});
watch(percent_local, (newValue) => {
  emit("update:model_percent", Math.ceil(newValue));
});
</script>

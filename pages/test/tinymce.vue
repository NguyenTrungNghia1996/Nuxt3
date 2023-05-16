<template>
  <div class="p10">
    <RickEditor height="400" v-model="editorData" />
  </div>
</template>
<script setup>
const editorData = ref("<p>Content of the editor.</p>");
watch(editorData, (newValue) => {
  console.log(newValue);
});
</script>

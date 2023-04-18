<template>
  <div>
    <iframe class="frame-wrap" :src="classUrl" frameborder="0" allowfullscreen="true"> </iframe>
  </div>
</template>
<script setup lang="ts">
import { ref,onMounted } from "vue";
import { fetchClassUrl } from "@/api/request/index.js";
const classUrl = ref("");
const timeTableId = window.location.search.split("=")[1];
async function getClassUrl(timeTableId) {
  const res = await fetchClassUrl(timeTableId);
  classUrl.value = res?.url ? res.url : "http://www.bing.com";
}
getClassUrl(timeTableId);
onMounted(()=>{
  const frame = document.querySelector('iframe');
  console.log(frame)
  frame.allow="camera *; microphone *; autoplay *; midi *; encrypted-media *;"
})
</script>
<style scoped>
.frame-wrap {
  width: 99vw;
  height: 100vh;
  margin: 0 auto;
}
</style>

<template>
  <div>
    <iframe class="frame-wrap" :src="classUrl" frameborder="0"> </iframe>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { fetchClassUrl } from "@/api/request/index.js";
const classUrl = ref("");
const timeTableId = window.location.search.split("=")[1];
async function getClassUrl(timeTableId) {
  const res = await fetchClassUrl(timeTableId);
  classUrl.value = res?.url ? res.url : "http://www.bing.com";
}
getClassUrl(timeTableId);
</script>
<style scoped>
.frame-wrap {
  width: 99vw;
  height: 100vh;
  margin: 0 auto;
}
</style>

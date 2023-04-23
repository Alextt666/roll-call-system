<template>
  <a class="roll-call"
  :href=url
  target="_blank"
  >点名</a>
</template>
<script setup lang="ts">
import {ref} from 'vue';
const url = ref('');
const timeTableId = window.location.search.split("=")[1];
url.value = `https://h5.classkid.net/teacherDesk?timetableId=${timeTableId}`
</script>
<style scoped>
 .roll-call{
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 999;
    height: 2rem;
    line-height: 2rem;
    box-shadow: 0 0 2px #383838;
    width: 5rem;
    background: rgb(97, 94, 226);
    border-radius: 5px;
    color: white;
    cursor: pointer;
 }
</style>

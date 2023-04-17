<template>
  <a class="roll-call"
  @click="handleClick"
  :href=url
  target="_blank"
  >点名</a>
</template>
<script setup>
import {ref} from 'vue';
const url = ref('');
const timeTableId = window.location.search.split("=")[1];
url.value = `http://192.168.1.19:8080/rollcall/index.html?timetableId=${timeTableId}`
</script>
<style scoped>
 .roll-call{
    position: fixed;
    right: 0;
    top: 0;
    z-index: 999;
    height: 100vh;
    width: 3rem;
    background: black;
    color: white;
    padding-top: 10%;
    cursor: pointer;
 }
</style>

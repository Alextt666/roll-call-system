<template>
  <div class="home-wrapper">
    <div class="nav">
      <NavBar :ClassList="ClassList"/>
    </div>
  </div>
</template>
<script setup>
import NavBar from "@/components/Nav/NavBar.vue";
// 获取学校信息
const ClassList = ['三年级五班','三年级六班','三年级八班']
</script>
<style>
.home-wrapper {
  background-color: #ccc;
  width: 100vw;
  height: 100vh;
  padding: 2rem;
  box-sizing: border-box;
}
</style>

<template>
  <div class="home-wrapper">
    <div class="nav">
      <NavBar :ClassList="ClassList" />
    </div>
  </div>
</template>
<script setup>
import NavBar from "@/components/Nav/NavBar.vue";
import { reactive } from "vue";
import { store } from "@/store/index";
import { fetchChartsAllData } from "@/utils/fetchTool";
// 获取学校信息
const ClassList = reactive([]);
const timeTableId = window.location.search.split("=")[1];
store.setTableId(timeTableId);
function toClassList() {
  store.allSchool.forEach((item) => {
    const { schoolName, className } = item;
    ClassList.push(`${schoolName}${className}`);
  });
}
async function init() {
  await fetchChartsAllData();
  toClassList();
}
init();
</script>
<style>
.home-wrapper {
  width: 100vw;
  height: 100vh;
  padding: 2rem;
  box-sizing: border-box;
}
</style>

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
import { fetchRoster } from "@/api/request/index";
import { store } from "@/store/index";
import { ElMessage } from "element-plus";
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
  try {
    const tableId = store.tableId;
    if(!tableId){
      ElMessage({
      message: "Server Error! 缺少tabldId",
      type: "warning",
    });
    }
    const resData = await fetchRoster(tableId);
    if (resData?.rows.length != 0) {
      // 存入
      resData.rows.forEach((item) => store.updateSchoolList(item));
      toClassList();
    } else {
      ElMessage({
        message: "当前获取学校为空! 请检查TimeTableID.",
        type: "warning",
      });
    }
  } catch (error) {
    ElMessage({
      message: "Server Error! " + error,
      type: "warning",
    });
  }
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

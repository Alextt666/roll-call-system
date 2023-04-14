<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <template v-for="item in ClassList">
      <el-tab-pane :label="item" :name="item"
        ><Content :msg="item" :schoolIndex="schoolIndex"
      /></el-tab-pane>
    </template>
  </el-tabs>
</template>
<script lang="ts" setup>
import { ref, watch } from "vue";
import type { TabsPaneContext } from "element-plus";
import Content from "@/components/Content/Content.vue";
import { store } from "@/store/index";
import { ElMessage } from "element-plus";
import { fetchTagList, fetchData } from "@/api/request";

// 获取tabs
const props = defineProps({
  ClassList: Array<string>,
});

const activeName = ref("");
let schoolIndex = ref('0');
watch(
  () => props.ClassList[0],
  (newValue) => {
    activeName.value = newValue;
  },{immediate:true}
);
// 获取全班图标数据
async function fetchChartsData(id) {
  const res = await fetchData(id);
  try {
    if (res?.data?.classData) {
      // 班级得分
      store.setClassScore(res.data.classData);
    }
    //  个人排行
    if (res?.data?.studentRanking) {
      store.setStudentRanking(res.data.studentRanking);
    }
  } catch (error) {
    ElMessage({
      type: "warning",
      message: "DataStructure has an Error! Please Check Console! ",
    });
    console.log(error);
  }
}

fetchChartsData(store.tableId);
const handleClick = (tab: TabsPaneContext, event: Event) => {
  // console.log(tab.index, event);
  schoolIndex.value = tab.index;
};
</script>
<style>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>

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
import { fetchChartsData } from "@/utils/fetchTool";

// 获取tabs
const props = defineProps({
  ClassList: Array<string>,
});

const activeName = ref("");
let schoolIndex = ref("0");
watch(
  () => props.ClassList[0],
  (newValue) => {
    activeName.value = newValue;
  },
  { immediate: true }
);
fetchChartsData(store.tableId);
const handleClick = (tab: TabsPaneContext, event: Event) => {
  schoolIndex.value = tab.index;
};
</script>
<style>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  /* color: #6b778c; */
  font-size: 32px;
  font-weight: 600;
}
.demo-tabs > .el-tabs__header .el-tabs__item{
  font-size: 1.5rem;
}
</style>

<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <template v-for="item in ClassList">
      <el-tab-pane :label="item" :name="item"><Content :msg="item"/></el-tab-pane>
    </template>
  </el-tabs>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import type { TabsPaneContext } from "element-plus";
import Content from "@/components/Content/Content.vue";

// 获取tabs
const props = defineProps({
  ClassList: Array<string>,
});

// 当前激活
const activeName = ref(props.ClassList[0]);

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
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

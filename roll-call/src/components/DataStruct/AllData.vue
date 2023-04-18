<template>
  <div class="class-items">
    <template v-for="(item, index) in schoolListDetail">
      <div
        :class="[
          'class-item',
          selectedSchool == index ? 'class-item-active' : '',
        ]"
        @click="schoolChangeEffect(index)"
      >
        {{ item.className }}
      </div></template
    >
  </div>
  <Chart :selectedItem="selectedSchool" />
  <Detail :selectedItem="selectedSchool" />
</template>
<script setup>
import { ref } from "vue";
import Chart from "../Charts/Chart.vue";
import Detail from "../Detail/Detail.vue";
import { store } from "@/store/index";
const schoolListDetail = store.classScore;
let selectedSchool = ref(0);
function schoolChangeEffect(index) {
  selectedSchool.value = index;
}
</script>
<style scoped lang="scss">
.class-items {
  display: flex;
  justify-content: flex-start;
  margin-top: 0.5rem;
  min-height: 1.5rem;
  gap: 1.2rem;
  cursor: pointer;
  color: $text-gray;
}
.class-item-active {
  color: $text-dark;
  border-bottom: 1px solid $text-dark;
}
</style>

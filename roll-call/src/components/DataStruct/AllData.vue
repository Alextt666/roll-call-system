<template>
  <div class="class-items">
    <template v-for="(item, index) in schoolList">
      <div
        :class="[
          'class-item',
          selectedSchool == index ? 'class-item-active' : '',
        ]"
        @click="schoolChangeEffect(item, index)"
      >
        艳自拔小学三年五班
      </div></template
    >
  </div>
  <Chart />
  <Detail />

</template>
<script setup>
import { reactive, ref } from "vue";
import Chart from "../Charts/Chart.vue";
import Detail from '../Detail/Detail.vue';
const schoolList = reactive([1, 2, 3]);
let selectedSchool = ref(0);
function schoolChangeEffect(item, index) {
  selectedSchool.value = index;
}
</script>
<style scoped lang="scss">
.class-items {
  display: flex;
  justify-content: space-around;
  margin-top: 0.5rem;
  min-height: 1.5rem;
  cursor: pointer;
  color: $text-gray;
}
.class-item-active {
  color: $text-dark;
  border-bottom: 1px solid $text-dark;
}

</style>

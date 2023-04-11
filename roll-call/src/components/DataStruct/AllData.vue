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
  <div class="detail-title">奖杯明细：</div>
  <div class="detail-content">
    <template v-for="item in 10">
      <div class="detail-item">张树根 造型表现佳*15</div>
    </template>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import Chart from "../Charts/Chart.vue";
const schoolList = reactive([1, 2, 3]);
let selectedSchool = ref(999);
function schoolChangeEffect(item, index) {
  selectedSchool.value = index;
}
</script>
<style scoped lang="scss">
.class-items {
  display: flex;
  justify-content: space-around;
  margin-top: 0.5rem;
  cursor: pointer;
  color: $text-gray;
}
.class-item-active {
  color: $text-dark;
  border-bottom: 1px solid $text-dark;
}

.detail-title {
  margin: 10px 0 5px 10px;
  font-weight: normal;
  color: $text-dark;
}

.detail-content{
  background-color: $lightest-gray;
  margin: 10px;
  padding: 15px;
  border-radius: 10px;
  max-height: 5.2rem;
  overflow: scroll;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-gap: 5px;
  .detail-item{
    text-align: center;
  }
}
</style>

<template>
  <div class="top-three">
    <template v-for="(item, index) of otherList" :key="item.studentId">
      <div class="three-text">
        <div>{{ index + 4 }}</div>
        <div>
          <img
            src="@/assets/imgs/boy.svg"
            alt="avatar"
            class="three-text-img"
          />
        </div>
        <div>{{ item.studentName }}</div>
        <div>{{ item.className }}</div>
        <div>{{ item.count }}</div>
      </div>
    </template>
  </div>
</template>
<script setup>
import { store } from "@/store/index";
const otherList = store.studentRanking.slice(2, -1);
</script>
<style lang="scss" scoped>
.top-three {
  max-height: 21.8rem;
  min-height: 14rem;
  overflow: scroll;
  overflow-x: hidden;
  .three-text {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 2fr 1fr;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 10px;
    border-top: 1px solid #ccc;
    .three-text-img {
      width: 2rem;
    }
  }
}
</style>

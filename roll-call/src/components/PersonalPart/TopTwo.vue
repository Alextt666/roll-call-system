<template>
  <div class="top-two">
    <div>排名</div>
    <div>头像</div>
    <div>姓名</div>
    <div>班级</div>
    <div>奖杯数</div>
  </div>
</template>
<script setup></script>
<style scoped lang="scss">
.top-two {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 2fr 1fr;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;
  background-color: $lightest-gray;
  margin-right: 1rem;
}
</style>

<template>
  <div class="content">
    <template v-for="item in studentList">
      <div @click="handleEmitStudentInfo(item)" class="content-item">
        <img class="content-img" :src="item.avatar" alt="avator" />
        <div class="content-name">{{ item.studentName }}</div>
      </div>
    </template>
  </div>
  <div class="total">共计 {{ studentList.length }}人</div>
</template>
<script setup>
const props = defineProps({
  studentList: Array,
});
const emit = defineEmits(["emitStudentInfo"]);
function handleEmitStudentInfo(item) {
  emit("emitStudentInfo", item);
}
</script>
<style lang="scss">
::-webkit-scrollbar {
  background: transparent;
}
.content {
  width: 100%;
  height: 75vh;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(10, 1fr);
  row-gap: 15px;
  align-content: flex-start;
  overflow: scroll;
  .content-item {
    cursor: pointer;
    min-height: 6.5rem;
    height: 9rem;
    .content-img {
      width: 6.4rem;
    }
    .content-name {
      font-size: 1.5rem;
    }
  }
}
.total {
  position: fixed;
  z-index: 998;
  font-size: 1rem;
  font-weight: 600;
  top: 5%;
  right: 5%;
}
</style>

<template>
  <div class="content">
    <template v-for="item in studentList" >
      <div @click="handleEmitStudentInfo(item)" class="content-item">
        <img class="content-img" :src="item.avatar" alt="avator" /> 
        <div class="content-name">{{ item.studentName }}</div>
      </div>
    </template>
  </div>
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
  gap: 20px;
  grid-template-columns: repeat(10, 1fr);
  overflow: scroll;
  .content-item {
    cursor: pointer;
    max-height: 6.5rem;
  }
  .content-img {
    width: 64px;
  }
  .content-name {
    font-size: 1rem;
  }
}
</style>

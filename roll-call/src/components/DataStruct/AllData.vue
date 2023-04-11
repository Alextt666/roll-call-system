<template>
  <div class="class-items">
    <template v-for="(item,index) in schoolList">
      <div :class="['class-item', selectedSchool == index ? 'class-item-active':'']" @click="schoolChangeEffect(item,index)">艳自拔小学三年五班</div></template
    >
  </div>
</template>
<script setup>
import {reactive,ref} from 'vue';
const schoolList = reactive([1,2,3]);
let selectedSchool = ref(999)
function schoolChangeEffect(item,index){
  selectedSchool.value = index;
}
</script>
<style scoped lang="scss">
.class-items {
  border: 1px solid black;
  display: flex;
  justify-content: space-around;
  cursor: pointer;
  color: $text-gray;
}
.class-item-active{
  color: $text-dark;
  border-bottom: 1px solid $text-dark;
}
</style>

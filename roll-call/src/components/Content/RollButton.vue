<template>
  <button :class="['dialog-footer-btn',btnText == '评 价'? 'evaluate':'']">
    <div class="btn-text">{{ btnText }}</div>
  </button>
</template>
<script setup>
const props = defineProps({
  btnText: String,
});
</script>
<style lang="scss" scoped>
.dialog-footer-btn {
  width: 100px;
  height: 38px;
  box-sizing: border-box;
  background-color: $btn-red;
  color: $light-color;
  text-align: center;
  font-weight: bold;
  .btn-text {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.evaluate {
  background-color: $info-color;
  margin-left: 5px;
}
</style>

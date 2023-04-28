<template>
  <div class="detail-item">
    <div class="item-tag">{{ item.studentLabel }}:</div>
    <div class="item-name">
      <template v-for="(student,index) in item.students">
        <div class="name">{{ student + (index < item.students.length -1 ? "、" : '') || "无" }}</div>
      </template>
      <div style="display: flex; align-items: center; justify-content: center">
        <div class="tag-count">获得</div>
        <div class="count">
          {{ `${item.studentLabel}+${item.studentLabelCount}` }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>

const props = defineProps({
  item: Object,
});

</script>
<style scoped lang="scss">
.detail-item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;

  .item-tag {
    font-size: 1rem;
    font-weight: normal;
    min-width: 4.625rem;
  }
  .item-name {
    // max-width: 18rem;
    display: flex;
    justify-content: flex-start;
    // column-gap: 0.5rem;
    flex-wrap: wrap;
    padding-left: 1rem;
    .name {
      color: $info-color;
      font-size: 1rem;
      min-width: 2.25rem;
      // width: 4rem;
      min-height: 1.5rem;
      line-height: 1.5rem;
      // margin-left: 5px;
      padding-top: 3px;
    }
    .tag-count {
      font-size: smaller;
      margin-left: 5px;
      padding-top: 2px;
      min-height: 1.5rem;
      line-height: 1.5rem;
    }
    .count {
      font-size: smaller;
      box-shadow: 0 0 10px $light-gray;
      margin-left: 12px;
      padding-top: 2px;
      padding: 6px;
      border-radius: 5px;
    }
  }
}
</style>

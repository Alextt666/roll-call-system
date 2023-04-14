<template>
  <div class="detail-title">奖杯明细：</div>
  <div :class="['detail-content', isTextMore ? 'detail-content-more' : '']">
    <template v-for="item in awardDetailList">
      <div class="detail-item">
        <div class="item-tag">{{ item.studentLabel }}:</div>
        <div class="item-name">
          <template v-for="student in item.students">
            <div class="name">{{ student || '无' }}</div>
          </template>
          <div class="tag-count">获得</div>
          <div class="count">{{`${item.studentLabel}+${item.studentLabelCount}`}}</div>
        </div>
      </div>
    </template>
  </div>
  <transition name="text-more" mode="">
    <div class="more-btn" v-if="!isTextMore">
      <div @click="clickMoreEffect">查看更多</div>
    </div>
  </transition>
</template>
<script setup>
import { ref, reactive, watch } from "vue";
import { store } from "@/store/index";

const props = defineProps({
  selectedItem: Number,
});
const isTextMore = ref(false);
let awardDetailList = reactive([]);
watch(
  () => props.selectedItem,
  (newValue) => {
    awardDetailList = store.classScore[newValue].detail;
  },
  { immediate: true }
);
const clickMoreEffect = () => {
  isTextMore.value = true;
};
</script>
<style scoped lang="scss">
// more结束
.text-more-enter-active,
.text-more-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.text-more-enter-from,
.text-more-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

.detail-title {
  margin: 10px 0 5px 10px;
  font-weight: normal;
  color: $text-dark;
}

.detail-content {
  background-color: $lightest-gray;
  margin: 10px;
  padding: 15px;
  border-radius: 10px;
  max-height: 5.5rem;
  min-height: 5rem;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 5px;
  .detail-item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: center;

    .item-tag {
      font-size: normal;
      font-weight: normal;
      width: 4.625rem;
    }
    .item-name {
      max-width: 18rem;
      display: flex;
      justify-content: flex-start;
      column-gap: 0.5rem;
      flex-wrap: wrap;
      padding-left: 1rem;
      .name {
        color: $info-color;
        font-size: smaller;
        min-width: 2.25rem;
        width: 2.25rem;
        min-height: 1.5rem;
        line-height: 1.5rem;
        margin-left: 5px;
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
        margin-left: 5px;
        padding-top: 2px;
        padding: 6px;
        border-radius: 5px;
      }
    }
  }
}
.more-btn {
  text-align: center;
  height: 2rem;
  font-weight: 400;
  font-size: 0.8rem;
  cursor: pointer;
  div {
    margin: 0 auto;
    margin-top: 20px;
    width: 6rem;
    box-shadow: 0 0 5px $light-gray;
    height: 1.5rem;
    line-height: 1.5rem;
  }
}
.detail-content-more {
  min-height: 12.6rem;
  max-height: 15.2rem;
  overflow: scroll;
  overflow-x: hidden;
}
</style>

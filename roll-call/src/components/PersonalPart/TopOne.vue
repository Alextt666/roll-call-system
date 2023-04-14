<template>
  <div class="top-one">
    <div class="top-item" v-if="two">
      <img src="@/assets/imgs/girl.svg" alt="avatar" class="item-img" />
      <img src="@/assets/imgs/scap.svg" alt="cap" class="item-cap" />
      <img src="@/assets/imgs/2.svg" alt="2" class="item-no" />
      <div class="top-item-content silver">
        <div class="top-item-content-text">
          <div class="text-name">{{ two.studentName }}</div>
          <div class="text-award">奖杯数: {{ two.count }}</div>
          <div class="text-class">{{ two.className }}</div>
        </div>
      </div>
    </div>
    <div class="top-item top" v-if="one">
      <img src="@/assets/imgs/boy.svg" alt="avatar" class="item-img" />
      <img src="@/assets/imgs/gcap.svg" alt="cap" class="item-cap" />
      <img src="@/assets/imgs/1.svg" alt="2" class="item-no" />
      <div class="top-item-content golden">
        <div class="top-item-content-text">
          <div class="text-name">{{ one.studentName }}</div>
          <div class="text-award">奖杯数: {{ one.count }}</div>
          <div class="text-class">{{ one.className }}</div>
        </div>
      </div>
    </div>
    <div class="top-item" v-if="three">
      <img src="@/assets/imgs/girl.svg" alt="avatar" class="item-img" />
      <img src="@/assets/imgs/bcap.svg" alt="cap" class="item-cap" />
      <img src="@/assets/imgs/3.svg" alt="2" class="item-no" />
      <div class="top-item-content bronze">
        <div class="top-item-content-text">
          <div class="text-name">{{ three.studentName }}</div>
          <div class="text-award">奖杯数: {{ three.count }}</div>
          <div class="text-class">{{ three.className }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { toRefs, reactive } from "vue";
import { store } from "@/store/index";
const threeList = reactive(store.studentRanking.slice(0, 3));
const [one, two, three] = toRefs(threeList);
</script>
<style lang="scss" scoped>
.top-one {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 0.8rem;
  justify-content: center;
  align-items: center;
  padding: 0 3rem;
  min-height: 11rem;
  max-height: 11rem;
  
  .top-item {
    width: 8rem;
    position: relative;
    min-height: 9rem;
    max-height: 9rem;
    text-align: center;
    transform: translateY(8%);
    .item-img {
      width: 4rem;
      position: absolute;
      left: 25%;
      z-index: 9;
    }
    .item-cap {
      position: absolute;
      top: 0;
      left: 60%;
      bottom: 0;
      transform: translateY(-50%);
      width: 2rem;
    }
    .item-no {
      position: absolute;
      width: 1.5rem;
      height: 2rem;
      top: 30%;
      right: 8%;
      z-index: 10;
    }
    .top-item-content {
      position: absolute;
      width: 8rem;
      height: 6rem;
      transform: translateY(40%);
      .top-item-content-text {
        transform: translateY(40%);
        height: 4.5rem;
        color: $text-dark;
        font-size: smaller;
      }
      .text-class {
        color: $text-gray;
        font-size: 0.5rem;
        transform: scale(0.9);
      }
    }
  }
  .top {
    transform: translateY(-8%);
  }
  .bronze {
    background: linear-gradient(
      180deg,
      #fff4f1 0%,
      rgba(246, 246, 246, 0) 100%
    );
  }
  .golden {
    background: linear-gradient(180deg, #fffae7 0%, #ffffff 100%);
  }
  .silver {
    background: linear-gradient(
      180deg,
      #f6f6f6 0%,
      rgba(246, 246, 246, 0) 100%
    );
  }
}
</style>

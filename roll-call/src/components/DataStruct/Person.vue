<template>
  <div class="top-one">
    <div class="top-item">
      <img src="@/assets/imgs/girl.svg" alt="avatar" class="item-img" />
      <img src="@/assets/imgs/scap.svg" alt="cap" class="item-cap" />
      <img src="@/assets/imgs/2.svg" alt="2" class="item-no" />
      <div class="top-item-content silver">
        <div class="top-item-content-text">
          <div class="text-name">猫猫爱</div>
          <div class="text-award">奖杯数: 12</div>
          <div class="text-class">东升一小三(2)班</div>
        </div>
      </div>
    </div>
    <div class="top-item top">
      <img src="@/assets/imgs/boy.svg" alt="avatar" class="item-img" />
      <img src="@/assets/imgs/gcap.svg" alt="cap" class="item-cap" />
      <img src="@/assets/imgs/1.svg" alt="2" class="item-no" />
      <div class="top-item-content golden">
        <div class="top-item-content-text">
          <div class="text-name">流浪者</div>
          <div class="text-award">奖杯数: 15</div>
          <div class="text-class">优卓试验一小三(2)班</div>
        </div>
      </div>
    </div>
    <div class="top-item">
      <img src="@/assets/imgs/girl.svg" alt="avatar" class="item-img" />
      <img src="@/assets/imgs/bcap.svg" alt="cap" class="item-cap" />
      <img src="@/assets/imgs/3.svg" alt="2" class="item-no" />
      <div class="top-item-content bronze">
        <div class="top-item-content-text">
          <div class="text-name">牛牛爱</div>
          <div class="text-award">奖杯数: 12</div>
          <div class="text-class">东升一小三(2)班</div>
        </div>
      </div>
    </div>
  </div>
  <div class="top-two">
    
  </div>
</template>
<script setup></script>
<style scoped lang="scss">
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

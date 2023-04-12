<template>
  <div class="top-one">
    <div class="top-item">
      <img src="@/assets/imgs/girl.svg" alt="avatar" class="item-img" />
      <img src="@/assets/imgs/scap.svg" alt="cap" class="item-cap" />
      <div class="top-item-content silver"></div>
    </div>
    <div class="top-item top">
      <img src="@/assets/imgs/boy.svg" alt="avatar" class="item-img" />
      <img src="@/assets/imgs/gcap.svg" alt="cap" class="item-cap" />
      <div class="top-item-content golden"></div>
    </div>
    <div class="top-item">
      <img src="@/assets/imgs/girl.svg" alt="avatar" class="item-img" />
      <img src="@/assets/imgs/bcap.svg" alt="cap" class="item-cap" />
      <div class="top-item-content bronze"></div>
    </div>
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
  border: 1px solid black;

  .top-item {
    width: 8rem;
    position: relative;
    border: 1px solid black;
    min-height: 9rem;
    max-height: 9rem;
    text-align: center;
    transform: translateY(8%);
    .item-img {
      width: 4rem;
      position: absolute;
      left: 25%;
      z-index: 99;
    }
    .item-cap {
      position: absolute;
      top: 0;
      left: 60%;
      bottom: 0;
      transform: translateY(-50%);
      width: 2rem;
    }
    .top-item-content {
      position: absolute;

      width: 8rem;
      height: 6rem;
      transform: translateY(40%);
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

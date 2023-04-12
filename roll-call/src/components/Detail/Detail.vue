<template>
  <div class="detail-title">奖杯明细：</div>
  <div class="detail-content">
    <template v-for="item in 4">
      <div class="detail-item">
        <div class="item-tag">造型表现佳:</div>
        <div class="item-name">
          <div class="name">李晓峰</div>
          <div class="name">李晓峰</div>
          <div class="tag-count">获得</div>
          <div class="count">造型表现佳+15</div>
        </div>
      </div>
    </template>
  </div>
</template>
<script setup></script>
<style scoped lang="scss">
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
  max-height: 6.2rem;
  min-height: 4rem;
  overflow: scroll;
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
      .count{
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
</style>

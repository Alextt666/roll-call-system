<template>
  <div class="content">
    {{ msg }}
  </div>
  <div class="footer">
    <button>随机点名</button>
    <button>数据统计</button>
  </div>
</template>
<script  setup>
    const props = defineProps({
        'msg':String
    })
</script>
<style scoped lang="scss">
 button{
    width: 8rem;
    height: 3rem;
    font-size: 1rem;
    color: $medium-gray;
}
.content{
    width: 100%;
    height: 70vh;
}
.footer{

}
</style>

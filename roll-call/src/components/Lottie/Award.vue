<template>
  <div class="animate-wrapper">
    <Vue3Lottie 
    :animationData="AwardJSON" 
    :loop=1
    @onComplete="handleAnimateComplete"
    />
    <div class="award-text">{{ tagMsg }} +1</div>
  </div>
  <div class="animte-mask"></div>
</template>
<script>
import { Vue3Lottie  } from "vue3-lottie";
import 'vue3-lottie/dist/style.css';
import AwardJSON from '@/assets/animations/award.json';
export default {
  name: "Award",
  components: {
    Vue3Lottie ,
  },
  props:{
    'tagMsg':String
  },
  data() {
    return {
      AwardJSON
    };
  },
  methods: {
    handleAnimateComplete(){
      this.$emit('onAnimateComplet')
    }
  },
 

};

</script>
<style lang="scss">
.animte-mask{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9998; /* 确保遮挡其他元素 */
}
.animate-wrapper{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 9999;
}
.award-text{
  color: $text-yellow;
}
</style>

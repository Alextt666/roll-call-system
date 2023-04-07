<template>
  <div class="animate-wrapper">
    <Vue3Lottie 
    :animationData="AwardJSON" 
    :loop=1
    @onComplete="handleAnimateComplete"
    />
  </div>
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
<style>
.animate-wrapper{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 999;
}
</style>

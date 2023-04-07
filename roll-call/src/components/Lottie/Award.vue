<template>
  <div>
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
      console.log('animate complete')
      console.log(this.$emit('onAnimateComplet'))
    }
  },
 

};

</script>
<style></style>

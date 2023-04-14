<template>
  <div class="animate-wrapper">
    <Vue3Lottie
      :animationData="AwardJSON"
      :loop="1"
      @onComplete="handleAnimateComplete"
    />
    <div class="award-text">{{ tagMsg }} +1</div>
  </div>
  <audio ref="audioPlayer">
    <source src="@/assets/audio/award.mp3" type="audio/mpeg" />
  </audio>
  <div class="animte-mask"></div>
</template>
<script>
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";
import AwardJSON from "@/assets/animations/award.json";
export default {
  name: "Award",
  components: {
    Vue3Lottie,
  },
  props: {
    tagMsg: String | Number,
  },
  emits: ["animateComplet"],
  data() {
    return {
      AwardJSON,
      audioPlaying: false
    };
  },
  methods: {
    handleAnimateComplete() {
      this.$emit("animateComplet");
    },
    // 音频
    playAudio() {
      const audio = this.$refs.audioPlayer;
      if (this.audioPlaying) {
        audio.pause();
        this.audioPlaying = false;
      } else {
        audio.play();
        this.audioPlaying = true;
      }
    },
  },
  mounted () {
    this.playAudio();
  }
};
</script>
<style lang="scss">
.animte-mask {
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
.animate-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
}
.award-text {
  color: $text-yellow;
}
</style>

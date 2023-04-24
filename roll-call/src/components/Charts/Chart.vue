<template>
  <div id="container"></div>
</template>
<script setup>
import { Pie } from "@antv/g2plot";
import { onMounted, nextTick, watch } from "vue";
import { store } from "@/store/index";
const props = defineProps({
  selectedItem: Number,
});
let data = store.classScore[props.selectedItem].detail.map((item) => {
  return { type: item.studentLabel, value: item.studentLabelCount };
});
let myPielot = null;
watch(
  () => props.selectedItem,
  () => {
    if (myPielot) {
      myPielot.destroy();
    }
    const piePlot = new Pie("container", {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    color: ["#A9E7FF", "#5269FF", "#D8F4FF", "#A1D5FF", "#56CFFF"],
    radius: 1,
    innerRadius: 0.6,
    legend: false,
    autoFit: true,
    label: {
      type: "spider",
      offsetX:3,
      content: `{name}`,
      position:'top',
      style: {
        textAlign: "center",
        textBaseline:'top',
        fontSize: 18,
      },
    },
    interactions: [{ type: "element-selected" }, { type: "element-active" }],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          fontWeight: 400,
          fontSize: 20,
        },
        content: `奖杯数：${
          store.classScore[props.selectedItem].studentCupCount
        }`,
      },
    },
  });
    piePlot.render();
    myPielot = piePlot;
  }
);
onMounted(() => {
  const piePlot = new Pie("container", {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    color: ["#A9E7FF", "#5269FF", "#D8F4FF", "#A1D5FF", "#56CFFF"],
    radius: 1,
    innerRadius: 0.6,
    legend: false,
    autoFit: true,
    label: {
      type: "spider",
      offsetX:3,
      content: `{name}`,
      position:'top',
      style: {
        textAlign: "center",
        textBaseline:'top',
        fontSize: 18,
      },
    },
    interactions: [{ type: "element-selected" }, { type: "element-active" }],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          fontWeight: 400,
          fontSize: 20,
        },
        content: `奖杯数：${
          store.classScore[props.selectedItem].studentCupCount
        }`,
      },
    },
  });
  nextTick(() => {
    piePlot.render();
    myPielot = piePlot;
  });
});
</script>
<style scoped lang="scss">
#container {
  width: 28rem;
  height: 14rem;
  margin: 0 auto;
  margin-top: 10px;
}
</style>

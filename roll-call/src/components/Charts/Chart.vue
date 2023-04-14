<template>
  <div id="container"></div>
</template>
<script setup>
import { Pie } from "@antv/g2plot";
import { onMounted, nextTick } from "vue";
import { store } from "@/store/index";
const props = defineProps({
  selectedItem: Number,
});
let data = store.classScore[props.selectedItem].detail.map((item) => {
  return { type: item.studentLabel, value: item.studentLabelCount };
});
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
      // type:'inner',
      // type:'outer',
      type: "spider",
      // offset: "-30%",
      // content: "{type}-{value}",
      content: `{name}\n{value}`,
      style: {
        textAlign: "center",
        fontSize: 11,
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
          fontSize: 14,
        },
        content: `奖杯数：${store.classScore[props.selectedItem].studentCupCount}`,
      },
    },
  });

  nextTick(() => {
    piePlot.render();
  });
});
</script>
<style scoped lang="scss">
#container {
  width: 28rem;
  height: 13.5rem;

  margin: 0 auto;
  margin-top: 20px;
}
</style>

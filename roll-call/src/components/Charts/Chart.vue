<template>
  <div id="container"></div>
</template>
<script setup>
import { Pie } from "@antv/g2plot";
import { onMounted } from "vue";
onMounted(() => {
  const data = [
    { type: "分类一", value: 27 },
    { type: "分类二", value: 25 },
    { type: "分类三", value: 18 },
    { type: "分类四", value: 15 },
    { type: "分类五", value: 10 },
    { type: "其他", value: 5 },
  ];

  const piePlot = new Pie("container", {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 1,
    innerRadius: 0.6,
    legend: false,
    label: {
      // type:'inner',
      // type:'outer',
      type: "spider",
      // offset: "-30%",
      content: "{value}",
      style: {
        textAlign: "center",
        fontSize: 10,
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
          fontWeight:400,
          fontSize:14
        },
        content: "奖杯数：82",
      },
    },
  });

  piePlot.render();
});
</script>
<style scoped lang="scss">
#container{
    width: 28rem;
    height: 13.5rem;
    margin-top: 20px;
}
</style>

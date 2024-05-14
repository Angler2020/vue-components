src/components/BarGraph.vue：

<template>
  <!-- <ScaleBox> -->
  <div class="echarts-box">
    <div id="myEcharts"></div>
  </div>
  <!-- </ScaleBox> -->
</template>

<script setup>
import echarts from "@/utils/chart";
import { onMounted, onUnmounted } from "vue";
import europeMap from "../../assets/linesMap/europe.json";
// import region from "../../assets/map/region.json";
// import ScaleBox from "../ScaleBox/index.vue";
import {
  geoCoordMapData,
  XAData,
  YCData,
  XNData,
  planePath,
  YNData,
  color,
  convertData,
} from "./data";
import { linesModule } from "../../utils/chartModuleData";
import { cloneDeep } from "../../utils/common";

let myEcharts = echarts;
echarts.registerMap("europe", { geoJSON: europeMap });
// const mapName = "china";
/* 世界地图转欧洲地图 */
// let namearr = [];
// for (let k in region) {
//   namearr.push(region[k]);
// }
// let arr = [];
// europeMap.features.forEach((item) => {
//   if (namearr.includes(item.properties.name)) {
//     arr.push(item);
//   }
// });
const setSers = (arr) => {
  let option = cloneDeep(linesModule),
    newarr = [];
  arr.forEach(function (item, i) {
    newarr.push(
      {
        name: item[0] + " Top3",
        type: "lines",
        zlevel: 1,
        effect: {
          show: true,
          period: 6,
          trailLength: 0.7,
          color: "red", //arrow箭头的颜色
          symbolSize: 3,
        },
        lineStyle: {
          normal: {
            color: color[i],
            width: 0,
            curveness: 0.2,
          },
        },
        data: convertData(item[1]),
      },
      {
        name: item[0] + " Top3",
        type: "lines",
        zlevel: 2,
        symbol: ["none", "arrow"],
        symbolSize: 10,
        effect: {
          show: true,
          period: 6,
          trailLength: 0,
          symbol: planePath,
          symbolSize: 15,
        },
        lineStyle: {
          normal: {
            color: color[i],
            width: 1,
            opacity: 0.6,
            curveness: 0.2,
          },
        },
        data: convertData(item[1]),
      },
      {
        //终点
        name: "item[0]",
        type: "effectScatter",
        coordinateSystem: "geo",
        zlevel: 2,
        //波纹效果
        rippleEffect: {
          period: 2,
          brushType: "stroke",
          scale: 3,
        },
        label: {
          normal: {
            show: false,
            position: "left",
            formatter: "{b}",
            color: "#ffde00",
          },
        },
        symbolSize: function (val) {
          return val[2] / 5;
        },
        symbol: "circle",

        itemStyle: {
          normal: {
            show: true,
          },
        },
        data: [
          {
            name: item[0],
            value: geoCoordMapData[item[0]].concat([100]),
          },
        ],
      },
      {
        name: item[0] + " Top3",
        type: "effectScatter",
        coordinateSystem: "geo",
        zlevel: 2,
        rippleEffect: {
          brushType: "stroke",
        },
        label: {
          normal: {
            show: true,
            position: "bottom",
            formatter: "{b}",
            fontSize: 16,
            color: "#fff",
          },
        },
        symbolSize: function (val) {
          return val[2] / 5;
        },
        // symbolSize: 20,
        itemStyle: {
          normal: {
            color: ({ value }) => (value[2] === 160 ? "red" : "yellow"),
          },
          emphasis: {
            areaColor: "#2B91B7",
          },
        },
        data: item[1].map(function (dataItem) {
          return {
            name: dataItem[1].name,
            value: geoCoordMapData[dataItem[1].name].concat([
              dataItem[1].value,
            ]),
          };
        }),
      }
    );
  });
  option.series = newarr;
  initChart(option);
};
const initChart = (option) => {
  let chart = myEcharts.init(
    document.getElementById("myEcharts"),
    "purple-passion"
  );
  chart.setOption(option);
  window.onresize = function () {
    chart.resize();
  };

  chart.on("click", function (params) {
    const { name } = params;
    console.log(name);
  });
};
// 飞线动画
let index = 0,
  arr = [
    ["Spain", XAData],
    ["London", YCData],
    ["Paris", XNData],
    ["Russia", YNData],
  ];
const interval = setInterval(() => {
  setSers(arr.slice(index, index + 1));
  index++;
  if (index > arr.length - 1) {
    index = 0;
  }
}, 2000);

onMounted(() => {
  setSers(arr);
  // setSers(arr.slice(0, 1));
});

onUnmounted(() => {
  myEcharts.dispose;
  clearInterval(interval);
});
</script>
<style>
#myEcharts {
  /* width: 1920px;
  height: 1080px; */
  width: 1020px;
  height: 600px;
}
</style>

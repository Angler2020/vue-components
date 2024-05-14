export const lineModule = {
  title: {
    text: "2021年各月份销售量（单位：件）",
    left: "center",
  },
  xAxis: {
    type: "category",
    data: [
      "一月",
      "二月",
      "三月",
      "四月",
      "五月",
      "六月",
      "七月",
      "八月",
      "九月",
      "十月",
      "十一月",
      "十二月",
    ],
  },
  tooltip: {
    trigger: "axis",
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [606, 542, 985, 687, 501, 787, 339, 706, 383, 684, 669, 737],
      type: "line",
      smooth: true,
      itemStyle: {
        normal: {
          label: {
            show: true,
            position: "top",
            formatter: "{c}",
          },
        },
      },
    },
  ],
};

export const linesModule = {
  backgroundColor: "#000f1e",
  //   tooltip: {
  //     padding: 0,
  //     enterable: true,
  //     transitionDuration: 1,
  //     textStyle: {
  //       color: "#000",
  //       decoration: "none",
  //     },
  //   },
  tooltip: {
    trigger: "item",
    formatter: function (params, ticket, callback) {
      if (params.seriesType == "effectScatter") {
        return "线路：" + params.data.name + "" + params.data.value[2];
      } else if (params.seriesType == "lines") {
        return (
          params.data.fromName +
          ">" +
          params.data.toName +
          "<br />" +
          params.data.value
        );
      } else {
        return params.name;
      }
    },
  },
  geo: {
    map: "europe",
    zoom: 10, //当前视角的缩放比例
    aspectScale: 0.86,
    layoutCenter: ["36%", "110%"], //地图位置
    roam: true, //是否开启平游或缩放
    layoutSize: "100%",
    itemStyle: {
      normal: {
        areaColor: "rgb(10,60,83)",
        borderColor: "rgba(0,243,255,0.4)",
        borderWidth: 2,
      },
      emphasis: {
        areaColor: "rgb(10,60,83)",
        label: {
          color: "#fff",
        },
      },
    },
    // regions: [
    //   {
    //     name: "南海诸岛",
    //     itemStyle: {
    //       areaColor: "rgb(0,243,255)",
    //       borderColor: "rgb(0,243,255)",
    //       normal: {
    //         opacity: 0,
    //         label: {
    //           show: false,
    //           color: "#009cc9",
    //         },
    //       },
    //     },
    //     label: {
    //       show: false,
    //       color: "#FFFFFF",
    //       fontSize: 12,
    //     },
    //   },
    // ],
  },
  // animation:true,
  series: [
    // 常规地图
    // {
    //   type: "map",
    //   mapType: "china",
    //   aspectScale: 0.85,
    //   layoutCenter: ["50%", "50%"], //地图位置
    //   layoutSize: "100%",
    //   //   layoutCenter: ["45%", "100%"], //地图位置
    //   //   layoutSize: "300%",
    //   zoom: 1.3, //当前视角的缩放比例
    //   //   roam: true, //是否开启平游或缩放
    //   scaleLimit: {
    //     //滚轮缩放的极限控制
    //     min: 1,
    //     max: 2,
    //   },
    //   itemStyle: {
    //     normal: {
    //       areaColor: "rgb(10,60,83)",
    //       borderColor: "rgba(0,243,255,0.4)",
    //       borderWidth: 2,
    //     },
    //     emphasis: {
    //       areaColor: "rgb(10,60,83)",
    //       label: {
    //         color: "#fff",
    //       },
    //     },
    //   },
    // },
  ],
};

const geoCoordMapData = {
  Paris: [2.2, 48.5],
  London: [-0.05, 51.36],
  finlad: [25.03, 60.15],
  Russia: [37.35, 55.45],
  Spain: [-3.45, 40.25],
  Ireland: [-6.15, 53.21],
  Germany: [13.25, 52.3],
  Italy: [12.29, 41.54],
};
const XAData = [
  // [{ name: "Spain" }, { name: "北京", value: 100 }],
  // [{ name: "Spain" }, { name: "finlad", value: 100 }],
  // [{ name: "Spain" }, { name: "Russia", value: 100 }],
  // [{ name: "Spain" }, { name: "Paris", value: 100 }],
  [{ name: "Spain" }, { name: "London", value: 100 }],
];

const XNData = [
  // [{ name: "Paris" }, { name: "finlad", value: 100 }],
  [{ name: "Paris" }, { name: "Russia", value: 100 }],
  // [{ name: "Paris" }, { name: "Spain", value: 100 }],
  // [{ name: "Paris" }, { name: "London", value: 100 }],
];

const YCData = [
  // [{ name: "London" }, { name: "Ireland", value: 100 }],
  // [{ name: "London" }, { name: "Russia", value: 100 }],
  // [{ name: "London" }, { name: "finlad", value: 100 }],
  // [{ name: "London" }, { name: "Spain", value: 100 }],
  [{ name: "London" }, { name: "Paris", value: 100 }],
  // [{ name: "London" }, { name: "Germany", value: 100 }],
  // [{ name: "London" }, { name: "Italy", value: 100 }],
];

const YNData = [[{ name: "Russia" }, { name: "Spain", value: 160 }]];

const planePath =
  "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
//const planePath = 'arrow';
const convertData = (data) => {
  const res = [];
  for (let i = 0; i < data.length; i++) {
    const dataItem = data[i];
    const fromCoord = geoCoordMapData[dataItem[0].name];
    const toCoord = geoCoordMapData[dataItem[1].name];
    if (fromCoord && toCoord) {
      res.push({
        fromName: dataItem[0].name,
        toName: dataItem[1].name,
        coords: [fromCoord, toCoord],
        value: dataItem[1].value,
      });
    }
  }
  return res;
};
const color = ["#a6c84c", "#ffa022", "#46bee9"]; //航线的颜色

export {
  geoCoordMapData,
  XAData,
  YCData,
  XNData,
  planePath,
  YNData,
  color,
  convertData,
};

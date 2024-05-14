export const cloneDeep = (obj) => {
  let newObj = Array.isArray(obj) ? [] : {};
  for (let k in obj) {
    if (Array.isArray(obj)) {
      newObj.push(obj[k]);
    } else {
      newObj[k] = typeof obj[k] === "Object" ? cloneDeep(obj[k]) : obj[k];
    }
  }
  return newObj;
};
// 防抖（多次触发 只执行最后一次）
/*
  .登录、发短信等按钮避免用户点击太快，以致于发送了多次请求，需要防抖
  .调整浏览器窗口大小时，resize 次数过于频繁，造成计算过多，此时需要一次到位，就用到了防抖
  .文本编辑器实时保存，当无任何更改操作一秒后进行保存
*/

export function debounce(fn, wait) {
  let timer;
  return function () {
    let _this = this;
    let args = arguments;
    // 清除定时器->重新启一个定时器
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      fn.apply(_this, args);
    }, wait);
  };
}
// 节流（规定时间内 只触发一次）
/* 
  .鼠标连续不断地触发某事件（如点击），单位时间内只触发一次；
  .监听滚动事件，比如是否滑到底部自动加载更多，用throttle来判断。例如：懒加载；
  .浏览器播放事件，每个一秒计算一次进度信息等
*/ 
// 方式2: 使用定时器
export function thorttle(fn, wait) {
  let timer;
  return function () {
    let _this = this;
    let args = arguments;
    // 判断是否有定时器->没有重新启一个定时器->到时间后修改timer
    if (!timer) {
      timer = setTimeout(function () {
        timer = null;
        fn.apply(_this, args);
      }, wait);
    }
  };
}
// 方式1: 使用时间戳
// export function throttle(fn, wait) {
//   let time = 0;
//   return function () {
//     let _this = this;
//     let args = arguments;
//     let now = Date.now();
//     if (now - time > wait) {
//       fn.apply(_this, args);
//       time = now;
//     }
//   };
// }

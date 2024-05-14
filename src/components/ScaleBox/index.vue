<template>
  <div
    class="ScaleBox"
    ref="ScaleBox"
    :style="{
      width: width + 'px',
      height: height + 'px',
    }"
  >
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const scale = ref(0);
const width = ref(1920);
const height = ref(1080);
const ScaleBox = ref(null);

const getScale = () => {
  // 固定好16：9的宽高比，计算出最合适的缩放比
  const wh = window.innerHeight / height.value;
  const ww = window.innerWidth / width.value;
  console.log(ww < wh ? ww : wh);
  return ww < wh ? ww : wh;
};
const setScale = () => {
  // 获取到缩放比例，设置它
  scale.value = getScale();
  if (ScaleBox) {
    ScaleBox.value.style.setProperty("--scale", scale.value);
  }
};
const debounce = (fn, delay) => {
  const delays = delay || 500;
  let timer;
  return function () {
    const th = this;
    const args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      timer = null;
      fn.apply(th, args);
    }, delays);
  };
};

onMounted(() => {
  setScale();
  window.addEventListener("resize", debounce(setScale));
});
</script>

<style lang="scss">
#ScaleBox {
  --scale: 1;
}
.ScaleBox {
  position: absolute;
  transform: scale(var(--scale)) translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  transform-origin: 0 0;
  left: 50%;
  top: 50%;
  transition: 0.3s;
  z-index: 999;
  // background: rgba(255, 0, 0, 0.3);
}
</style>

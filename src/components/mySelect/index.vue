<template>
  <el-select
    v-model="user"
    v-selLazyLoad:[arg]="loadMore"
    multiple
    :popper-class="arg"
    class="my_select"
    placeholder="请选择"
  >
    <el-option v-for="item in options" :key="item.value" :value="item.value">
      {{ item.label }}
    </el-option>
  </el-select>
</template>

<script setup>
import { ref } from "vue";
// import { debounce } from "lodash";
import { debounce } from "../../utils/common";

defineProps({
  data: [],
});

const user = ref("");
const options = ref([]);
const pageObj = { size: 10, num: 1 };
const arg = "ddd";
const data = new Array(100)
  .fill("选项")
  .map((item, i) => ({ label: item + i, value: i }));
options.value = data.slice(0, 10);

// 加入节流操作
const loadMore = debounce(() => {
  const { size, num } = pageObj;
  if (num < data.length / size) {
    options.value.push(...data.slice(num * size, (num + 1) * size));
    pageObj.num++;
  }
}, 1000);
</script>

<script>
export default {
  directives: {
    selLazyLoad: {
      mounted(el, { arg, value }) {
        const SELECTWRAP_DOM = document.querySelector(
          `.${arg} .el-select-dropdown__wrap`
        );
        SELECTWRAP_DOM &&
          SELECTWRAP_DOM.addEventListener(
            "scroll",
            debounce(function () {
              const condition =
                SELECTWRAP_DOM.scrollHeight - SELECTWRAP_DOM.scrollTop <
                SELECTWRAP_DOM.clientHeight;
              if (condition && SELECTWRAP_DOM.scrollTop > 0) {
                value();
              }
            }, 200)
          );
      },
    },
  },
};
</script>

<style scoped lang="scss">
.my_select {
  min-width: 120px;
  min-height: 36px;
}
</style>

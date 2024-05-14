<template>
  <div>组件A</div>
  <div>
    <button type="primary" @click="increment">count+</button>
    <div>
      <input type="number" v-model="val" />
      <button type="primary" @click="editCount">修改count+</button>
    </div>
    <button type="primary" @click="resetCount">重置count</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useCounterStore } from "@/store";

const val = ref(0);
const store = useCounterStore();
const { count } = storeToRefs(store);
// 作为 action 的 increment 可以直接解构
const { increment } = store;
// 使用选项式 API 时，你可以通过调用 store 的 $reset() 方法将 state 重置为初始值。
const resetCount = () => store.$reset();
const editCount = () => (count.value = val);
</script>

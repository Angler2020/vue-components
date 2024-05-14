<template>
  <div>
    <div class="title">局部状态管理provide \ inject</div>
    <Coma />
    <Comb @func="handleMsg" />
    <div><button type="primary" @click="increment">修改全局count</button></div>
  </div>
</template>

<script setup>
import { provide, ref } from "vue";
import Coma from "./coma/index.vue";
import Comb from "./comb/index.vue";
import { useCounterStore } from "@/store";

const message = ref(0);
provide("message", message);
const handleMsg = () => {
  message.value++;
};

const store = useCounterStore();
// 作为 action 的 increment 可以直接解构
const { increment } = store;
</script>

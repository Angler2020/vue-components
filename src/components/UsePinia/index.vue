<template>
  <div>
    <div class="title">pinia全局状态管理</div>
    <div>count值:{{ count }}</div>
    <div>count计算结果:{{ doubleCount }}</div>
    <Coma />
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import Coma from "./coma/index.vue";
import { useCounterStore } from "../../store";

const store = useCounterStore();
// `name` 和 `doubleCount` 是响应式的 ref
// 同时通过插件添加的属性也会被提取为 ref
// 并且会跳过所有的 action 或非响应式 (不是 ref 或 reactive) 的属性
const { name, doubleCount, count } = storeToRefs(store);
// 作为 action 的 increment 可以直接解构
const { increment } = store;
// 使用选项式 API 时，你可以通过调用 store 的 $reset() 方法将 state 重置为初始值。
const resetCount = () => store.$reset();
</script>

<!-- 
1.安装pinia
yarn add pinia
# 或者使用 npm
npm install pinia

2.创建一个 pinia 实例 (根 store) 并将其传递给应用：
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')

 -->

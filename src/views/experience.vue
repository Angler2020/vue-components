<template>
  <!-- vue基础常用 -->
  <div class="list">
    <div class="title">vue3.js</div>
    <a href="https://cn.vuejs.org/" target="_blank">https://cn.vuejs.org/</a>
  </div>
  <div class="list">
    <div class="title">pinia</div>
    <a href="https://pinia.vuejs.org/zh/" target="_blank"
      >https://pinia.vuejs.org/zh/</a
    >
  </div>
  <div class="list">
    <div class="title">传参方式（路由，vuex，局部状态管理、全局状态管理）</div>
    <ProvideeAndInject />
    <UsePinia />
  </div>
</template>
<script setup>
import ProvideeAndInject from "../components/ProvideeAndInject/index.vue";
import UsePinia from "../components/UsePinia/index.vue";
</script>
<style>
.list {
  padding: 12px;
}
</style>

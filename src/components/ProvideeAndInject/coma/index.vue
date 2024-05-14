<template>
  <div>组件A</div>
  <div>{{ msg }}</div>
</template>

<script setup>
import { inject } from "vue";
const msg = inject("message");
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

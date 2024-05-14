<template>
  <div>组件B</div>
  <button @click="addCount">count+</button>
</template>

<script setup>
const emits = defineEmits(["func"]);

const addCount = () => {
  emits("func");
};
</script>

<style scoped></style>

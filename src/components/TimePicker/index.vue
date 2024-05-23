<template>
  <div>
    <YearRangePicker v-model="yearRange" v-model:endValue="endTime" />
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
import YearRangePicker from "./YearRangePicker.vue";

const yearRange = ref([]);
const endTime = ref(null);

watch(
  endTime,
  (newValue, oldValue) => {
    debugger;
  },
  { immediate: true }
);
</script>

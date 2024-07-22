<template>
  <!-- vue基础常用 -->
  <div class="list">
    <div class="title">常用表格</div>
    <TableDefault :tableData="tableData" :columns="columns" />
  </div>
  <div class="list">
    <div class="title">可编辑表格</div>
    <EditTable :tableData="tableData" :columns="columns" />
  </div>
</template>
<script setup>
import TableDefault from "../components/TableDefault/index.vue";
import EditTable from "../components/EditTable/index.vue";
import { ref } from "vue";

const tableData = ref([]);
const columns = ref([
  { prop: "id", width: 180, label: "ID", editable: false },
  { prop: "name", width: 180, label: "名称", editable: true, type: "input" },
  { prop: "age", width: 180, label: "年龄", editable: true, type: "input" },
  { prop: "hight", width: 180, label: "身高", editable: true, type: "input" }
]);
tableData.value = new Array(10).fill("1").map((item, i) => ({ id: i, name: `name${i}`, age: `age${i}`, hight: i }));
</script>
<style>
.list {
  padding: 12px;
}
</style>

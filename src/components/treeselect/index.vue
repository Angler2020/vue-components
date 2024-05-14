<template>
  <treeselect
    v-model="visibleMan"
    :disabled="false"
    placeholder="请选择"
    noChildrenText="暂无"
    :multiple="true"
    valueFormat="wxUserId"
    :options="options"
    :clearable="false"
    :searchable="true"
    :limit="1"
    :open-on-click="true"
    noOptionsText="加载中..."
    @select="change"
  />
</template>

<script setup>
// 参考
// https://blog.csdn.net/wuli_youhouli/article/details/113092115
import { ref } from "vue";
import Treeselect from "vue3-treeselect";
import "vue3-treeselect/dist/vue3-treeselect.css";
import { transformToTree } from "../../utils/formate";
import { departments } from "../../mock/select";

defineProps({
  msg: String,
});

const options = transformToTree(departments)[0].children;
const visibleMan = ref(null);
const change = (val) => {
  console.log(visibleMan.value);
};
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

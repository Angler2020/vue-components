<!-- 1.column带插槽功能\过滤功能 -->
<template>
  <el-table :data="tableData">
    <el-table-column v-for="(item, i) in columns" :key="i" :prop="item.prop" :label="item.label" :width="item.width"></el-table-column>
  </el-table>
  <el-pagination
    v-model:current-page="pagination.currentPage"
    v-model:page-size="pagination.pageSize"
    :page-sizes="[10, 20, 30, 40]"
    :layout="pagination.layout"
    :total="pagination.total"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
</template>

<script>
export default {
  name: "DefaultTable",
  props: {
    columns: {
      type: Array,
      required: true
    },
    tableData: {
      type: Array,
      required: true
    },
    tableProps: {
      type: Object,
      default: () => ({ border: true, stripe: true, highlightCurrentRow: true })
    },
    pagination: {
      type: Object,
      default: () => ({
        currentPage: 1,
        pageSize: 10,
        total: 0,
        layout: "total, sizes, prev, pager, next, jumper"
      })
    }
  },
  setup(props) {
    const handleSizeChange = (val) => {
      // Handle pagination size change
    };

    const handleCurrentChange = (val) => {
      // Handle pagination current page change
    };

    return {
      handleSizeChange,
      handleCurrentChange
    };
  }
};
</script>

<style lang="scss"></style>

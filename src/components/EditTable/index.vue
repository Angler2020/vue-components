<template>
  <el-card>
    <el-table
      :data="tableData"
      :row-key="getRowKey"
      :border="tableProps.border"
      :stripe="tableProps.stripe"
      :highlight-current-row="tableProps.highlightCurrentRow"
      style="width: 100%"
      @cell-click="handleCellClick"
    >
      <el-table-column v-for="column in columns" :key="column.prop" :prop="column.prop" :label="column.label" :editable="column.editable" :width="column.width">
        <template #default="{ row }">
          <!-- <span v-if="!editing[row.id]">{{ row[column.prop] }}</span> -->
          <el-input v-if="column.type === 'input'" v-model="row[column.prop]" @blur="saveEdit(row)" @keyup.enter="saveEdit(row)" />
          <el-select v-else-if="column.type === 'select'" v-model="row[column.prop]" @change="saveEdit(row)">
            <el-option v-for="option in column.options" :key="option.value" :label="option.label" :value="option.value" />
          </el-select>
        </template>
      </el-table-column>
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
  </el-card>
</template>

<script>
import { ref, computed } from "vue";

export default {
  name: "EditTable",
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
    const editing = ref({});
    const getRowKey = computed(() => props.tableProps.rowKey || "id");

    const saveEdit = (row) => {
      editing.value[row[getRowKey.value]] = false;
    };

    const handleCellClick = (row, column) => {
      if (column.editable) {
        editing.value[row[getRowKey.value]] = true;
      }
    };

    const handleSizeChange = (val) => {
      // Handle pagination size change
    };

    const handleCurrentChange = (val) => {
      // Handle pagination current page change
    };

    return {
      editing,
      getRowKey,
      saveEdit,
      handleCellClick,
      handleSizeChange,
      handleCurrentChange
    };
  }
};
</script>

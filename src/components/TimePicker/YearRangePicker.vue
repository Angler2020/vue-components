<template>
  <div class="year-range-picker">
    <el-date-picker
      v-model="startYear"
      type="year"
      placeholder="开始时间"
      class="year-picker"
      @change="changeStartYear"
    >
    </el-date-picker>
    <span class="range-word">—</span>
    <el-date-picker
      v-model="endYear"
      type="year"
      placeholder="结束时间"
      class="year-picker"
      @change="changeEndYear"
    >
    </el-date-picker>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";

const props = defineProps({
  modelValue: { tyepe: Array, default: [] },
});
const emit = defineEmits(["update:modelValue", "update:endValue"]);

const startYear = ref("");
const endYear = ref("");
onMounted(() => {
  const { modelValue } = props;
  startYear.value = modelValue[0] ? String(modelValue[0]) : "";
  endYear.value = modelValue[1] ? String(modelValue[1]) : "";
});

const changeStartYear = (val) => {
  if (endYear.value) {
    // 开始年份大于结束年份，调换
    if (Number(startYear.value) > Number(endYear.value)) {
      startYear.value = endYear.value;
      endYear.value = val;
    }
  }
  emit("update:modelValue", [startYear.value, endYear.value]);
};
const changeEndYear = (val) => {
  if (Number(startYear.value) > Number(endYear.value)) {
    endYear.value = startYear.value;
    startYear.value = val;
  }
  emit("update:modelValue", [startYear.value, endYear.value]);
  emit("update:endValue", endYear.value);
};
</script>
<!-- vue2.0写法 -->
<!-- <script>
  export default {
    name: "modelValuePicker",
    // 接收父组件传入的数据
    props: {
      modelValue: {
        type: Array,
        required: true,
        default: () => [2017, 2024],
      },
    },
    data() {
      return {
        startYear: "",
        endYear: "",
      };
    },
    mounted() {
      // 初始化自身变量
      this.startYear = this.modelValue[0] ? String(this.modelValue[0]) : "";
      this.endYear = this.modelValue[1] ? String(this.modelValue[1]) : "";
    },
    methods: {
      changeStartYear(val) {
        if (this.endYear) {
          // 开始年份大于结束年份，调换
          if (Number(this.startYear) > Number(this.endYear)) {
            this.startYear = this.endYear;
            this.endYear = val;
          }
        }
        // 将改动传回父组件
        this.$emit("yearChanged", [this.startYear, this.endYear]);
      },
      changeEndYear(val) {
        if (Number(this.startYear) > Number(this.endYear)) {
          this.endYear = this.startYear;
          this.startYear = val;
        }
        this.$emit("yearChanged", [this.startYear, this.endYear]);
      },
    },
  };
  </script> -->

<style scoped>
.year-range-picker {
  display: flex;
}

.range-word {
  margin-left: 6px;
  margin-right: 6px;
  color: #e5e5e5;
}

.year-range-picker .year-picker {
  max-width: 155px;
}
</style>

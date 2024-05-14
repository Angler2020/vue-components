<template>
  <div class="main_box">
    <div class="left_box">
      <div
        class="list"
        v-for="(item, i) in routes"
        :key="i"
        @click="link(item)"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="right_box">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
// import { provide, ref } from "vue";
import { useRouter } from "vue-router";
import { routes } from "./router/index.js";

const router = useRouter();
const link = (item) => {
  router.push(item.path);
};
</script>
<style lang="scss">
.main_box {
  display: flex;
  text-align: left;
  width: 80vw;
  height: 100vh;
  .left_box {
    width: 140px;
    padding: 24px 14px;
    border-right: 2px solid #e5e5e5;
    overflow: auto;
    .list {
      height: 40px;
      color: #444;
      line-height: 40px;
      font-size: 14px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      cursor: pointer;
      &:hover {
        color: #409eff;
      }
    }
  }
  .right_box {
    flex: 1;
    padding: 24px;
    .title {
      font-size: 28px;
      color: #1f2f3d;
      padding: 0 0 14px 0;
    }
  }
}
</style>

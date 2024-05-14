import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
// Element Plus
import "element-plus/theme-chalk/index.css"; // 引入 ElementPlus 组件样式
// 图标和组件需要分开引入
import ElementPlus from "element-plus"; // 引入 ElementPlus 组件
import { Edit } from "@element-plus/icons-vue"; // 按需引入 Icon 图标
import { routes } from "./router/index.js";
import { createPinia } from "pinia";

const pinia = createPinia();
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});
const app = createApp(App);
//  全局注册 Icon 图标
app.component("Edit", Edit);
app.use(router);
app.use(pinia);
app.use(ElementPlus); // 全局挂载 ElementPlus
app.mount("#app");

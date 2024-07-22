const routes = [
  {
    path: "/base",
    name: "vue基础常用",
    component: () => import("../views/experience.vue"),
  },
  {
    path: "/Treeselect",
    name: "树形下拉选",
    component: () => import("../components/treeselect/index.vue"),
  },
  {
    path: "/linesMap",
    name: "飞线图",
    component: () => import("../components/linesMap/index.vue"),
  },
  {
    path: "/newQueue",
    name: "队列处理",
    component: () => import("../components/newQueue/index.vue"),
  },
  {
    path: "/MySelect",
    name: "懒加载下拉选",
    component: () => import("../components/mySelect/index.vue"),
  },
  {
    path: "/TimePicker",
    name: "时间选择",
    component: () => import("../components/TimePicker/index.vue"),
  },
  {
    path: "/table",
    name: "表格",
    component: () => import("../views/table.vue"),
  },
];

export { routes };

const routes = [
  {
    path: "/base",
    name: "常用",
    component: () => import("../views/experience.vue"),
  },
  {
    path: "/ProvideeAndInject",
    name: "局部状态管理",
    component: () => import("../components/ProvideeAndInject/index.vue"),
  },
  {
    path: "/UsePinia",
    name: "pinia状态管理",
    component: () => import("../components/UsePinia/index.vue"),
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
];

export { routes };

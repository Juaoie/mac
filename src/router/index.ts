import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import LoginHome from "@p/login/LoginHome/LoginHome.vue";

const routes: RouteRecordRaw[] = [
  { path: "/LoginHome", redirect: "/" },
  { path: "/", component: LoginHome },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((res) => {
  return true;
});

export default router;

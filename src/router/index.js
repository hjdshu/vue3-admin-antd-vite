import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "../views/Layout/Index.vue";
import Login from "../views//Login/Index.vue";
import NotFound from "../views/404/Index.vue";
import store from "@/store";
import {
  TOKEN_STATE,
  PREMISSION_STATE,
  RESOURCE_STATE,
} from "@/store/state-types";
import authRoutes from "@/pages/router";
import { RFRESH_PREMISSION_ACTION } from "@/store/action-types";

const routes = [
  {
    path: "/",
    name: "home",
    component: Layout,
    meta: { requiresAuth: false },
    children: authRoutes,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      needAuth: false,
    },
  },
  {
    path: "/404",
    name: "404",
    component: NotFound,
    meta: {
      needAuth: false,
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const { needAuth = true } = to.meta;
  // 如果当前页面需要认证
  if (needAuth) {
    // 如果判断系统没有token 就去登录页
    if (!store.state[TOKEN_STATE]) {
      next({
        path: "/login",
        query: { redirect: to.fullPath },
      });
      return;
    }
    store.dispatch(RFRESH_PREMISSION_ACTION);
    // 判断是首页
    if (to.path == "/") {
      next();
      return;
    }
    // 判断当前页面是否是合法的URL
    let resouce = store.state[RESOURCE_STATE];
    let premission = store.state[PREMISSION_STATE];
    let findPath = resouce.find((n) => n.path === to.path);
    console.log("判断当前页面是否是合法的URL", findPath);
    if (!findPath) {
      next({
        path: "/404",
        query: { redirect: to.fullPath },
      });
      return;
    }
    let findName = findPath.name;
    // 判断用户是否有当前页面的权限
    console.log("判断用户是否有当前页面的权限", findPath);
    if (premission.find((n) => n.name == findName)) {
      next();
      return;
    }
    next({
      path: "/404",
      query: { redirect: to.fullPath },
    });
  } else if (to.path === "/login" && store.state[TOKEN_STATE]) {
    next("/");
  } else {
    if (to.matched.length !== 0) {
      next();
    } else {
      next({ path: "/404" });
    }
  }
});
export default router;

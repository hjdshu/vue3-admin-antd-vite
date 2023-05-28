import { createStore } from "vuex";

import {
  SET_TOKEN_MUTATION,
  LOGIN_OUT_MUTATION,
  SET_MENUS_MUTATION,
  SET_PROMISSON_MUTATION,
} from "./mutation-types";

import { LOGIN_ACTION, RFRESH_PREMISSION_ACTION } from "./action-types";
import { tokenStorageName } from "@/utils/storage-names";

import {
  MENUS_STATE,
  TOKEN_STATE,
  PREMISSION_STATE,
  RESOURCE_STATE,
} from "./state-types";

import resource from "./resource";
const mockToken = "bear xssaddsdsd";
const mockPremission = resource;

// 获取token和权限
let premission = mockPremission;
let token = localStorage.getItem(tokenStorageName);
const initMenus = computedMenus(resource, premission);
console.log(initMenus);

export default createStore({
  state: {
    [TOKEN_STATE]: token,
    [MENUS_STATE]: initMenus,
    [PREMISSION_STATE]: premission,
    [RESOURCE_STATE]: resource,
  },
  mutations: {
    [SET_TOKEN_MUTATION](state, payload) {
      state[TOKEN_STATE] = payload;
      localStorage.setItem(tokenStorageName, tokenStorageName);
    },
    [LOGIN_OUT_MUTATION](state) {
      state[TOKEN_STATE] = "";
      localStorage.setItem(tokenStorageName, "");
    },
    [SET_PROMISSON_MUTATION](state, payload) {
      state[PREMISSION_STATE] = payload;
    },
    [SET_MENUS_MUTATION](state, payload) {
      state[MENUS_STATE] = payload;
    },
  },
  actions: {
    [LOGIN_ACTION]({ commit }) {
      let premission = mockPremission;
      let token = mockToken;
      commit(SET_PROMISSON_MUTATION, premission);
      commit(SET_TOKEN_MUTATION, token);
      commit(SET_MENUS_MUTATION, computedMenus(resource, premission));
    },
    [RFRESH_PREMISSION_ACTION]({ commit }, payload) {
      commit(SET_PROMISSON_MUTATION, payload || premission);
      commit(
        SET_MENUS_MUTATION,
        computedMenus(resource, payload || premission)
      );
    },
  },
  modules: {},
});

// 计算菜单
function computedMenus(resource, premission) {
  let source = JSON.parse(JSON.stringify(resource));
  source = source.filter((n) => {
    return premission.find((m) => {
      return n.is_menu && m.name == n.name;
    });
  });
  let res = [];

  // 这里考虑使用对象应用的方式做树构建, 这样性能最优
  const mapMenus = {};
  source.forEach((item) => {
    const name = item.name;
    const parentName = item.parent_name;
    if (!mapMenus[name]) {
      mapMenus[name] = {
        children: [],
      };
    }
    mapMenus[name] = {
      ...item,
      children: mapMenus[name].children,
    };

    const treeMenu = mapMenus[name];
    if (!parentName) {
      res.push(treeMenu);
    } else {
      if (!mapMenus[parentName]) {
        mapMenus[parentName] = {
          children: [treeMenu],
        };
      } else {
        mapMenus[parentName].children.push(treeMenu);
      }
    }
  });
  return res;
}

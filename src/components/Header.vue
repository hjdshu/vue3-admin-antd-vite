<template>
  <a-layout-header class="header" style="background: #fff; padding: 0">
    <div></div>
    <a-dropdown class="user" placement="bottomRight">
      <a class="ant-dropdown-link" @click.prevent> &nbsp;&nbsp;&nbsp;王小虎 </a>
      <template #overlay>
        <a-menu>
          <a-menu-item>
            <a @click.native="logout" slot="" href="javascript:;">退出登录</a>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </a-layout-header>
</template>

<style lang="less" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: #fff;
  padding: 0;
  height: 64px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.051);
}
.user {
  margin-right: 20px;
  height: 30px;
  line-height: 30px;
}
</style>

<script>
import { mapMutations, mapState } from "vuex";
import { LOGIN_OUT_MUTATION } from "@/store/mutation-types";
import { MENUS_STATE } from "@/store/state-types";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      menus: MENUS_STATE,
    }),
  },
  methods: {
    ...mapMutations({
      LOGIN_OUT_MUTATION,
    }),
    logout() {
      this.LOGIN_OUT_MUTATION();
      this.$router.go("./#/login");
    },
  },
};
</script>

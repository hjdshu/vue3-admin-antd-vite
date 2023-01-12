<template>
  <a-layout class="layout">
    <a-layout-sider
      class="sider"
      v-model:collapsed="collapsed"
      width="250"
      :trigger="null"
    >
      <div class="logo">
        <h2 class="title" v-show="!collapsed">Antd-Vue3-Admin</h2>
      </div>
      <Menus />
    </a-layout-sider>
    <a-layout class="content">
      <Header></Header>
      <a-layout-content
        class="layout-content"
        :style="{
          margin: '20px 20px',
          minHeight: '280px',
        }"
      >
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import Menus from "@/components/Menus.vue";
import Header from "@/components/Header.vue";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({}),
  },
  components: {
    Menus,
    Header,
  },
  mounted() {
    window.store = this.$store;
  },
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
    };
    return {
      tableData: Array(20).fill(item),
      collapsed: false,
    };
  },
};
</script>

<style lang="less" scoped>
.layout {
  display: flex;
  overflow: hidden;
  height: 100vh;

  .sider {
    background: #fff;
    box-shadow: 0 2px 8px #00000026;
    z-index: 22;
  }
  .content {
    overflow: auto;
  }

  .layout-content {
  }

  .logo {
    display: flex;
    align-items: center;
    height: 64px;
    line-height: 64px;
    overflow: hidden;
    white-space: nowrap;
    justify-content: center;
    img {
      height: 32px;
      margin-right: 8px;
    }

    .title {
      color: #000000d9;
      margin-bottom: 0;
    }
  }
}
</style>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// import { getUserInfo } from "@/services/login";
export default {
  mounted() {
    // getUserInfo();
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
.g-page-container {
  .ant-breadcrumb {
    margin-bottom: 8px;
  }
}
.g-page-content {
  background: #fff;
  padding: 20px;
}
</style>

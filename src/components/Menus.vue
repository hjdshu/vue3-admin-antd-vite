<!-- eslint-disable vue/valid-v-for -->
<!-- eslint-disable vue/no-template-key -->
<!-- eslint-disable vue/no-use-v-if-with-v-for -->

<!-- icon的地址临时用的这里的图标 -->
<!-- https://at.alicdn.com/t/font_8d5l8fzk5b87iudi.js -->

<template>
  <a-menu
    mode="inline"
    theme="light"
    v-model:openKeys="openKeys"
    @click="menuclick"
    v-model:selectedKeys="selectedKeys"
  >
    <a-menu-item key="home" path="/">
      <!-- <IconFont class="icon" type=""></IconFont> -->
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首页
    </a-menu-item>
    <!-- 第一层 -->
    <template v-for="menu in menus" :key="menu.name">
      <template v-if="menu.children && menu.children.length">
        <a-sub-menu :path="menu.path" :key="menu.name">
          <template #title>
            <IconFont class="icon" :type="menu.menu_icon"></IconFont>
            {{ menu.text }}</template
          >
          <!-- 第二层 -->
          <template v-for="item in menu.children" :key="item.name">
            <template v-if="item.children && item.children.length">
              <a-sub-menu :path="item.path" :key="item.name">
                <template #title> {{ item.text }}</template>
                <!-- 第三层 -->
                <a-menu-item
                  v-if="item.children"
                  v-for="sub_item in item.children"
                  :path="sub_item.path"
                  :key="sub_item.name"
                  >{{ sub_item.text }}</a-menu-item
                >
              </a-sub-menu>
            </template>
            <a-menu-item v-else :path="item.path" :key="item.name">{{
              item.text
            }}</a-menu-item>
          </template>
        </a-sub-menu>
      </template>
      <a-menu-item v-else :path="menu.path" :key="menu.name">
        <IconFont class="icon" :type="menu.menu_icon"></IconFont>
        {{ menu.text }}</a-menu-item
      >
    </template>
  </a-menu>
</template>

<script>
import { MENUS_STATE } from "@/store/state-types";
import { mapState } from "vuex";
import { createFromIconfontCN } from "@ant-design/icons-vue";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});

export default {
  computed: {
    ...mapState({
      menus: MENUS_STATE,
    }),
  },
  components: {
    // MailOutlined,
    IconFont,
  },
  data() {
    return {
      openKeys: [],
      selectedKeys: [],
    };
  },

  watch: {
    $route: {
      handler: function (route) {
        console.log(route, 111);
        let matched = [];
        let openKeys = [];
        matched = route.matched;
        if (matched.length >= 4) {
          openKeys = [matched[1].name, matched[2].name];
        }
        if (matched.length >= 3) {
          openKeys = [matched[1].name];
        }
        this.openKeys = openKeys;
        this.selectedKeys = [route.name];
      },
      immediate: true,
    },
  },

  mounted() {
    window._vueRouter = this.$route;
  },
  methods: {
    menuclick(el) {
      location.href = "./#" + el.item.path;
      setTimeout(() => {
        console.log(this.selectedKeys);
        console.log("opkeys", this.openKeys);
      });
    },
    menuSelected(key) {
      if (key === "/") {
        this.defaultOpeneds = [];
      }
    },
  },
};
</script>

<style lang="less" scoped>
.icon {
  margin-right: 7px;
}
</style>

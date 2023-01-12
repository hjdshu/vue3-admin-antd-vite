<template>
  <div class="g-page-container">
    <a-breadcrumb>
      <a-breadcrumb-item><a href="./#/">首页</a></a-breadcrumb-item>
      <a-breadcrumb-item>产品列表</a-breadcrumb-item>
    </a-breadcrumb>
    <div class="g-page-content">
      <ProductSearch></ProductSearch> products-list2
    </div>
  </div>
</template>

<script>
import ProductSearch from "./modules/ProductSearch.vue";
export default {
  components: {
    ProductSearch,
  },
};
</script>

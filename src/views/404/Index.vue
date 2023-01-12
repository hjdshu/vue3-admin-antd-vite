<template>
  <a-result
    status="404"
    title="404"
    sub-title="Sorry, the page you visited does not exist."
  >
    <template #extra>
      <a-button type="primary" @click="backHome">Back Home</a-button>
    </template>
  </a-result>
</template>

<script>
import {} from "vue";
import {} from "vue-router";
export default {
  components: {},
  setup() {
    return {
      backHome: () => {
        location.href = "./#/";
      },
    };
  },
};
</script>
<style lang="less" scoped></style>

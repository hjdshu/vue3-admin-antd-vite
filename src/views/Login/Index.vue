<template>
  <div class="login-container">
    <div class="container">
      <div class="title">Antd-Vue3 管理系统</div>

      <a-form
        :model="formState"
        name="normal_login"
        class="login-form"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <a-form-item
          label="Username"
          name="username"
          :rules="[{ required: true, message: 'Please input your username!' }]"
        >
          <a-input v-model:value="formState.username">
            <template #prefix>
              <UserOutlined class="site-form-item-icon" />
            </template>
          </a-input>
        </a-form-item>

        <a-form-item
          label="Password"
          name="password"
          :rules="[{ required: true, message: 'Please input your password!' }]"
        >
          <a-input-password v-model:value="formState.password">
            <template #prefix>
              <LockOutlined class="site-form-item-icon" />
            </template>
          </a-input-password>
        </a-form-item>

        <a-form-item>
          <a-button type="primary" @click="login" class="login-form-button">
            登录
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { LOGIN_ACTION } from "@/store/action-types";
import { urlQuery } from "@/utils/index";
export default {
  data() {
    return {
      dynamicValidateForm: {},
      formState: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions({
      LOGIN_ACTION,
    }),
    login() {
      this.LOGIN_ACTION().then(() => {
        location.href = urlQuery("redirect")
          ? "./#" + urlQuery("redirect")
          : "./#/";
      });
    },
  },
};
</script>
<style lang="less" scoped>
.login-form-button {
  width: 100%;
}
.login-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .container {
    width: 30%;
    max-width: 650px;
    min-width: 500px;
    background: #fff;
    padding: 32px;
    box-shadow: 0 0px 12px 2px rgba(202, 201, 201, 0.46);
    border-radius: 6px;
    display: flex;
    align-items: center;
    flex-direction: column;
    .title {
      font-size: 26px;
      padding: 20px 0;
    }
  }
  .form {
    width: 80%;
  }
  .bts {
    position: relative;
    left: -30px;
  }
}
</style>

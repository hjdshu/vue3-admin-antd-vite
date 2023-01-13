# vue-admin-template-antd

## 开发

yarn
yarn serve

## 需要注意的点

路由的定义是放在 router/index.js 然后分散到 pages 里的各大模块，定义 path 和 name 要跟 src/store/resource 里的 path 和 name 能够对应上

## 目录

- src
  - pages 业务页面
    - index 首页
    - 模块 1
      - 页面 1
      - 页面 2
  - views 入口页面
  - store vuexstore
    - resource 这里是相当于系统的菜单显示/权限，页面权限，按钮权限的总资源
  - router 路由和菜单配置
  - components 公共组件
  - utils
    - index.js 公共方法
    - storage-names.js localstorage 的命名定义

### Customize configuration

See [Configuration Reference](https://cn.vitejs.dev/config/).

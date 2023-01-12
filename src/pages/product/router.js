const routes = [
  {
    path: "product",
    redirect: "/product/product-list",
    name: "product",
    children: [
      {
        path: "product-list",
        name: "product-list",
        component: () => import("./product-list/index.vue"),
      },
      {
        path: "skus-manage",
        name: "product-skus-manage",
        component: () => import("./sku-manage/index.vue"),
      },
      {
        path: "goods",
        name: "product-goods",
        redirect: "/product/goods/goods-config/",
        children: [
          {
            path: "goods-config",
            name: "product-goods-config",
            component: () => import("./goods/goods-config/index.vue"),
          },
        ],
      },
    ],
  },
];

export default routes;

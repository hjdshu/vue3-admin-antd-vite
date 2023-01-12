/**
{
  name: 'name',
  text: 'text',
  path: "path",  // 非必填 页面或者菜单再填
  menu_icon: 'el-icon-menu', // 非必填 菜单图标
  parent_name: 'name' // 非必填 父节点name
  is_menu: true, // 非必填 是否是菜单
  is_page: true, // 非必填 是否是页面
  is_feature: true // 非必填 是否是功能
};
 * */

export default [
  {
    name: "product",
    text: "产品管理",
    menu_icon: "icon-shangchuan",
    is_menu: true,
    is_page: false,
    is_feature: false,
  },
  {
    name: "product-list",
    text: "产品列表",
    path: "/product/product-list",
    is_menu: true,
    is_page: true,
    is_feature: false,
    parent_name: "product",
  },
  {
    name: "product-sku-manage",
    text: "sku管理",
    path: "/product/skus-manage",
    is_menu: true,
    is_page: true,
    is_feature: false,
    parent_name: "product",
  },
  {
    name: "product-goods",
    text: "商品管理",
    is_menu: true,
    is_page: false,
    is_feature: false,
    parent_name: "product",
  },
  {
    name: "product-goods-config",
    text: "商品配置",
    path: "/product/goods/goods-config",
    is_menu: true,
    is_page: true,
    is_feature: false,
    parent_name: "product-goods",
  },
];

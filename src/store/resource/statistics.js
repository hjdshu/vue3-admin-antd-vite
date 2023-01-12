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
    name: "statistics",
    text: "统计",
    menu_icon: "icon-xiangmu",
    is_menu: true,
    is_page: false,
    is_feature: false,
  },
  {
    name: "statistics-dashboard",
    text: "统计面板",
    path: "/statistics/dashboard",
    is_menu: true,
    is_page: false,
    is_feature: false,
    parent_name: "statistics",
  },
];

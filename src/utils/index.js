import jsUri from "jsuri";
import lodash from "lodash";
import { message } from "ant-design-vue";

// 获取url参数
export function urlQuery(name) {
  let urlAry = location.href.split("?");
  urlAry.shift();
  urlAry = urlAry.map((n) => new jsUri("?" + n));
  let res = undefined;
  urlAry.forEach((item) => {
    let getRes = item.getQueryParamValue(name);
    if (getRes) {
      res = getRes;
    }
  });
  return res;
}

// 验证是否为数组
export function isArray(obj) {
  return (
    Array.isArray(obj) ||
    Object.prototype.toString.call(obj) === "[object Array]"
  );
}

// cloudDeep
export function cloudDeep(obj) {
  return lodash.cloudDeep(obj);
}

// 获取页面滚动条
export function getScrollTop() {
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  return scrollTop;
}

// 设置scrolltop
export function setScrollTop(top) {
  document.documentElement.scrollTop = document.body.scrollTop = top;
}

// 生成简单随机字符串
export function randomString(len = 32) {
  var chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678";
  var maxPos = chars.length;
  var pwd = "";
  for (var i = 0; i < len; i++) {
    pwd += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd + new Date().getTime();
}

// 邮箱校验
export function isEmail(s) {
  return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(
    s
  );
}

export function errorToast(msg) {
  message.error(msg);
}

import { requestGet } from "@/utils/request";

// 查询当前登录用户信息
export async function getUserInfo(params) {
  return requestGet(`/api/user/current/info`, { ...params });
}

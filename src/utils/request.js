import axios from "axios";
import { errorToast } from "@/utils/index";

let BASE_URL = "";
BASE_URL = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
  },
  timeout: 20000,
});

const handleError = (error) => {
  const msg =
    error.response?.data?.errmsg ||
    error.response?.data?.message ||
    error.message ||
    "";
  const status = error.response?.status || "";
  console.log(status);
  errorToast(msg);
  return Promise.reject(error);
};

instance.interceptors.request.use((config = {}) => {
  let newConfig = { ...config };
  // newConfig.headers['X-Tif-token'] = 'xxx';
  return newConfig;
});

instance.interceptors.response.use((response) => {
  if (response.data.errcode != 0) {
    errorToast(response.data.errmsg);
  }
  return response.data;
}, handleError);

export const requestGet = (url, params, options) => {
  return instance({
    method: "GET",
    url,
    params,
    ...options,
  });
};

export const requestPost = (url, params, options) => {
  return instance({
    method: "POST",
    url,
    data: params,
    ...options,
  });
};

export const requestDelete = (url, params, options) => {
  return instance({
    method: "DELETE",
    url,
    data: params,
    ...options,
  });
};

export const requestPut = (url, params, options) => {
  return instance({
    method: "PUT",
    url,
    data: params,
    ...options,
  });
};

export default instance;

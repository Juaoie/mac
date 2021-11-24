import { signFun } from "@/tools/sign";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
const { VITE_BASE_URL, VITE_PROXY_TUYA, VITE_APP_KEY } = import.meta.env;

const instance = axios.create({
  baseURL: VITE_BASE_URL as string,
});

instance.interceptors.request.use(function (config: AxiosRequestConfig) {
  if (config.headers === undefined) config.headers = {};
  config.headers["Content-Type"] = "application/x-www-form-urlencoded";

  config.data = new URLSearchParams({ data: signFun(config.data || {}, VITE_APP_KEY as string) }).toString();

  return config;
});

instance.interceptors.response.use(function (response: AxiosResponse) {
  if (response.status !== 200) {
    // ElNotification.error({ title: "错误", message: "系统错误，请联系管理员" });
    return Promise.reject(response);
  } else if (response.data.code !== 200) {
    // ElNotification.warning({ title: "提示", message: response.data.msg });
    return Promise.reject(response);
  }
  return response;
});

export default instance;

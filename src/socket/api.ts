import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
const { VITE_BASE_URL } = import.meta.env;
import { ElNotification } from "element-plus";
import { useRouter } from "vue-router";
import router from "@/router";

const instance = axios.create({
  baseURL: VITE_BASE_URL as string,
});

instance.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (error) => {
    // ElNotification({ message: error.response.data, type: "error" });

    if (error.response.status === 403) router.replace("/LoginHome");

    return Promise.reject(error.response);
  }
);

// const get = <T, D>(url: string, config?: AxiosRequestConfig<D>): Promise<T> => instance.get<T, T, D>(url, config);

// const post = async <T, D>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<T> =>
//   instance.post<T, T, D>(url, data, config);

//获取导航列表
import { NavigationRes } from "./interface/response/NavigationRes";
export const getNavList = (): Promise<NavigationRes[]> => instance.get("/user/getNavList");

//获取运行时候的app
import { RunAppRes } from "./interface/response/RunAppRes";
export const getRunAppList = (): Promise<RunAppRes[]> => instance.get("/user/getRunAppList");

//跑起来一个app
import { RunAppReq } from "./interface/request/RunAppReq";
export const addRunApp = (data: RunAppReq): Promise<string> => instance.post("/user/addRunApp", data);

//更新运行得数据
export const updateRunApp = (data: RunAppRes): Promise<string> => instance.post("/user/updateRunApp", data);

//删除runapp
export const deleteRunApp = (data: { id: number }): Promise<string> => instance.post("/user/deleteRunApp", data);

//用户登录
import { UserReq } from "./interface/request/UserReq";
export const userLogin = (data: UserReq): Promise<string> => instance.post("/user/userLogin", data);

//快捷登录
export const quickLogin = (): Promise<boolean> => instance.post("/user/quickLogin");

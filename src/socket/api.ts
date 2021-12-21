import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
const { VITE_BASE_URL } = import.meta.env;

const instance = axios.create({
  baseURL: VITE_BASE_URL as string,
});

const get = async <T, D>(url: string, config?: AxiosRequestConfig<D>): Promise<T> => {
  const res = await instance.get<T, AxiosResponse<T, D>, D>(url, config);
  return res.data;
};

const post = async <T, D>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<T> => {
  const res = await instance.post<T, AxiosResponse<T, D>, D>(url, data, config);
  return res.data;
};

//获取导航列表
import { NavigationRes } from "./interface/response/NavigationRes";
export const getNavList = (): Promise<NavigationRes[]> => get("/user/getNavList");

//获取运行时候的app
import { RunAppRes } from "./interface/response/RunAppRes";
export const getRunAppList = (): Promise<RunAppRes[]> => get("/user/getRunAppList");

//跑起来一个app
import { RunAppReq } from "./interface/request/RunAppReq";
export const addRunApp = (data: RunAppReq): Promise<string> => post("/user/addRunApp", data);

//更新运行得数据
export const updateRunApp = (data: RunAppRes): Promise<string> => post("/user/updateRunApp", data);

//删除runapp
export const deleteRunApp = (data: { id: number }): Promise<string> => post("/user/deleteRunApp", data);

//用户登录
import { UserReq } from "./interface/request/UserReq";
export const userLogin = (data: UserReq): Promise<string> => post("/user/userLogin", data);

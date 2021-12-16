import xhr from "./xhr";
import { AxiosRequestConfig } from "axios";

const get = async (url: string, config?: AxiosRequestConfig<any> | undefined) => {
  const res = await xhr.get(url, config);
  return res.data;
};

//获取导航列表
import { Navigation } from "./interface/Navigation";
export const getNavList = (): Promise<Navigation[]> => get("/user/getNavList");

//获取运行时候的app
import { RunApp } from "./interface/RunApp";
export const getRunAppList = (): Promise<RunApp[]> => get("/user/getRunAppList");

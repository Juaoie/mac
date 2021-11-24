import xhr from "./xhr";

import { AxiosResponse } from "axios";

const post = async <T>(url: string, data?: CustomRequestData): Promise<T> => {
  const axiosResponse: AxiosResponse<CustomResponseData<T>> = await xhr.post(url, data);
  return axiosResponse.data.data;
};

interface CustomResponseData<T> {
  data: T;
  msg: string;
  code: number;
}

interface CustomRequestData extends Record<string, string> {}

//获取组合测评报告列表信息
import { ComboReport } from "./interface/ComboReport";
export const getComboReport = (data: CustomRequestData) => post<ComboReport>("/admin/psychic/comboReport", data);

//解决方案
import { SolutionReport } from "./interface/SolutionReport";
export const solutionInterface = () => post<SolutionReport>("admin/psychic/solutionInterface");

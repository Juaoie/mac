import { RunAppRes } from "@/socket/interface/response/RunAppRes";

/**
 * State必填，需要约束类型
 */
export interface State {
  maxZIndex: number;
  runAppList: RunAppRes[];
}

export const state: State = {
  maxZIndex: 0, //最大的z-index
  runAppList: [], //运行app列表
};

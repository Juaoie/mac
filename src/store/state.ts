import { RunAppRes } from "@/socket/interface/response/RunAppRes";

/**
 * State必填，需要约束类型
 */
export interface State {
  runAppList: RunAppRes[];
}

export const state: State = {
  runAppList: [], //运行app列表
};

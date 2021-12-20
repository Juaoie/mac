import { RunAppRes, StryleRes } from "@/socket/interface/response/RunAppRes";
import { State } from "./state";
export const mutations = {
  /**
   * 设置runapplist
   * @param state
   * @param runAppList
   */
  setRunAppList(state: State, runAppList: RunAppRes[]) {
    state.runAppList = runAppList;
  },
  /**
   * 设置单个runapp
   * @param state
   * @param runApp
   */
  setRunAppStyle(state: State, runApp: { id: number; style: StryleRes }) {
    const index = state.runAppList.findIndex((item) => item.id === runApp.id);
    if (index !== -1) {
      state.runAppList[index].style = runApp.style;
    }
  },
};

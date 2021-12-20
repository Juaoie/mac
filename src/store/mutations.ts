import { RunAppRes } from "@/socket/interface/response/RunAppRes";
import { StyleName } from "@/tools/type";
import { State } from "./state";
export const mutations = {
  /**
   * 设置最大层级
   * @param state
   * @param zIndex
   */
  setMaxZIndex(state: State, zIndex: number) {
    if (zIndex > state.maxZIndex) state.maxZIndex = zIndex;
  },
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
  setRunAppStyle(state: State, runApp: { id: number; name: StyleName; value: number }) {
    console.log("🚀 ~ file: mutations.ts ~ line 27 ~ setRunAppStyle ~ name", runApp.name);
    const index = state.runAppList.findIndex((item) => item.id === runApp.id);
    if (index !== -1) {
      state.runAppList[index].style[runApp.name] = runApp.value;
    }
  },
};

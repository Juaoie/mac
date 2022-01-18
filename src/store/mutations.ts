import { NavigationRes } from "@/socket/interface/response/NavigationRes";
import { RunAppRes, StyleRes } from "@/socket/interface/response/RunAppRes";
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
   * 设置navList
   * @param state
   * @param navList
   */
  setNavList(state: State, navList: NavigationRes[]) {
    state.navList = navList;
  },
  /**
   * 设置单个runapp
   * @param state
   * @param runApp
   */
  setRunAppStyle(state: State, runApp: { id: number; style: StyleRes }) {
    const index = state.runAppList.findIndex((item) => item.id === runApp.id);
    if (index !== -1) {
      state.runAppList[index].style = runApp.style;
    }
  },
  /**
   * 设置应用隐藏属性
   * @param state
   * @param runApp
   */
  setRunAppHidden(state: State, runApp: { id: number; hidden: boolean }) {
    const index = state.runAppList.findIndex((item) => item.id === runApp.id);
    if (index !== -1) {
      state.runAppList[index].hidden = runApp.hidden;
    }
  },
};

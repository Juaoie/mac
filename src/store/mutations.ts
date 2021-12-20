import { RunAppRes } from "@/socket/interface/response/RunAppRes";
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
  // setRunApp(state:State,runApp:RunAppRes){
  //  const runApp=  state.runAppList.find(item=>item.id === runApp.id)

  // }
};

import { State } from "./state";
import { ActionContext } from "vuex";
import { addRunApp, getRunAppList, deleteRunApp ,setRunApp} from "@/socket/api";
import { RunAppReq } from "@/socket/interface/request/RunAppReq";
import { RunAppRes } from "@/socket/interface/response/RunAppRes";
export const actions = {
  /**
   * 设置
   * @param context
   * @param runApp
   */
  async setRunApp(context: ActionContext<State, any>, runApp: RunAppRes) {
       await setRunApp(runApp)
       
  },
  /**
   * 添加
   * @param context
   */
  async addRunApp(context: ActionContext<State, any>, runApp: RunAppReq) {
    await addRunApp(runApp);
    const runAppList = await getRunAppList();
    context.commit("setRunAppList", runAppList);
    context.commit("setMaxZIndex", Math.max(...runAppList.map((item) => item.style.zIndex)));
  },
  /**
   * 删除
   * @param context
   * @param runAppId
   */
  async deleteRunApp(context: ActionContext<State, any>, runAppId: number) {
    await deleteRunApp({ id: runAppId });
    context.commit(
      "setRunAppList",
      context.state.runAppList.filter((item) => item.id !== runAppId)
    );
  },
};
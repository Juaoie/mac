import { State } from "./state";
export const getters = {
  zIndexMax(state: State) {
    return Math.max(...state.runAppList.map((item) => item.style.zIndex));
  },
};

import { State } from "./state";
export const mutations = {
  setMaxZIndex(state: State, zIndex: number) {
    if (zIndex > state.maxZIndex) state.maxZIndex = zIndex;
  },
};

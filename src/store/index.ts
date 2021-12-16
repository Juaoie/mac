import { createStore, createLogger, Store, useStore as baseUseStore } from "vuex";
import { state, State } from "./state";
import { mutations } from "./mutations";
import { InjectionKey } from "vue";

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore({
  state,
  mutations,
});

// 定义自己的 `useStore` 组合式函数
export function useStore() {
  return baseUseStore(key);
}

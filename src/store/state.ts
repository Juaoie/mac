/**
 * State必填，需要约束类型
 */
export interface State {
  maxZIndex: number;
}

export const state: State = {
  maxZIndex: 0, //最大的z-index
};

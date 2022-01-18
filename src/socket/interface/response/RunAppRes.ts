export interface RunAppRes {
  id: number;
  appId: number;
  title: string;
  state: boolean;
  hidden: boolean;
  fullScreen: boolean;
  style: StyleRes;
}
export interface StyleRes {
  id: number;
  left: number;
  top: number;
  width: number;
  height: number;
  zIndex: number;
}

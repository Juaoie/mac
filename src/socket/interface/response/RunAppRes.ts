export interface RunAppRes {
  id: number;
  appId: number;
  title: string;
  state: boolean;
  style: StryleRes;
}
export interface StryleRes {
  id: number;
  left: number;
  top: number;
  width: number;
  height: number;
  zIndex: number;
}

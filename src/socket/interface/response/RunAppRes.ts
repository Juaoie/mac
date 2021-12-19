export interface RunAppRes {
  id: number;
  appId: number;
  title: string;
  state: boolean;
  style: StrleRes;
}
export interface StrleRes {
  id: number;
  left: number;
  top: number;
  width: number;
  height: number;
  zIndex: number;
}

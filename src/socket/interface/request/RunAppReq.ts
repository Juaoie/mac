export interface RunAppReq {
  appId: number;
  title: string;
  state: boolean;
  style: StyleReq;
}

export interface StyleReq {
  left: number;
  top: number;
  width: number;
  height: number;
  zIndex: number;
}

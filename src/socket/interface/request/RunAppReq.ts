export interface RunAppReq {
  appId: number;
  title: string;
  state: boolean;
  hidden: boolean;
  style: StyleReq;
}

export interface StyleReq {
  left: number;
  top: number;
  zIndex: number;
}

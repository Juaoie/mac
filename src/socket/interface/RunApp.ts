export interface RunApp {
  name: string;
  title: string;
  id: number;
  style: RunAppStyle;
}
export interface RunAppStyle {
  x: number;
  y: number;
  zIndex: number;
  minW: number;
  minH: number;
}

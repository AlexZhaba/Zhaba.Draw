import type { AllActions } from "../../ActionListener";
import type { CanvasSizeAction } from "../BottomBar/types";

export type Constructor<I = {}> = new (...args: any[]) => I;

export interface CanvasLayout {
  width: number;
  height: number;
  zoom: number;
}

export type ChangeCanvasLayout = {
  [K in keyof CanvasLayout]?: CanvasLayout[K];
};

export interface ConnectedObject {
  onGetAction: (action: AllActions | CanvasSizeAction) => void;
  bindTriggerFunction: Function;
}

export interface StyleState {
  strokeStyle: string;
  fillStyle: string;
  lineWidth: number;
}

export const mockedStyleState: StyleState = {
  strokeStyle: "red",
  fillStyle: "red",
  lineWidth: 10,
};

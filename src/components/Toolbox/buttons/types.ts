import type { FigureName } from "../../../types";
import type { ToolboxState } from "../types";

export type SetStateType = (data: NewToolboxState) => void;

export type NewToolboxState = {
  [K in keyof ToolboxState]?: ToolboxState[K];
};

export interface ToolboxButton {
  renderContent: () => string;
  getId: () => string;
}

export interface ToolboxButtonSetter extends ToolboxButton {
  init: (setState: SetStateType) => void;
  stateKey: keyof ToolboxState;
  value: ToolboxState[keyof ToolboxState];
  sendNewState: () => NewToolboxState;
}


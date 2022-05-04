import type { ToolboxState, RenderExtraData } from "../types";

export type SetStateType = (data: NewToolboxState) => void;

export type NewToolboxState = {
  [K in keyof ToolboxState]?: ToolboxState[K];
};

export interface ToolboxButton {
  render: (extraData?: RenderExtraData) => string;
  getId: () => string;
}

export interface ToolboxButtonSetter extends ToolboxButton {
  init: (setState: SetStateType) => void;
  stateKey: keyof ToolboxState;
  value: ToolboxState[keyof ToolboxState];
  sendNewState: () => NewToolboxState;
}

export interface ToolboxButtonGetter extends ToolboxButton {
  // init: (getState: () => ToolboxState) => void;
  onChangeState(state: ToolboxState): void;
}
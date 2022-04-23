import type { FigureName } from "../../../types";

export type SetStateType = (modeName: StateMode) => void;

export interface ToolboxButton {
  bindSelfListener: (setState: SetStateType) => void;
  readonly modeName: FigureName;
  readonly renderContent: () => string;
}

export interface StateMode {
  modeName: FigureName;
}

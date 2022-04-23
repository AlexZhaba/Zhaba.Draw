import type { StateMode } from "./buttons/mode/types";

interface StrokeStyle {
  strokeStyle: string;
}

export interface ToolboxState extends StateMode, StrokeStyle {
}

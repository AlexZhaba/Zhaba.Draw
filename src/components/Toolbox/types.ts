import type { StateMode } from "./buttons/mode/types";
import type { Color } from "./buttons/color/types";
import type { ColorType } from "./buttons/colorType/types";
import type { LineWidth } from "./buttons/lineWidth/types";
export interface ToolboxState extends StateMode, Color, ColorType, LineWidth {
  strokeStyle: string;
  fillStyle: string;
}

export interface RenderExtraData {
  isActive: boolean;
}
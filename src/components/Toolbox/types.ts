import type { StateMode } from "./buttons/mode/types";
import type { Color } from "./buttons/color/types";
import type { ColorType } from "./buttons/colorType/types";

export interface ToolboxState extends StateMode, Color, ColorType {
  strokeStyle: string;
  fillStyle: string;
}

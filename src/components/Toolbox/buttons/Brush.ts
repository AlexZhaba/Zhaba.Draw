import { Button, ToolboxButtonFigure } from "./AbstractButton";

export default class BrushButton extends Button implements ToolboxButtonFigure {
  readonly modeName: "BRUSH" = "BRUSH";
}

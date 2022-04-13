import { Button, ToolboxButtonFigure } from "./AbstractButton";

export default class RectangleButton extends Button implements ToolboxButtonFigure {
  readonly modeName: "RECTANGLE" = "RECTANGLE";
}

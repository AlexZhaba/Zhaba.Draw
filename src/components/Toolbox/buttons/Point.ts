import { Button, ToolboxButtonFigure } from "./AbstractButton";

export default class PointButton extends Button implements ToolboxButtonFigure {
  readonly modeName: "POINT" = "POINT";
}

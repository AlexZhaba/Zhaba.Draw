import { Button, ToolboxButtonFigure } from "./AbstractButton";

export default class CircleButton extends Button implements ToolboxButtonFigure {
  readonly modeName: "CIRCLE" = "CIRCLE";
}

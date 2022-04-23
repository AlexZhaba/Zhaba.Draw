import ClearableBaseFigure from "../ClearableBaseFigure";
import type { AllActions, Position } from "../../../../ActionListener/actions";
import { FigureName } from "../../../../types";

export default class Circle extends ClearableBaseFigure {
  static modeName = FigureName.CIRCLE;
  #startPosition: Position = { position: { x: 1, y: 2 } };

  constructor(context: CanvasRenderingContext2D) {
    super(context);
  }

  paintFigure(action: AllActions) {
    this.context.beginPath();
    const { position: { x, y } } = this.#startPosition;
    this.context.ellipse(
      (x + (action.position.x - x) / 2), (y + (action.position.y - y) / 2),
      Math.abs((action.position.x - x) / 2), Math.abs((action.position.y - y) / 2),
      0, 0, Math.PI * 2,
    );
    this.context.stroke();
    this.context.fill();
    this.context.closePath();
  }

  beforeStartDraw(action: AllActions) {
    this.#startPosition = {
      position: action.position,
    };
  }
}

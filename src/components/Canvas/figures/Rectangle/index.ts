import ClearableBaseFigure from "../ClearableBaseFigure";
import type { AllActions, Position } from "../../../../ActionListener/actions";
import { FigureName } from "../BaseFigure";

export default class Rectangle extends ClearableBaseFigure {
  static modeName = FigureName.RECTANGLE;
  #startPosition: Position = { position: { x: 1, y: 2 } };

  constructor(context: CanvasRenderingContext2D) {
    super(context);
  }

  paintFigure(action: AllActions) {
    const startX = this.#startPosition.position.x;
    const startY = this.#startPosition.position.y;
    this.context.beginPath();
    this.context.lineWidth = 2;
    this.context.moveTo(startX, startY);
    this.context.rect(startX, startY, action.position.x - startX, action.position.y - startY);
    this.context.stroke();
    this.context.closePath();
  }

  beforeStartDraw(action: AllActions) {
    this.#startPosition = {
      position: action.position,
    };
  }
}

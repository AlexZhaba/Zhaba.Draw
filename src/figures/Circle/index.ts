import ClearableBaseFigure from "../ClearableBaseFigure";
import type { AllActions, Position } from "../../ActionListener/actions";

export default class Circle extends ClearableBaseFigure {
  #startPosition: Position = { position: { x: 1, y: 2 } };

  constructor(context: CanvasRenderingContext2D) {
    super(context);
  }

  paintFigure(action: AllActions) {
    this.context.beginPath();
    this.context.lineWidth = 2;
    this.context.strokeStyle = "rgba(0, 0, 0, 1)";
    this.context.arc(
      this.#startPosition.position.x, this.#startPosition.position.y,
      Math.sqrt(
        Math.abs(action.position.x - this.#startPosition.position.x) ** 2 +
        Math.abs(action.position.y - this.#startPosition.position.y) ** 2,
      ),
      0, 2 * Math.PI,
    );
    this.context.stroke();
    this.context.closePath();
  }

  beforeStartDraw(action: AllActions) {
    this.#startPosition = {
      position: action.position,
    };
  }
}

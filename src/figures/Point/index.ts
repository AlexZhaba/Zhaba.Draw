import type { Position, mouseActions, AllActions } from "../../ActionListener/actions";
import BaseFigure from "../BaseFigure";

export default class Point extends BaseFigure {
  #lastPosition: Position = { position: { x: 1, y: 2 } };

  constructor(context: CanvasRenderingContext2D) {
    super(context);
  }

  paintFigure(action: AllActions) {
    this.context.beginPath();
    this.context.moveTo(this.#lastPosition.position.x, this.#lastPosition.position.y);
    this.context.lineTo(action.position.x, action.position.y);
    this.context.stroke();
    this.context.closePath();

    this.#lastPosition = {
      position: action.position,
    };
  }

  protected getStopAction(): keyof typeof mouseActions {
    return "mouseup";
  }

  protected getStartAction(): keyof typeof mouseActions {
    return "mousedown";
  }

  beforeStartDraw(action: AllActions) {
    this.#lastPosition = {
      position: action.position,
    };
  }

  onStopAction(fn: Function): Point {
    console.log("stop line");
    fn();
    return this;
  }
}

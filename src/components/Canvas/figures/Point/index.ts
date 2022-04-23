import { Position, mouseActions, AllActions } from "../../../../ActionListener/actions";
import BaseFigure from "../BaseFigure";
import { FigureName } from "../../../../types";

export default class Point extends BaseFigure {
  static modeName = FigureName.POINT;
  #lastPosition: Position = { position: { x: 1, y: 2 } };

  constructor(context: CanvasRenderingContext2D) {
    super(context);
  }

  paintFigure(action: AllActions) {
    this.context.lineWidth = 1;
    this.context.lineCap = "square";
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

  onStopAction(action: AllActions) {

  }

  getTransferActions(): Set<keyof typeof mouseActions> {
    const set =  new Set() as Set<keyof typeof mouseActions>;
    set.add(mouseActions.mouseup);
    set.add(mouseActions.mousemove);
    set.add(mouseActions.mousedown);
    return set;
  }
}

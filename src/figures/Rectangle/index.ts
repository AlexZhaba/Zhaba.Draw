import BaseFigure from "../BaseFigure";
import { AllActions, mouseActions, Position } from "../../ActionListener/actions";

export default class Rectangle extends BaseFigure {
  #startPosition: Position = { position: { x: 1, y: 2 } };
  #prevPosition: Position = { position: { x: 1, y: 2 } };

  constructor(context: CanvasRenderingContext2D) {
    super(context);
  }

  getStopAction(): keyof typeof mouseActions {
    return "mouseup";
  }

  getStartAction(): keyof typeof mouseActions {
    return "mousedown";
  }

  override draw(action: AllActions) {
    this.clearAll();
    this.paintFigure(action);
  }

  paintFigure(action: AllActions) {
    const startX = this.#startPosition.position.x;
    const startY = this.#startPosition.position.y;
    // this.context.clearRect(0, 0, 1140, 600);
    this.context.beginPath();
    this.context.strokeStyle = "#000";
    this.context.moveTo(startX, startY);
    this.context.rect(startX, startY, action.position.x - startX, action.position.y - startY);
    this.context.stroke();
    this.context.closePath();
    this.#prevPosition = { position: action.position };
  }

  onStopAction(action: AllActions) {
    console.log("onStopAction");
    console.log(action);
    this.paintFigure(action);
  }

  beforeStartDraw(action: AllActions) {
    this.#startPosition = {
      position: action.position,
    };
    this.#prevPosition = this.#startPosition;
    // this.context.globalCompositeOperation = "destination-in";
  }

  getTransferActions(): Set<keyof typeof mouseActions> {
    const set =  new Set() as Set<keyof typeof mouseActions>;
    set.add(mouseActions.mouseup);
    set.add(mouseActions.mousedown);
    return set;
  }
}

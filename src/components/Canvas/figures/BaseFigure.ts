import type { AllActions } from "../../../ActionListener";
import type { mouseActions, Position } from "../../../ActionListener/actions";
import type { StyleState } from "../types";

export default abstract class BaseFigure {
  protected context: CanvasRenderingContext2D;
  constructor(context: CanvasRenderingContext2D) {
    this.context = context;
  }
  protected abstract getStopAction(): keyof typeof mouseActions;
  protected abstract getStartAction(): keyof typeof mouseActions;
  protected abstract paintFigure(action: AllActions): void;

  abstract beforeStartDraw(position: Position): void;
  abstract onStopAction(action: AllActions, styleState?: StyleState): void;

  draw(action: AllActions, styleState: StyleState) {
    this.setStyle(styleState);
    this.paintFigure(action);
  }

  checkForStop(action: AllActions) {
    return action.eventType === this.getStopAction();
  }

  checkForStart(action: AllActions) {
    return action.eventType === this.getStartAction();
  }

  clearAll() {
    // TODO: Забайндить на Canvas.layout
    this.context.clearRect(0, 0, 4000, 4000);
  }

  setStyle(style: StyleState) {
    this.context.strokeStyle = style.strokeStyle;
    this.context.fillStyle = style.fillStyle;
    console.log(style.lineWidth);
    this.context.lineWidth = style.lineWidth;
  }

  abstract getTransferActions(): Set<keyof typeof mouseActions>;
}

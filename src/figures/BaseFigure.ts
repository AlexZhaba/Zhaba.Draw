import type { AllActions } from "../ActionListener";
import type { mouseActions, Position } from "../ActionListener/actions";

export enum FigureName {
  RECTANGLE,
  POINT,
  CIRCLE,
}

export default abstract class BaseFigure {
  protected context: CanvasRenderingContext2D;
  constructor(context: CanvasRenderingContext2D) {
    this.context = context;
  }
  protected abstract getStopAction(): keyof typeof mouseActions;
  protected abstract getStartAction(): keyof typeof mouseActions;
  protected abstract paintFigure(action: AllActions): void;

  abstract beforeStartDraw(position: Position): void;
  abstract onStopAction(action: AllActions): void;

  draw(action: AllActions) {
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

  abstract getTransferActions(): Set<keyof typeof mouseActions>;
}

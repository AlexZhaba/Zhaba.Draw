import BaseFigure, { FigureName } from "./BaseFigure";
import { AllActions, mouseActions, Position } from "../../../ActionListener/actions";

export default abstract class ClearableBaseFigure extends BaseFigure {
  constructor(context: CanvasRenderingContext2D) {
    super(context);
  }

  getStopAction(): keyof typeof mouseActions {
    return mouseActions.mouseup;
  }

  getStartAction(): keyof typeof mouseActions {
    return mouseActions.mousedown;
  }

  override draw(action: AllActions) {
    this.clearAll();
    this.paintFigure(action);
  }

  onStopAction(action: AllActions) {
    this.paintFigure(action);
  }

  getTransferActions(): Set<keyof typeof mouseActions> {
    const set =  new Set() as Set<keyof typeof mouseActions>;
    set.add(mouseActions.mouseup);
    set.add(mouseActions.mousedown);
    return set;
  }
}

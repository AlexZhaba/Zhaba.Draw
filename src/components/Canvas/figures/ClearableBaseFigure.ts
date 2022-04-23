import BaseFigure from "./BaseFigure";
import { AllActions, mouseActions } from "../../../ActionListener/actions";
import type { StyleState } from "../types";

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

  override draw(action: AllActions, styleState: StyleState) {
    this.clearAll();
    this.setStyle(styleState);
    this.paintFigure(action);
  }

  onStopAction(action: AllActions, styleState?: StyleState) {
    if (styleState) {
      this.setStyle(styleState);
    }
    this.paintFigure(action);
  }

  getTransferActions(): Set<keyof typeof mouseActions> {
    const set =  new Set() as Set<keyof typeof mouseActions>;
    set.add(mouseActions.mouseup);
    set.add(mouseActions.mousedown);
    return set;
  }
}

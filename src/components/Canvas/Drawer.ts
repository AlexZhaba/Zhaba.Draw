import type BaseFigure from "./figures/BaseFigure";
import type { AllActions } from "../../ActionListener";
import type { StyleState } from "./types";
import { mockedStyleState } from "./types";

// TODO: Переделать
type Constructor<I> = new (...args: ConstructorParameters<typeof BaseFigure>) => I;

type modeType = "active" | "inactive";

export default class Drawer<T extends Constructor<BaseFigure>> {
  readonly #figure: BaseFigure;
  #mode: modeType;
  #syncDrawer: Drawer<Constructor<BaseFigure>> | null = null;
  #styleState: StyleState = mockedStyleState;

  constructor(figure: T, context: CanvasRenderingContext2D, mode?: modeType) {
    this.#figure = new figure(context);
    this.#mode = mode || "inactive";
  }

  onGetAction(action: AllActions) {
    const isSyncAction =
      (this.#figure.getTransferActions().has(action.eventType)) && this.#syncDrawer;
    if (this.#mode === "active") {
      if (isSyncAction) this.#syncDrawer?.onGetAction(action);
      if (this.#figure.checkForStop(action)) {
        this.#mode = "inactive";
        this.#figure.onStopAction(action, this.#styleState);
        if (this.#syncDrawer) {
          console.log("CLEAR TEMPLATE");
          this.#figure.clearAll();
        }
      } else {
        console.log(this.#styleState, isSyncAction);
        this.#figure.draw(action, this.#styleState);
      }
    } else if (this.#figure.checkForStart(action)) {
      if (isSyncAction) this.#syncDrawer?.onGetAction(action);
      this.#mode = "active";
      this.#figure.beforeStartDraw(action);
    }
  }

  transfer(syncDrawer: Drawer<Constructor<BaseFigure>>) {
    this.#syncDrawer = syncDrawer;
  }

  getStyleState(newStyleState: StyleState) {
    this.#styleState = newStyleState;
    console.log(this.#styleState, this.#syncDrawer);
    this.#syncDrawer?.getStyleState(this.#styleState);
  }
}

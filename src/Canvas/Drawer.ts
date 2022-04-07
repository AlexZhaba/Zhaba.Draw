import type BaseFigure from "../figures/BaseFigure";
import type { AllActions } from "../ActionListener";

// TODO: Переделать
type Constructor<I> = new (...args: ConstructorParameters<typeof BaseFigure>) => I;

type modeType = "active" | "inactive";

export default class Drawer<T extends Constructor<BaseFigure>> {
  #figure: BaseFigure;
  #mode: modeType;
  #syncDrawer: Drawer<Constructor<BaseFigure>> | null = null;

  constructor(figure: T, context: CanvasRenderingContext2D, mode?: modeType) {
    this.#figure = new figure(context);
    this.#mode = mode || "inactive";
  }

  onGetAction(action: AllActions) {
    const isSyncAction =
      (this.#figure.getTransferActions().has(action.eventType)) && this.#syncDrawer;
    if (this.#mode === "active") {
      // TODO: хз почему ? надо
      if (isSyncAction) this.#syncDrawer?.onGetAction(action);
      if (this.#figure.checkForStop(action)) {
        this.#mode = "inactive";
        this.#figure.onStopAction(action);
        if (this.#syncDrawer) {
          console.log("CLEAR TEMPLATE");
          this.#figure.clearAll();
        }
      } else {
        // Баг с mouseover
        // if (!this.#syncDrawer) return;
        this.#figure.draw(action);
      }
    } else if (this.#figure.checkForStart(action)) {
      if (isSyncAction) this.#syncDrawer?.onGetAction(action);
      this.#mode = "active";
      this.#figure.beforeStartDraw(action);
      // this.#figure.draw(action);
    }
  }

  transfer(syncDrawer: Drawer<Constructor<BaseFigure>>) {
    this.#syncDrawer = syncDrawer;
  }
}

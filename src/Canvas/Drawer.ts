import type BaseFigure from "../figures/BaseFigure";
import type { AllActions } from "../ActionListener";

// TODO: Переделать
type Constructor<I> = new (...args: ConstructorParameters<typeof BaseFigure>) => I;

export default class Drawer<T extends Constructor<BaseFigure>> {
  #figure: BaseFigure;
  #mode: "active" | "inactive";

  constructor(figure: T, context: CanvasRenderingContext2D) {
    this.#figure = new figure(context);
    this.#mode = "inactive";
  }

  onGetAction(action: AllActions) {
    if (this.#mode === "active") {
      if (this.#figure.checkForStop(action)) {
        this.#mode = "inactive";
      } else {
        this.#figure.draw(action);
      }
    } else if (this.#figure.checkForStart(action)) {
      this.#mode = "active";
      this.#figure.beforeStartDraw(action);
      this.#figure.draw(action);
    }
  }
}

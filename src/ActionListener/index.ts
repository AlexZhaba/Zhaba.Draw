import * as Actions from "./actions";
import createBrowserAction from "./helpers";

export default class ActionListener {
  #target: Window | HTMLElement;
  constructor(
    target: Window | HTMLElement,
  ) {
    this.#target = target;
  }

  bindTriggerFunction(fn: (action: Actions.AllActions) => void): void {
    for (const mouseEvent in Actions.mouseActions) {
      this.#target.addEventListener(
        <keyof typeof Actions.mouseActions>mouseEvent,
        (event: Event | MouseEvent) => {
          if ("x" in event) {
            fn(createBrowserAction(event, <keyof typeof Actions.mouseActions>mouseEvent));
          }
        },
      );
    }
  }
}

export { AllActions } from "./actions";

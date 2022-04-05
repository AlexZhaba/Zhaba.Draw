import * as Actions from "./actions";
import createBrowserAction from "./helpers";

export default class ActionListener {
  #target: HTMLElement;
  constructor(id: string) {
    const target = document.getElementById(id);
    if (!target) {
      throw Error("ActionListener doesn't have target");
    }
    this.#target = target;
  }

  bindTriggerFunction(fn: (action: Actions.AllActions) => void): void {
    for (const mouseEvent in Actions.mouseActions) {
      this.#target.addEventListener(
        <keyof typeof Actions.mouseActions>mouseEvent,
        (event: MouseEvent) => {
          fn(createBrowserAction(event, <keyof typeof Actions.mouseActions>mouseEvent));
        },
      );
    }
  }
}

export { AllActions } from "./actions";

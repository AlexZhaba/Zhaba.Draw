import * as Actions from "./actions";
import createBrowserAction from "./helpers";

export interface OptionsType {
  excludeActionTypes?: Set<keyof typeof Actions.mouseActions>;
  includeActionTypes?: Set<keyof typeof Actions.mouseActions>;
}

interface Listener {
  action: keyof typeof Actions.mouseActions;
  listener: (event: Event | MouseEvent) => void;
}
export default class ActionListener {
  #target: Window | HTMLElement;
  readonly #canvas: HTMLCanvasElement | null = null;
  #listeners: Listener[] = [];

  constructor(
    target: Window | HTMLElement,
    canvas?: HTMLCanvasElement,
  ) {
    this.#target = target;
    if (canvas) this.#canvas = canvas;
  }

  bindTriggerFunction(
    fn: (action: Actions.AllActions) => void,
    options?: OptionsType,
  ) {
    console.log(options);
    for (const mouseEvent in Actions.mouseActions) {
      if (options) {
        if (
          options.excludeActionTypes &&
          options.excludeActionTypes.has(<keyof typeof Actions.mouseActions>mouseEvent)
        ) continue;

        if (
          options.includeActionTypes &&
          !options.includeActionTypes.has(<keyof typeof Actions.mouseActions>mouseEvent)
        ) continue;
      }
      const listener = (event: Event | MouseEvent) => {
        if ("x" in event) {
          fn(createBrowserAction(
            event, <keyof typeof Actions.mouseActions>mouseEvent, this.#canvas,
          ));
        }
      };
      this.#listeners.push({
        action: <keyof typeof Actions.mouseActions>mouseEvent,
        listener,
      });
      this.#target.addEventListener(
        <keyof typeof Actions.mouseActions>mouseEvent,
        listener,
      );
    }

    return this;
  }

  removeListeners() {
    this.#listeners.forEach(
      listener => this.#target.removeEventListener(listener.action, listener.listener,
    ));
  }
}

export { AllActions } from "./actions";

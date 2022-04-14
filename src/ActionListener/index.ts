import * as Actions from "./actions";
import createBrowserAction from "./helpers";

export interface OptionsType {
  excludeActionTypes?: Set<keyof typeof Actions.mouseActions>;
  includeActionTypes?: Set<keyof typeof Actions.mouseActions>;
}
export default class ActionListener {
  #target: Window | HTMLElement;
  readonly #canvas: HTMLCanvasElement | null = null;

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
  ): void {
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
      this.#target.addEventListener(
        <keyof typeof Actions.mouseActions>mouseEvent,
        (event: Event | MouseEvent) => {
          if ("x" in event) {
            fn(createBrowserAction(event, <keyof typeof Actions.mouseActions>mouseEvent, this.#canvas));
          }
        },
      );
    }
  }
}

export { AllActions } from "./actions";

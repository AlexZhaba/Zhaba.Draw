import type { AllActions } from "../ActionListener";
import ActionListener from "../ActionListener";
import { mouseActions } from "../ActionListener/actions";

interface BottomBarState {
  cursor_x: number;
  cursor_y: number;
  canvas_width: number;
  canvas_height: number;
}

export interface CanvasSizeAction {
  eventType: "CANVAS_SIZE";
  canvas_width: number;
  canvas_height: number;
}

const initialState: BottomBarState = {
  cursor_x: 0,
  cursor_y: 0,
  canvas_height: 0,
  canvas_width: 0,
};

export default class BottomBar {
  #mount: HTMLElement;
  #mountId: string;
  #state: BottomBarState = initialState;
  #isBind: boolean = false;
  #selectedWidth: boolean = false;
  #selectedHeight: boolean = false;

  constructor(mount: string) {
    this.#mountId = mount;
    const el = document.getElementById(mount);
    if (!el) {
      throw new Error(`Bottom bar doesn't have root ${mount}`);
    }
    this.#mount = el;
  }

  onGetAction(action: AllActions | CanvasSizeAction) {
    if (action.eventType === mouseActions.mousemove) {
      this.#state.cursor_x = action.position.x;
      this.#state.cursor_y = action.position.y;
      this.#render();
    }
    if (action.eventType === "CANVAS_SIZE") {
      this.#state.canvas_width = action.canvas_width;
      this.#state.canvas_height = action.canvas_height;
      this.#render();
    }
  }

  bindTriggerFunction() {

  }

  #render() {
    console.log("render");
    const htmlSize = document.getElementById(`${this.#mountId}__size--value`);
    if (!htmlSize) {
      throw new Error(`${this.#mountId}__size doesn't exist`);
    }
    if (htmlSize.innerHTML !== `${this.#state.canvas_width}x${this.#state.canvas_height}`) {
      htmlSize.innerHTML = `${this.#state.canvas_width}x${this.#state.canvas_height}`;
    }

    const htmlPosition = document.getElementById(`${this.#mountId}__cursor--value`);
    if (!htmlPosition) {
      throw new Error(`${this.#mountId}__size doesn't exist`);
    }
    if (htmlPosition.innerHTML !== `${this.#state.cursor_x}x${this.#state.cursor_y}`) {
      htmlPosition.innerHTML = `${this.#state.cursor_x}x${this.#state.cursor_y}`;
    }

    if (this.#isBind) return;
    new ActionListener(htmlSize).bindTriggerFunction((action) => {
      console.log(action);
    });
    this.#isBind = true;
  }
}
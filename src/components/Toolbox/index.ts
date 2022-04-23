import modeButtons from "./buttons/mode";
import type {
  NewToolboxState,
  ToolboxButtonSetter,
} from "./buttons/types";
import type { ToolboxState } from "./types";
import { FigureName } from "../../types";

const initialState: ToolboxState = {
  modeName: FigureName.BRUSH,
  strokeStyle: "5px",
};

export default class Toolbox {
  #mount: HTMLElement;
  #state: ToolboxState = initialState;
  #buttons: ToolboxButtonSetter[];
  #changeStateObserver?: (state: ToolboxState) => void;

  constructor(mount: string) {
    const el = document.getElementById(mount);
    if (!el) {
      throw new Error("Toolbox doesn't have a mount element");
    }
    this.#mount = el;
    this.#buttons = [];
    this.#getToolboxState();
    this.#render();
  }

  #render() {
    let stringHTML = "";
    this.#buttons.forEach((button) => {
      stringHTML += `
        <div class="toolbox__button ${this.#state.modeName === button.value && "toolbox__button--active"}" id="${button.getId()}">
          ${button.renderContent()}
        </div>
      `;
    });
    this.#mount.innerHTML = stringHTML;

    // re-binding
    this.#buttons.forEach((button) => {
      button.init(this.#setState.bind(this));
    });
  }

  #setState(newState: NewToolboxState): void {
    console.log("setState");
    this.#state =  {
      ...this.#state,
      ...newState,
    };
    console.log(newState, this.#state);
    if (this.#changeStateObserver) {
      console.log("CHANGE STATE");
      this.#changeStateObserver(this.#state);
    }
    this.#render();
  }

  #getToolboxState() {
    // Получаем экземпляры кнопок
    modeButtons.forEach((button) => {
      this.#buttons.push(button);
    });
  }

  observeStateChanges(fn: (state: ToolboxState) => void) {
    this.#changeStateObserver = fn;
    // get initialState for canvas
    this.#setState(initialState);
  }
}

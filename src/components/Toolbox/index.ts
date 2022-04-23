// import buttons from "./buttons";
import modeButtons from "./buttons/mode";
import type { StateMode, ToolboxButton } from "./buttons/types";
import { getIdByModeName } from "./helpers";
import type { ToolboxState } from "./types";
import { FigureName } from "../../types";

const initialState: ToolboxState = {
  modeName: FigureName.BRUSH,
  // strokeStyle: "5px",
};

export default class Toolbox {
  #mount: HTMLElement;
  #state: ToolboxState = initialState;
  #buttons: ToolboxButton[];
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
        <div class="toolbox__button ${this.#state.modeName === button.modeName && "toolbox__button--active"}" id="${getIdByModeName(button.modeName)}">
          ${button.renderContent()}
        </div>
      `;
    });
    this.#mount.innerHTML = stringHTML;

    // re-binding
    this.#buttons.forEach((button) => {
      button.bindSelfListener(this.#setState.bind(this));
    });
  }

  #setState(newState: StateMode): void {
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

import buttons from "./buttons";
import type { StateMode, ToolboxButtonFigure } from "./buttons/AbstractButton";
import { getIdByModeName } from "./helpers";

const ICON_SIZE_PX = "24";

export interface ToolboxState extends StateMode {
}

const initialState: ToolboxState = {
  modeName: "CIRCLE",
};

export default class Toolbox {
  #mount: HTMLElement;
  #state: ToolboxState = initialState;
  #buttons: ToolboxButtonFigure[];
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

    // get initialState for canvas
    this.#setState(initialState);
  }

  #render() {
    let stringHTML = "";
    this.#buttons.forEach((button) => {
      stringHTML += `
        <div class="toolbox__button ${this.#state.modeName === button.modeName && "toolbox__button--active"}" id="${getIdByModeName(button.modeName)}">
          <svg viewBox="0 0 ${ICON_SIZE_PX} ${ICON_SIZE_PX}" height="${ICON_SIZE_PX}" width="${ICON_SIZE_PX}">
            <use href="#svg_${getIdByModeName(button.modeName).toLowerCase()}" width="${ICON_SIZE_PX}" height="${ICON_SIZE_PX}"></use>
          </svg>
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
    this.#state =  {
      ...this.#state,
      ...newState,
    };
    console.log(newState, this.#state);
    if (this.#changeStateObserver) {
      this.#changeStateObserver(this.#state);
    }
    this.#render();
  }

  #getToolboxState() {
    // Получаем экземпляры кнопок
    buttons.forEach((button) => {
      this.#buttons.push(
        new button(),
      );
    });
  }

  observeStateChanges(fn: (state: ToolboxState) => void) {
    this.#changeStateObserver = fn;
  }
}

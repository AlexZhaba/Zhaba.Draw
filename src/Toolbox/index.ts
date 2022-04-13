import buttons from "./buttons";
import type { StateMode, ToolboxButtonFigure } from "./buttons/AbstractButton";
import { getIdByModeName } from "./helpers";

const ICON_SIZE_PX = "24";

export interface ToolboxState extends StateMode {
}

export default class Toolbox {
  #mount: HTMLElement;
  #state?: ToolboxState;
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
    this.#buttons.forEach((button) => {
      button.bindSelfListener(this.#setState.bind(this));
    });
  }

  #render() {
    let stringHTML = "";
    this.#buttons.forEach((button) => {
      stringHTML += `
        <svg id="${getIdByModeName(button.modeName)}" viewBox="0 0 ${ICON_SIZE_PX} ${ICON_SIZE_PX}" height="${ICON_SIZE_PX}" width="${ICON_SIZE_PX}">
          <use href="#svg_${getIdByModeName(button.modeName).toLowerCase()}" width="${ICON_SIZE_PX}" height="${ICON_SIZE_PX}"></use>
        </svg>
      `;
    });
    this.#mount.innerHTML = stringHTML;
  }

  #setState(newState: StateMode): void {
    this.#state =  {
      ...this.#state,
      ...newState,
    };
    if (this.#changeStateObserver) {
      this.#changeStateObserver(this.#state);
    }
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

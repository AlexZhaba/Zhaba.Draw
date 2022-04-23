import modeButtons from "./buttons/mode";
import colorButtons from "./buttons/color";
import colorTypeButtons from "./buttons/colorType";
import type {
  NewToolboxState,
  ToolboxButtonSetter,
} from "./buttons/types";
import type { ToolboxState } from "./types";
import { FigureName } from "../../types";

const initialState: ToolboxState = {
  modeName: FigureName.BRUSH,
  color: "#ff0000",
  colorType: "outlineOnly",
  strokeStyle: "#000",
  fillStyle: "#000",
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
        <div class="toolbox__button ${this.#state[button.stateKey] === button.value && "toolbox__button--active"}" id="${button.getId()}">
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
    this.#extraChangeState(newState);
    if (this.#changeStateObserver) {
      console.log("CHANGE STATE");
      this.#changeStateObserver(this.#state);
    }
    this.#render();
  }
  // Для strokeWidth и strokeHeight при смене color
  #extraChangeState(newState: NewToolboxState) {
    if (!newState.color) return;
    switch (this.#state.colorType) {
      case "fillOnly": {
        this.#state.fillStyle = newState.color;
        break;
      }
      case "outlineOnly": {
        this.#state.strokeStyle = newState.color;
        break;
      }
      case "outlineFill": {
        this.#state.strokeStyle = newState.color;
        this.#state.fillStyle = newState.color;
        break;
      }
      default: {
        throw new Error(`Don't know what is ${this.#state.colorType}`);
      }
    }
  }

  #getToolboxState() {
    // Получаем экземпляры кнопок
    [...modeButtons, ...colorButtons, ...colorTypeButtons].forEach((button) => {
      this.#buttons.push(button);
    });
  }

  observeStateChanges(fn: (state: ToolboxState) => void) {
    this.#changeStateObserver = fn;
    // get initialState for canvas
    this.#setState(initialState);
  }
}

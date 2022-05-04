import { isButtonSetter } from "./helpers/index";
import modeButtons from "./buttons/mode";
import colorButtons from "./buttons/color";
import ColorCircle from "./buttons/colorCircle";
import LineWidthButton from "./buttons/lineWidth";
import colorTypeButtons from "./buttons/colorType";
import type {
  NewToolboxState,
  ToolboxButtonSetter,
  ToolboxButtonGetter,
} from "./buttons/types";
import type { ToolboxState } from "./types";
import { FigureName } from "../../types";

const initialState: ToolboxState = {
  modeName: FigureName.BRUSH,
  color: "#ff0000",
  colorType: "outlineOnly",
  strokeStyle: "#000",
  fillStyle: "#000",
  lineWidth: 25,
};

export default class Toolbox {
  #mount: HTMLElement;
  #state: ToolboxState = initialState;
  #buttons: (ToolboxButtonSetter | ToolboxButtonGetter)[][];
  #changeStateObservers: Array<(state: ToolboxState) => void> = [];

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
    this.#buttons.forEach((group) => {
      let groupHTML = "";
      group.forEach((button) => {
        if (isButtonSetter(button)) {
          // groupHTML += `
          //   <div class="toolbox__button ${this.#state[button.stateKey] === button.value ? "toolbox__button--active" : ""}"
          //   id="${button.getId()}">
          //     ${button.renderContent()}
          //   </div>
          // `;
          groupHTML += `
          ${button.render({
            isActive: this.#state[button.stateKey] === button.value,
          })}`;
        } else {
          groupHTML += `
            ${button.render()}
          `;
        }
      });
      stringHTML += `
        <div class="toolbox__group">
          ${groupHTML}
        </div>
      `;
    });
    this.#mount.innerHTML = stringHTML;

    // re-binding
    this.#buttons.forEach(group => group.forEach((button) => {
      if (isButtonSetter(button)) {
        button.init(this.#setState.bind(this));
      } else {
        this.#changeStateObservers.push(() => button.onChangeState(this.#state));
      }
    }));
  }

  #setState(newState: NewToolboxState): void {
    console.log("setState");
    this.#state =  {
      ...this.#state,
      ...newState,
    };
    this.#extraChangeState(newState);
    console.log("CHANGE STATE");
    this.#changeStateObservers.forEach(fn => fn(this.#state));
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
    // Получаем экземпляры кнопок и разбиваем по группам
    const figureGroup = [...modeButtons];
    const modificatorsGroup = [new ColorCircle(), ...colorButtons, new LineWidthButton("lineWidth", this.#state.lineWidth)];
    const colorTypesGroup = [...colorTypeButtons];
    this.#buttons.push(figureGroup);
    this.#buttons.push(modificatorsGroup);
    this.#buttons.push(colorTypesGroup);
  }

  observeStateChanges(fn: (state: ToolboxState) => void) {
    this.#changeStateObservers.push(fn);
    // get initialState for canvas
    this.#setState(initialState);
  }
}

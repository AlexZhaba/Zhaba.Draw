import type { ToolboxState } from "./../../types";
import type { ToolboxButtonGetter } from "./../types";

export default class ColorCircle implements ToolboxButtonGetter {
  #strokeStyle?: string;
  #fillStyle?: string;

  getId() {
    return "color_circle";
  }
  onChangeState(state: ToolboxState) {
    this.#fillStyle = state.fillStyle;
    this.#strokeStyle = state.strokeStyle;
  }
  renderContent() {
    return `
      <div style="grid-column: 1 / span 2; grid-row: 1 / span 2; display: flex; justify-content: center; align-items: center;">
        <div style="width: 50px; height: 50px; border-radius: 50%; background: ${this.#fillStyle}; border: 5px solid ${this.#strokeStyle}">
        </div>
      </div>
    `;
  }
}
import ButtonClickSetter from "../ButtonClickSetter";
import type { ToolboxState } from "../../types";

export default class ColorButton<StateKeyType extends keyof ToolboxState> extends ButtonClickSetter<StateKeyType> {
  renderContent(): string {
    if (this.value === "transparent") {
      return `
        <svg viewBox="0 0 24 24" width="24" height="24">
          <use href="#svg_close"></use>
        </svg>
      `;
    }
    return `
      <div style="background: ${this.value}; width: 24px; height: 24px; border-radius: 50%">
      </div>
    `;
  }
}

import ButtonClickSetter from "../ButtonClickSetter";
import type { ToolboxState } from "../../types";

const ICON_SIZE_PX = "24";

export default class ColorTypeButton<StateKeyType extends keyof ToolboxState> extends ButtonClickSetter<StateKeyType> {
  renderContent(): string {
    return `
      <div style="
        width: 20px; height: 20px;
        box-shadow: 0 0 0 2px ${this.value === "fillOnly" ? "transparent" : "black"};
        padding: 2px;
      ">
        <div style="
          background: ${this.value === "outlineOnly" ? "transparent" : "black"};
          width: 100%;
          height: 100%;
        ">
        </div>
      </div>
    `;
  }
}

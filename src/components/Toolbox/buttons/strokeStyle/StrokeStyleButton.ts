import ButtonClickSetter from "../ButtonClickSetter";
import type { ToolboxState } from "../../types";

export default class StrokeStyleButton<StateKeyType extends keyof ToolboxState> extends ButtonClickSetter<StateKeyType> {
  renderContent(): string {
    return `
      <div style="background: ${this.value}; width: 30px; height: 30px; border-radius: 50%">
      </div>
    `;
  }
}

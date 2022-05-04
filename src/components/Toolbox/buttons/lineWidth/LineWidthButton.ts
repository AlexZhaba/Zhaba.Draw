import { ButtonSetter } from "../ButtonSetter";
import type { ToolboxState, RenderExtraData } from "../../types";
import type { SetStateType } from "../types";

const sizes = [1, 2, 3, 5, 7, 8, 10, 12, 14, 16, 20, 25, 30, 35, 40, 50, 60];

export default class LineWidthButton<StateKeyType extends keyof ToolboxState> extends ButtonSetter<StateKeyType> {
  getId() {
    return "line_width";
  }

  override renderContainer(innerContent: string, extraData: RenderExtraData) {
    return innerContent;
  }

  init(setState: SetStateType) {

  }

  renderContent() {
    return `
      <div>
        <select id=${this.getId()}>
          ${sizes.map(size => `<option ${size === this.value ? "selected" : ""}>${size}</option>`)}
        </select>
      </div>
    `;
  }
}

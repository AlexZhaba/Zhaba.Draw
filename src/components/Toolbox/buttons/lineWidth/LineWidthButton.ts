import { ButtonSetter } from "../ButtonSetter";
import type { ToolboxState, RenderExtraData, } from "../../types";
import type { SetStateType, ToolboxButtonGetter } from "../types";

const sizes = [1, 2, 3, 5, 7, 8, 10, 12, 14, 16, 20, 25, 30, 35, 40, 50, 60];

export default class LineWidthButton<StateKeyType extends keyof ToolboxState> extends ButtonSetter<StateKeyType> implements ToolboxButtonGetter {
  #activeValue?: number;
  getId() {
    return "line_width";
  }

  override renderContainer(innerContent: string, extraData: RenderExtraData) {
    return innerContent;
  }

  init(setState: SetStateType) {
    // set defaultValue
    this.#activeValue = Number(this.value);

    const el = document.getElementById(this.getId()) as HTMLSelectElement;
    if (!el) {
      throw new Error(`no mount for ${el}`);
    }
    // TODO: remove any
    el.addEventListener("change", (event: any) => {
      setState({
        lineWidth: Number(event?.target?.value),
      });
    });
  }

  onChangeState(state: ToolboxState) {
    this.#activeValue = state.lineWidth;
  }

  renderContent() {
    return `
      <div class="custom-select">
        <select id=${this.getId()}>
          ${sizes.map(size => `<option ${size === (this.#activeValue ?? this.value) ? "selected" : ""}>${size}</option>`)}
        </select>
        <span>
          px
        </span>
      </div>
    `;
  }
}

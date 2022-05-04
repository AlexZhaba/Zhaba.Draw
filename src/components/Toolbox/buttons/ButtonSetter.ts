import type { NewToolboxState, SetStateType, ToolboxButtonSetter } from "./types";
import type { ToolboxState, RenderExtraData } from "../types";

export abstract class ButtonSetter
  <StateKeyType extends keyof ToolboxState>
  implements ToolboxButtonSetter {

  constructor(
    readonly stateKey: StateKeyType,
    public value: ToolboxState[StateKeyType],
  ) {}

  abstract getId(): string;
  abstract init(setState: SetStateType): void;
  abstract renderContent(extraData?: RenderExtraData): string;

  renderContainer(innerContent: string, extraData?: RenderExtraData) {
    return `
      <div
        class="toolbox__button ${extraData?.isActive ? "toolbox__button--active" : ""}"
        id="${this.getId()}"
      >
        ${innerContent}
      </div>
    `;
  }

  render(extraData?: RenderExtraData) {
    return this.renderContainer(this.renderContent(extraData), extraData);
  }

  sendNewState(): NewToolboxState {
    return {
      [this.stateKey]: this.value,
    };
  }
}

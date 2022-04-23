import type { NewToolboxState, SetStateType, ToolboxButtonSetter } from "./types";
import type { ToolboxState } from "../types";

export abstract class ButtonSetter
  <StateKeyType extends keyof ToolboxState>
  implements ToolboxButtonSetter {

  constructor(
    readonly stateKey: StateKeyType,
    readonly value: ToolboxState[StateKeyType],
  ) {}

  abstract getId(): string;
  abstract init(setState: SetStateType): void;
  abstract renderContent(): string;

  sendNewState(): NewToolboxState {
    return {
      [this.stateKey]: this.value,
    };
  }
}

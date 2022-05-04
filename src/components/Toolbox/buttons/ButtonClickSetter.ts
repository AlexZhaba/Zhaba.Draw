import { ButtonSetter } from "./ButtonSetter";
import ActionListener, { AllActions, OptionsType } from "../../../ActionListener";
import * as Actions from "../../../ActionListener/actions";
import { getIdByModeName } from "../helpers";
import type { ToolboxState } from "../types";
import type { SetStateType } from "./types";

export default abstract class ButtonClickSetter<StateKeyType extends keyof ToolboxState> extends ButtonSetter<StateKeyType> {
  getId() {
    return getIdByModeName(String(this.value));
  }

  init(setState: SetStateType) {
    const mount = document.getElementById(this.getId());
    if (!mount) {
      throw new Error(`No mount for ${this.value}`);
    }
    new ActionListener(mount).bindTriggerFunction(
      (action: AllActions) => {
        setState(this.sendNewState());
      },
      this.getListenerOptions(),
    );
  }

  protected getListenerOptions(): OptionsType | undefined {
    return {
      includeActionTypes: new Set<keyof typeof Actions.mouseActions>()
        .add(Actions.mouseActions.click),
      excludeActionTypes: undefined,
    };
  }
}

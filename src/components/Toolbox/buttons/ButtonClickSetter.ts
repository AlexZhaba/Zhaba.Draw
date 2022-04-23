import { ButtonSetter } from "./ButtonSetter";
import ActionListener, { AllActions, OptionsType } from "../../../ActionListener";
import * as Actions from "../../../ActionListener/actions";
import { getIdByModeName } from "../helpers";
import type { ToolboxState } from "../types";
import type { SetStateType } from "./types";

const ICON_SIZE_PX = "24";

export default class ButtonClickSetter<StateKeyType extends keyof ToolboxState> extends ButtonSetter<StateKeyType> {

  getId() {
    return getIdByModeName(this.value);
  }

  init(setState: SetStateType) {
    console.log(this);
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

  renderContent() {
    return `
      <svg viewBox="0 0 ${ICON_SIZE_PX} ${ICON_SIZE_PX}" height="${ICON_SIZE_PX}" width="${ICON_SIZE_PX}">
        <use href="#svg_${getIdByModeName(this.value).toLowerCase()}" width="${ICON_SIZE_PX}" height="${ICON_SIZE_PX}"></use>
      </svg>
    `;
  }
}

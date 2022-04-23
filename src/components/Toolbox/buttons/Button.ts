import ActionListener, { AllActions, OptionsType } from "../../../ActionListener";
import { getIdByModeName } from "../helpers";
import * as Actions from "../../../ActionListener/actions";
import type { SetStateType, StateMode, ToolboxButton } from "./types";
import type { FigureName } from "../../../types";

const ICON_SIZE_PX = "24";

export class Button implements ToolboxButton {
  constructor(readonly modeName: FigureName) {}

  bindSelfListener(setState: SetStateType) {
    console.log(this);
    const mount = document.getElementById(getIdByModeName(this.modeName));
    if (!mount) {
      throw new Error(`No mount for ${this.modeName}`);
    }
    new ActionListener(mount).bindTriggerFunction(
      (action: AllActions) => {
        setState(this.onAction(action));
      },
      this.getListenerOptions(),
    );
  }

  protected onAction(action: AllActions): StateMode {
    return {
      modeName: this.modeName,
    };
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
        <use href="#svg_${getIdByModeName(this.modeName).toLowerCase()}" width="${ICON_SIZE_PX}" height="${ICON_SIZE_PX}"></use>
      </svg>
    `;
  }
}

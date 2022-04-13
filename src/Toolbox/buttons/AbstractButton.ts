import ActionListener, { AllActions, OptionsType } from "../../ActionListener";
import { getIdByModeName } from "../helpers";
import * as Actions from "../../ActionListener/actions";

type ModeName = "RECTANGLE" | "CIRCLE" | "POINT";
export type SetStateType = (modeName: StateMode) => void;

export interface ToolboxButton {
  bindSelfListener: (setState: SetStateType) => void;
}

export interface ToolboxButtonFigure extends ToolboxButton {
  readonly modeName: ModeName;
}

export interface StateMode {
  modeName: ModeName;
}

export abstract class Button {
  abstract modeName: ModeName;
  // protected abstract onAction(action: AllActions): StateMode;
  // protected abstract getListenerOptions(): OptionsType | undefined;

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
}

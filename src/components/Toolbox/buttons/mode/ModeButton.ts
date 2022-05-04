import ButtonClickSetter from "../ButtonClickSetter";
import type { ToolboxState } from "../../types";
import { getIdByModeName } from "../../helpers";

const ICON_SIZE_PX = "24";

export default class ModeButton<StateKeyType extends keyof ToolboxState> extends ButtonClickSetter<StateKeyType> {
  renderContent() {
    return `
      <svg viewBox="0 0 ${ICON_SIZE_PX} ${ICON_SIZE_PX}" height="${ICON_SIZE_PX}" width="${ICON_SIZE_PX}">
        <use href="#svg_${getIdByModeName(String(this.value)).toLowerCase()}" width="${ICON_SIZE_PX}" height="${ICON_SIZE_PX}"></use>
      </svg>
    `;
  }
}

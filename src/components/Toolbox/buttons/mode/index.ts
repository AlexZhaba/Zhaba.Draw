import ButtonClickSetter from "../ButtonClickSetter";
import { FigureName } from "../../../../types";

function modeFabric(name: FigureName) {
  return new ButtonClickSetter("modeName", name);
}

const modeButtons: ButtonClickSetter<"modeName">[] = [];

for (const keyName in FigureName) {
  modeButtons.push(modeFabric(
    FigureName[keyName as keyof typeof FigureName],
  ));
}

export default modeButtons;

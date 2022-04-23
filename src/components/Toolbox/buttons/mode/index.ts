import ModeButton from "./ModeButton";
import { FigureName } from "../../../../types";

function modeFabric(name: FigureName) {
  return new ModeButton("modeName", name);
}

const modeButtons: ModeButton<"modeName">[] = [];

for (const keyName in FigureName) {
  modeButtons.push(modeFabric(
    FigureName[keyName as keyof typeof FigureName],
  ));
}

export default modeButtons;

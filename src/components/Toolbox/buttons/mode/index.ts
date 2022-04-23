import { Button } from "../Button";
import { FigureName } from "../../../../types";

function modeFabric(name: FigureName) {
  return new Button(name);
}

const modeButtons: Button[] = [];

for (const keyName in FigureName) {
  modeButtons.push(modeFabric(
    FigureName[keyName as keyof typeof FigureName],
  ));
}

export default modeButtons;

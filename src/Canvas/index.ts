import ActionListener, { AllActions } from "../ActionListener";
import Point from "../figures/Point";
import Drawer from "./Drawer";
import type BaseFigure from "../figures/BaseFigure";
import Rectangle from "../figures/Rectangle";
import { mouseActions } from "../ActionListener/actions";
import Circle from "../figures/Circle";
import figures from "../figures";
import type { ToolboxState } from "../Toolbox";
import { FigureName } from "../figures/BaseFigure";

type Constructor<I = {}> = new (...args: any[]) => I;

export default class Canvas {
  readonly #context: CanvasRenderingContext2D;
  #mode: "point" = "point";
  #drawer: Drawer<Constructor<BaseFigure>>;
  #syncContext: CanvasRenderingContext2D | null = null;

  constructor(canvasEl: HTMLCanvasElement, id: string) {
    this.#context = <CanvasRenderingContext2D>canvasEl.getContext("2d");
    new ActionListener(window).bindTriggerFunction(
      this.onAction.bind(this),
      {
        excludeActionTypes: new Set<keyof typeof mouseActions>().add(mouseActions.mousedown),
      },
    );

    new ActionListener(document.getElementById(id) || window).bindTriggerFunction(
      this.onAction.bind(this),
      {
        includeActionTypes: new Set<keyof typeof mouseActions>().add(mouseActions.mousedown),
      },
    );
    this.#drawer = new Drawer(Circle, this.#context);
  }

  onAction(action: AllActions) {
    if (this.#drawer) {
      this.#drawer.onGetAction(action);
    }
  }

  transferTo(canvasSyncEl: HTMLCanvasElement): this {
    this.#syncContext = <CanvasRenderingContext2D>canvasSyncEl.getContext("2d");
    this.#drawer.transfer(new Drawer(Circle, this.#syncContext));
    return this;
  }

  onToolboxChanges(state: ToolboxState): void {
    console.log("123");
    const figure = figures.find(fig => fig.modeName === FigureName[state.modeName]);
    console.log("123");
    if (!figure) {
      throw new Error(`Figure with ${state.modeName}`);
    }

    console.log("123");
    this.#drawer = new Drawer(figure, this.#context);
    console.log("123");
    if (this.#syncContext) {
      this.#drawer.transfer(new Drawer(figure, this.#syncContext));
    }
  }
}

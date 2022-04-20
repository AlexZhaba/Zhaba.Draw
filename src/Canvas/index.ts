import ActionListener, { AllActions } from "../ActionListener";
import Drawer from "./Drawer";
import type BaseFigure from "../figures/BaseFigure";
import { mouseActions } from "../ActionListener/actions";
import Circle from "../figures/Circle";
import figures from "../figures";
import type { ToolboxState } from "../Toolbox";
import { FigureName } from "../figures/BaseFigure";

type Constructor<I = {}> = new (...args: any[]) => I;

interface CanvasLayout {
  width: number;
  height: number;
  zoom: number;
}

export default class Canvas {
  readonly #context: CanvasRenderingContext2D;
  #drawer: Drawer<Constructor<BaseFigure>>;
  #syncContext: CanvasRenderingContext2D | null = null;
  #layout: CanvasLayout;

  constructor(canvasEl: HTMLCanvasElement, id: string) {
    this.#context = <CanvasRenderingContext2D>canvasEl.getContext("2d");
    new ActionListener(window, canvasEl).bindTriggerFunction(
      this.onAction.bind(this),
      {
        excludeActionTypes: new Set<keyof typeof mouseActions>().add(mouseActions.mousedown),
      },
    );

    new ActionListener(document.getElementById(id) || window, canvasEl).bindTriggerFunction(
      this.onAction.bind(this),
      {
        includeActionTypes: new Set<keyof typeof mouseActions>().add(mouseActions.mousedown),
      },
    );
    this.#drawer = new Drawer(Circle, this.#context);
    this.#layout = {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight - 100,
      zoom: 1,
    };
    this.#setLayout(canvasEl);
    // this.#layout.width = 2000;
    // this.#layout.height = 4000;
    this.#setLayout(canvasEl);
  }

  onAction(action: AllActions) {
    if (this.#drawer) {
      this.#drawer.onGetAction(action);
    }
  }

  transferTo(canvasSyncEl: HTMLCanvasElement): this {
    this.#syncContext = <CanvasRenderingContext2D>canvasSyncEl.getContext("2d");
    this.#drawer.transfer(new Drawer(Circle, this.#syncContext));
    this.#setLayout(canvasSyncEl);
    return this;
  }

  onToolboxChanges(state: ToolboxState): void {
    console.log(`toolbox`);
    console.log(state);
    const figure = figures.find(fig => fig.modeName === FigureName[state.modeName]);
    if (!figure) {
      throw new Error(`Figure with ${state.modeName}`);
    }
    console.log(figure);
    this.#drawer = new Drawer(figure, this.#context);
    if (this.#syncContext) {
      this.#drawer.transfer(new Drawer(figure, this.#syncContext));
    }
  }

  #setLayout(canvasEl: HTMLCanvasElement) {
    const { width, height, zoom } = this.#layout;
    canvasEl.setAttribute("width", `${width}px`);
    canvasEl.setAttribute("height", `${height}px`);
    canvasEl.style.width = `${width}px`;
    canvasEl.style.height = `${height}px`;
    return this;
  }
}

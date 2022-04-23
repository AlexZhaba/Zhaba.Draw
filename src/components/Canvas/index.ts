import type { CanvasSizeAction } from "../BottomBar/types";
import ActionListener, { AllActions } from "../../ActionListener";
import Drawer from "./Drawer";
import type BaseFigure from "./figures/BaseFigure";
import { FigureName } from "../../types";
import { mouseActions } from "../../ActionListener/actions";
import Circle from "./figures/Circle";
import figures from "./figures";
import type { ToolboxState } from "../Toolbox/types";

type Constructor<I = {}> = new (...args: any[]) => I;

interface CanvasLayout {
  width: number;
  height: number;
  zoom: number;
}

export type ChangeCanvasLayout = {
  [K in keyof CanvasLayout]?: CanvasLayout[K];
};

interface ConnectedObject {
  onGetAction: (action: AllActions | CanvasSizeAction) => void;
  bindTriggerFunction: Function;
}

export default class Canvas {
  readonly #context: CanvasRenderingContext2D;
  #canvasEl: HTMLCanvasElement;
  #syncCanvasEl?: HTMLCanvasElement;
  #drawer: Drawer<Constructor<BaseFigure>>;
  #syncContext: CanvasRenderingContext2D | null = null;
  #layout: CanvasLayout;
  #connector?: ConnectedObject;

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
      height: document.documentElement.clientHeight - 100 - 50,
      zoom: 1,
    };
    this.#canvasEl = canvasEl;
    this.#showLayout(this.#canvasEl);
    // this.#layout.width = 2000;
    // this.#layout.height = 4000;
    this.#showLayout(this.#canvasEl);
  }

  onAction(action: AllActions) {
    if (this.#drawer) {
      this.#drawer.onGetAction(action);
    }
    if (this.#connector) {
      this.#connector.onGetAction(action);
    }
  }

  transferTo(canvasSyncEl: HTMLCanvasElement) {
    this.#syncContext = <CanvasRenderingContext2D>canvasSyncEl.getContext("2d");
    this.#drawer.transfer(new Drawer(Circle, this.#syncContext));
    this.#syncCanvasEl = canvasSyncEl;
    this.#showLayout(this.#syncCanvasEl);
    return this;
  }

  connectedWith(connector: ConnectedObject) {
    this.#connector = connector;
    this.#connector.onGetAction({
      eventType: "CANVAS_SIZE",
      canvas_width: this.#layout.width,
      canvas_height: this.#layout.height,
    });
    this.#connector.bindTriggerFunction(this.#setLayout.bind(this));
    return this;
  }

  onToolboxChanges(state: ToolboxState) {
    console.log(`toolbox`);
    console.log(state);
    const figure = figures.find(fig => fig.modeName === state.modeName);
    if (!figure) {
      throw new Error(`Figure with ${state.modeName}`);
    }
    console.log(figure);
    this.#drawer = new Drawer(figure, this.#context);
    if (this.#syncContext) {
      this.#drawer.transfer(new Drawer(figure, this.#syncContext));
    }
  }

  #setLayout(newLayout: ChangeCanvasLayout) {
    console.log("Set layout");
    this.#layout = {
      ...this.#layout,
      ...newLayout,
    };
    this.#showLayout(this.#canvasEl);
    if (this.#syncCanvasEl) {
      this.#showLayout(this.#syncCanvasEl);
    }
  }

  #showLayout(canvasEl: HTMLCanvasElement) {
    const { width, height, zoom } = this.#layout;
    canvasEl.setAttribute("width", `${width}px`);
    canvasEl.setAttribute("height", `${height}px`);
    canvasEl.style.width = `${width}px`;
    canvasEl.style.height = `${height}px`;
    if (this.#connector) {
      this.#connector.onGetAction({
        eventType: "CANVAS_SIZE",
        canvas_width: this.#layout.width,
        canvas_height: this.#layout.height,
      });
    }
    return this;
  }
}

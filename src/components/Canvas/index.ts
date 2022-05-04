import ActionListener, { AllActions } from "../../ActionListener";
import Drawer from "./Drawer";
import type BaseFigure from "./figures/BaseFigure";
import { mouseActions } from "../../ActionListener/actions";
import Circle from "./figures/Circle";
import figures from "./figures";
import type { ToolboxState } from "../Toolbox/types";
import {
  CanvasLayout,
  ChangeCanvasLayout,
  ConnectedObject,
  Constructor,
  StyleState,
  mockedStyleState,
} from "./types";

export default class Canvas {
  readonly #context: CanvasRenderingContext2D;
  #canvasEl: HTMLCanvasElement;
  #syncCanvasEl?: HTMLCanvasElement;
  #drawer: Drawer<Constructor<BaseFigure>>;
  #syncContext: CanvasRenderingContext2D | null = null;
  #layout: CanvasLayout;
  #connector?: ConnectedObject;
  styleState: StyleState = mockedStyleState;

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
    this.#showLayout(this.#canvasEl);
    const wrapper = document.getElementById("wrapper");
    if (!wrapper) return;

    // adding zoom listener
    // @ts-ignore
    wrapper.addEventListener("mousewheel", (event: WheelEvent) => {
      if (!event.ctrlKey) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      console.log(event.deltaY);
      if (event.deltaY < 0) {
        this.#setLayout({
          zoom: Math.max(0.1, Number(Number(this.#layout.zoom - Math.abs(event.deltaY / 200)).toFixed(2))),
        });
      } else {
        this.#setLayout({
          zoom: Math.min(5, Number(Number(this.#layout.zoom + Math.abs(event.deltaY / 200)).toFixed(2))),
        });
      }
    });
  }

  onAction(action: AllActions) {
    const newAction = { ...action };
    newAction.position.x *= this.#layout.zoom;
    newAction.position.y *= this.#layout.zoom;
    if (this.#drawer) {
      this.#drawer.onGetAction(newAction);
    }
    if (this.#connector) {
      this.#connector.onGetAction(newAction);
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
      zoom: this.#layout.zoom,
    });
    this.#connector.bindTriggerFunction(this.#setLayout.bind(this));
    return this;
  }

  onToolboxChanges(state: ToolboxState) {
    console.log(`toolbox`);
    console.log(state);
    // modeName
    const figure = figures.find(fig => fig.modeName === state.modeName);
    if (!figure) {
      throw new Error(`Figure with ${state.modeName}`);
    }
    this.#drawer = new Drawer(figure, this.#context);
    if (this.#syncContext) {
      this.#drawer.transfer(new Drawer(figure, this.#syncContext));
    }

    // styles
    this.#setStyleState(state);
  }

  #setStyleState(state: ToolboxState) {
    this.styleState = {
      ...state,
      strokeStyle: state.colorType === "fillOnly" ? "transparent" : state.strokeStyle,
      fillStyle: state.colorType === "outlineOnly" ? "transparent" : state.fillStyle,

    };
    this.#drawer.getStyleState(this.styleState);
  }

  #setLayout(newLayout: ChangeCanvasLayout) {
    console.log("Set layout");
    this.#layout = {
      ...this.#layout,
      ...newLayout,
    };
    console.log(this.#layout.zoom);
    this.#showLayout(this.#canvasEl);
    if (this.#syncCanvasEl) {
      this.#showLayout(this.#syncCanvasEl);
    }
  }

  #showLayout(canvasEl: HTMLCanvasElement) {
    const { width, height, zoom } = this.#layout;
    const curWidth = canvasEl.getAttribute("width");
    const curHeight = canvasEl.getAttribute("height");
    let currentCanvasImage: ImageData | null = null;
    if (this.#syncCanvasEl && this.#syncContext) {
      // save current canvas layout because when change attribute `width` and `height` canvas clear
      currentCanvasImage = this.#syncContext.getImageData(0, 0, this.#syncCanvasEl.width, this.#syncCanvasEl.height);
    }
    if (`${width}px` !== curWidth) canvasEl.setAttribute("width", `${width}px`);
    if (`${height}px` !== curHeight)  canvasEl.setAttribute("height", `${height}px`);
    canvasEl.style.width = `${width / zoom}px`;
    canvasEl.style.height = `${height / zoom}px`;

    if (this.#syncCanvasEl && this.#syncContext && currentCanvasImage) {
      this.#syncContext.putImageData(currentCanvasImage, 0, 0);
    }
    if (this.#connector) {
      this.#connector.onGetAction({
        eventType: "CANVAS_SIZE",
        canvas_width: this.#layout.width,
        canvas_height: this.#layout.height,
        zoom: Number(this.#layout.zoom.toFixed(2)),
      });
    }
    return this;
  }
}

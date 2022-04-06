import ActionListener, { AllActions } from "../ActionListener";
import Point from "../figures/Point";
import Drawer from "./Drawer";
import type BaseFigure from "../figures/BaseFigure";

type Constructor<I = {}> = new (...args: any[]) => I;

export default class Canvas {
  readonly #context: CanvasRenderingContext2D;
  #listener: ActionListener;
  #mode: "point" = "point";
  #drawer: Drawer<Constructor<BaseFigure>> | null;

  constructor(canvasEl: HTMLCanvasElement, id: string) {
    this.#context = <CanvasRenderingContext2D>canvasEl.getContext("2d");
    this.#listener = new ActionListener(id);
    this.#listener.bindTriggerFunction(this.onAction.bind(this));
    this.#drawer = new Drawer(Point, this.#context);
  }

  onAction(action: AllActions) {
    if (this.#drawer) {
      this.#drawer.onGetAction(action);
    }
  }
}

import ActionListener, { AllActions } from "../ActionListener";

export default class Canvas {
  #context: CanvasRenderingContext2D;
  #listener: ActionListener;

  constructor(canvasEl: HTMLCanvasElement, id: string) {
    this.#context = <CanvasRenderingContext2D>canvasEl.getContext("2d");
    this.#listener = new ActionListener(id);
    this.#listener.bindTriggerFunction(this.onAction);
  }

  onAction(action: AllActions) {

  }
}

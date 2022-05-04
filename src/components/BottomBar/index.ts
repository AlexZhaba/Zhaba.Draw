import ActionListener, { AllActions } from "../../ActionListener";
import { mouseActions } from "../../ActionListener/actions";
import type { BottomBarState, CanvasSizeAction, CanvasSize } from "./types";
import Modal from "../Modal";
import CanvasSizeModalReflection from "./CanvasSizeModalReflection";
import type { ChangeCanvasLayout } from "../Canvas/types";

const initialState: BottomBarState = {
  cursor_x: 0,
  cursor_y: 0,
  canvas_height: 0,
  canvas_width: 0,
  zoom: 100,
};

const zoomValue = [10, 25, 50, 75, 100, 125, 150, 175, 200, 300, 500];

export default class BottomBar {
  #mount: HTMLElement;
  #mountId: string;
  #state: BottomBarState = initialState;
  #isBind: boolean = false;
  #trigger?: (data: ChangeCanvasLayout) => void;

  constructor(mount: string) {
    this.#mountId = mount;
    const el = document.getElementById(mount);
    if (!el) {
      throw new Error(`Bottom bar doesn't have root ${mount}`);
    }
    this.#mount = el;
  }

  onGetAction(action: AllActions | CanvasSizeAction) {
    if (action.eventType === mouseActions.mousemove) {
      this.#state.cursor_x = action.position.x;
      this.#state.cursor_y = action.position.y;
      this.#render();
    }
    if (action.eventType === "CANVAS_SIZE") {
      this.#state.canvas_width = action.canvas_width;
      this.#state.canvas_height = action.canvas_height;
      this.#state.zoom = Number((action.zoom * 100).toFixed(0));
      this.#render();
    }
  }

  bindTriggerFunction(trigger: (data: ChangeCanvasLayout) => void) {
    console.log("LOOL");
    this.#trigger = trigger;
  }

  #render() {
    // size
    const htmlSize = document.getElementById(`${this.#mountId}__size--value`);
    if (!htmlSize) {
      throw new Error(`${this.#mountId}__size doesn't exist`);
    }
    if (htmlSize.innerHTML !== `${this.#state.canvas_width}x${this.#state.canvas_height}`) {
      htmlSize.innerHTML = `${this.#state.canvas_width}x${this.#state.canvas_height}`;
    }

    // position
    const htmlPosition = document.getElementById(`${this.#mountId}__cursor--value`);
    if (!htmlPosition) {
      throw new Error(`${this.#mountId}__size--value doesn't exist`);
    }
    if (htmlPosition.innerHTML !== `${this.#state.cursor_x.toFixed(0)}x${this.#state.cursor_y.toFixed(0)}`) {
      if (
        this.#state.cursor_x < 0 || this.#state.cursor_x > this.#state.canvas_width ||
        this.#state.cursor_y < 0 || this.#state.cursor_y > this.#state.canvas_height
      ) {
        htmlPosition.innerHTML = "";
      } else {
        htmlPosition.innerHTML = `${this.#state.cursor_x.toFixed(0)}x${this.#state.cursor_y.toFixed(0)}`;
      }
    }

    // zoom
    const htmlZoom = document.getElementById(`${this.#mountId}__zoom--value`);
    if (!htmlZoom) {
      throw new Error(`${this.#mountId}__size--zoom doesn't exist`);
    }

    if (htmlZoom.dataset.value !== String(this.#state.zoom)) {
      console.log("zoom render");
      console.log(htmlZoom.dataset.value, this.#state.zoom);
      htmlZoom.dataset.value = String(this.#state.zoom);
      const additionalZoom = [];
      if (!(zoomValue.find(val => val === this.#state.zoom))) {
        additionalZoom.push(this.#state.zoom);
      }
      htmlZoom.innerHTML = `
        <select>
          ${[...zoomValue, ...additionalZoom].sort((a: number, b: number) => a - b).map(value => (
            `<option${value === this.#state.zoom ? " selected" : ""} value="${value}">${value}%</option>`
          ))}
        </select>
      `;
      // bind-zoom
      // TODO: remove any
      function changeZoom(this: BottomBar, event: any) {
        console.log("LOL");
        if (!this.#trigger) return;
        this.#trigger({
          zoom: Number(event.target.value) / 100,
        });
      }
      htmlZoom.children[0].addEventListener("change", changeZoom.bind(this));
    }

    if (this.#isBind) return;
    const htmlSizeWithImage = document.getElementById(`${this.#mountId}__size`);
    if (!htmlSizeWithImage) {
      throw new Error(`${this.#mountId}__size doesn't exist`);
    }
    // bind-size
    new ActionListener(htmlSizeWithImage).bindTriggerFunction(this.onClickCanvasSize.bind(this), {
      includeActionTypes: new Set<keyof typeof mouseActions>().add(mouseActions.click),
    });

    this.#isBind = true;
  }

  async onClickCanvasSize(action: AllActions) {
    const modal = new Modal<CanvasSize>("modal-root", new CanvasSizeModalReflection({
      canvas_width: this.#state.canvas_width,
      canvas_height: this.#state.canvas_height,
    }));
    const result = await modal.getResult();
    console.log(`RESULT`, result);
    if (!this.#trigger) return;
    console.log("TRIGGER");
    if (result?.canvas_width && result.canvas_height) {
      this.#trigger({
        width: result?.canvas_width,
        height: result?.canvas_height,
      });
    }
  }
}

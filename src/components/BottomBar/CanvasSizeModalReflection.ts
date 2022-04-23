import type { Reflection } from "../Modal/types";
import type { CanvasSize } from "./types";

type ResolveType<T> = (value: T | PromiseLike<T>) => void;

const INPUT_SIZE_WIDTH = "canvas_size_width";
const INPUT_SIZE_HEIGHT = "canvas_size_height";
const INPUT_SIZE_BUTTON = "canvas_size_button";

export default class CanvasSizeModalReflection implements Reflection {
  #mount?: HTMLElement;
  #resolve?: ResolveType<CanvasSize | null>;
  #defaultValue: CanvasSize;

  constructor(defaultValue: CanvasSize) {
    this.#defaultValue = defaultValue;
  }

  setMount(mount: HTMLElement) {
    this.#mount = mount;
  }
  init() {
    if (!this.#mount) return;
    this.#mount.innerHTML = `
      <div class="window-wrapper">
        <label for="${INPUT_SIZE_WIDTH}">Width</label>
        <input class="custom-input" id="${INPUT_SIZE_WIDTH}" />
        <label for="${INPUT_SIZE_HEIGHT}">Height</label>
        <input class="custom-input" id="${INPUT_SIZE_HEIGHT}" />
        <button class="custom-button" id="${INPUT_SIZE_BUTTON}">Применить</button>
      </div>
    `;
    const widthEl = <HTMLInputElement>document.getElementById(INPUT_SIZE_WIDTH);
    const heightEl = <HTMLInputElement>document.getElementById(INPUT_SIZE_HEIGHT);
    if (!widthEl || !heightEl) {
      throw new Error("input doesn't exist");
    }

    widthEl.value = String(this.#defaultValue.canvas_width);
    heightEl.value = String(this.#defaultValue.canvas_height);

    document.getElementById(INPUT_SIZE_BUTTON)?.addEventListener("click", () => {
      const [widthStr, heightStr] = [widthEl.value, heightEl.value];
      const width = Number(widthStr);
      const height = Number(heightStr);
      console.log(height);
      if (Number.isNaN(width) || width > 4000 || width < 1) {
        alert("Not corrected width value");
        return;
      }
      if (Number.isNaN(height) || height > 4000 || height < 1) {
        alert("Not corrected height value");
        return;
      }
      if (!this.#resolve) return;

      this.#resolve({
        canvas_width: width,
        canvas_height: height,
      });
    });
  }

  bindTriggerFunction(resolve: ResolveType<CanvasSize | null>) {
    this.#resolve = resolve;
  }

  onClose() {
    if (this.#resolve) {
      this.#resolve(null);
    }
  }
}

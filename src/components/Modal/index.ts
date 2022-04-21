import ActionListener from "../../ActionListener";
import { closeMountStyles, initialMountStyles, initialWindowStyles } from "./styles";
import type { Reflection } from "./types";
import { mouseActions } from "../../ActionListener/actions";
class Modal<T> {
  #mount: HTMLElement;
  #window: HTMLElement;
  #reflection: Reflection;
  #isWindowClicked: boolean = true;
  #listeners: ActionListener[] = [];

  constructor(id: string, reflection: Reflection) {
    const el = document.getElementById(id);
    if (!el) {
      throw new Error("Modal doesn't have mount");
    }
    this.#mount = el;
    this.#reflection = reflection;
    const windowEl = document.getElementById(`${id}__content`);
    if (!windowEl) {
      throw new Error("ModalWindow doesn't have mount");
    }
    this.#window = windowEl;
    this.#initialStyling();
    this.#reflection.setMount(this.#window);
    this.#reflection.init();
    this.#checkClick();
  }

  #initialStyling() {
    for (const style in initialMountStyles) {
      this.#mount.style[style] = initialMountStyles[style] || "";
    }
    for (const style in initialWindowStyles) {
      this.#window.style[style] = initialWindowStyles[style] || "";
    }
  }

  #checkClick() {
    const globalWindowListener = new ActionListener(window).bindTriggerFunction(
      () => {
        console.log("globalwindow");
        if (this.#isWindowClicked) {
          this.#isWindowClicked = false;
        } else {
          this.#closeModal();
        }
      // tslint:disable-next-line: align
      }, {
        includeActionTypes: new Set<keyof typeof mouseActions>().add(mouseActions.click),
      },
    );
    const windowListener =  new ActionListener(this.#window).bindTriggerFunction(
      () => {
        console.log("window");
        this.#isWindowClicked = true;
      // tslint:disable-next-line: align
      }, {
        includeActionTypes: new Set<keyof typeof mouseActions>().add(mouseActions.click),
      },
    );

    this.#listeners.push(globalWindowListener);
    this.#listeners.push(windowListener);
  }

  #onClose() {
    for (const style in closeMountStyles) {
      this.#mount.style[style] = closeMountStyles[style] || "";
    }

    this.#listeners.forEach(actionListener => actionListener.removeListeners());
  }

  #closeModal() {
    console.log("closeModal");
    this.#reflection.onClose();
    this.#onClose();
  }

  async getResult() {
    return new Promise<T | null>((resolve, reject) => {
      this.#reflection.bindTriggerFunction((data: T | null) => {
        resolve(data);
        this.#onClose();
      });
    });
  }
}

export default Modal;

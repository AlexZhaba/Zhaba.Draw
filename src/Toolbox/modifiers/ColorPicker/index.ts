class ColorPicker {
  #mount: HTMLElement;
  constructor(mount: string) {
    const el = document.getElementById(mount);
    if (!el) {
      throw new Error("Color picker doesn't have a mount");
    }
    this.#mount = el;
  }
}
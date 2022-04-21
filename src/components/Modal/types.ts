export interface Reflection {
  bindTriggerFunction: Function;
  setMount: (mount: HTMLElement) => void;
  init: () => void;
  onClose: () => void;
}

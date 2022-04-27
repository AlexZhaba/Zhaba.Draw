import type { ToolboxButtonGetter, ToolboxButtonSetter } from './../buttons/types';
export const getIdByModeName = (modeName: string) => `mode-${modeName}`;

export const isButtonSetter = (button: ToolboxButtonGetter | ToolboxButtonSetter): button is ToolboxButtonSetter => {
  return (<ToolboxButtonSetter>button).stateKey !== undefined;
};
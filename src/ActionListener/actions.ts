type l = keyof HTMLElementEventMap;

// type MouseActions<T> = {
//   [K in keyof T]?: K
// };

// const mouseActions: MouseActions<HTMLElementEventMap> = {
const mouseActions = {
  mousemove: "mousemove",
  mouseup: "mouseup",
  mousedown: "mousedown",
} as const;

interface Position {
  position: {
    x: number;
    y: number;
  };
}

interface MousedownAction extends Position {
  eventType: typeof mouseActions.mousedown;
}

interface MouseupAction extends Position {
  eventType: typeof mouseActions.mouseup;
}

interface MousemoveAction extends Position {
  eventType: typeof mouseActions.mousemove;
}

type AllActions = MousedownAction | MouseupAction | MousemoveAction;

export default mouseActions;

export {
  mouseActions,
  AllActions,
  MouseupAction,
  MousedownAction,
};

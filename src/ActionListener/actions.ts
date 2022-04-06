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

export {
  Position,
  mouseActions,
  AllActions,
  MouseupAction,
  MousedownAction,
};

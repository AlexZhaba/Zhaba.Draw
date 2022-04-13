const mouseActions = {
  mousemove: "mousemove",
  mouseup: "mouseup",
  mousedown: "mousedown",
  mouseover: "mouseover",
  click: "click",
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

interface MouseoverAction extends Position {
  eventType: typeof mouseActions.mouseover;
}

interface MousemoveAction extends Position {
  eventType: typeof mouseActions.mousemove;
}

interface ClickAction extends Position {
  eventType: typeof mouseActions.click;
}

type AllActions = MousedownAction | MouseupAction | MousemoveAction | MouseoverAction | ClickAction;

export {
  Position,
  mouseActions,
  AllActions,
  MouseupAction,
  MousedownAction,
};

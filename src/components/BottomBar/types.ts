export interface CanvasSize {
  canvas_width: number;
  canvas_height: number;
}
export interface BottomBarState extends CanvasSize {
  cursor_x: number;
  cursor_y: number;
}

export interface CanvasSizeAction extends CanvasSize {
  eventType: "CANVAS_SIZE";
}

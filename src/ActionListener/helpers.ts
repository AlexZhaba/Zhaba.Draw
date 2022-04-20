import type { mouseActions, AllActions } from "./actions";

const convertCoordinateFromDocumentToCanvas = (
  x: number,
  y: number,
  canvasEl: HTMLCanvasElement,
) => ({
  x: x + -canvasEl.getBoundingClientRect().left,
  y: y + -canvasEl.getBoundingClientRect().top,
});

export default function createBrowserAction(
  event: MouseEvent,
  actionType: keyof typeof mouseActions,
  canvasEl: HTMLCanvasElement | null,
): AllActions {
  // console.log(event.x, event.y);
  const { x, y } = canvasEl ?
    convertCoordinateFromDocumentToCanvas(event.x, event.y, canvasEl) : event;
  // console.log("NEW", x, y);
  return {
    eventType: actionType,
    position: {
      x,
      y,
    },
  };
}

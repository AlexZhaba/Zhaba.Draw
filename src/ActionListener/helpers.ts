import type { mouseActions, AllActions } from "./actions";

export default function createBrowserAction(
  event: MouseEvent,
  actionType: keyof typeof mouseActions,
): AllActions {
  return {
    eventType: actionType,
    position: {
      x: event.x,
      y: event.y,
    },
  };
}

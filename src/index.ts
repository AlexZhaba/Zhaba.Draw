import "./index.scss";
import Canvas from "./components/Canvas";
import Toolbox from "./components/Toolbox";
import BottomBar from "./components/BottomBar";

document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = <HTMLCanvasElement | null>document.getElementById("canvas");
  const canvasTempEl = <HTMLCanvasElement | null>document.getElementById("canvas_template");
  if (!canvasEl || !canvasTempEl) {
    console.error("Canvas doesn't exist");
    return;
  }

  const bottomBar = new BottomBar("bottom-bar");

  const canvas = new Canvas(
    canvasTempEl, "canvas_template",
  ).connectedWith(bottomBar).transferTo(canvasEl);

  const toolbox = new Toolbox("aside").observeStateChanges(
    canvas.onToolboxChanges.bind(canvas),
  );
});

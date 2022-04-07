import "./index.scss";
import Canvas from "./Canvas";

document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = <HTMLCanvasElement | null>document.getElementById("canvas");
  const canvasTempEl = <HTMLCanvasElement | null>document.getElementById("canvas_template");
  if (!canvasEl || !canvasTempEl) {
    console.error("Canvas doesn't exist");
    return;
  }
  const canvas = new Canvas(
    canvasTempEl, "canvas_template",
  ).transferTo(canvasEl);
});

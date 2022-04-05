import "./index.scss";
import Canvas from "./Canvas";

document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = <HTMLCanvasElement | null>document.getElementById("canvas");
  if (!canvasEl) {
    console.error("Canvas doesn't exist");
    return;
  }
  const canvas = new Canvas(canvasEl, "canvas");
});

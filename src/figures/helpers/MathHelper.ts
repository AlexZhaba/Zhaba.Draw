export const getDistance = (startX: number, startY: number, endX: number, endY: number) => (
  Math.sqrt(Math.abs(endX - startX) ** 2 + Math.abs(endY - startY) ** 2)
);

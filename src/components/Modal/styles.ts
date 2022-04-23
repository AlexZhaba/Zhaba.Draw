type CSSStyles = {
  [K in keyof CSSStyleDeclaration]?: CSSStyleDeclaration[K];
};

export const initialMountStyles: CSSStyles = {
  position: "fixed",
  left: "0px",
  right: "0px",
  bottom: "0px",
  top: "0px",
  background: "rgba(0, 0, 0, 0.5)",
  transition: ".3s all",
  zIndex: "10",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  visibility: "visible",
  opacity: "1",
};

export const initialWindowStyles: CSSStyles = {
  minHeight: "200px",
  minWidth: "300px",
  background: "white",
  borderRadius: "5px",
};

export const closeMountStyles: CSSStyles = {
  visibility: "hidden",
  opacity: "0",
};

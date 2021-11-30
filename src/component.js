import { join } from "lodash";

export function component() {
  const element = document.createElement("div");

  element.innerHTML = join(["Hello", "Webpack"], " ");

  return element;
}

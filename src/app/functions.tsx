import { MouseEvent, RefObject, useRef } from "react";
import { windows } from "./data";

let zIndex = 1;

export const openWindow = (e: MouseEvent<HTMLAnchorElement>) => (id: string) => {
  const window = windows.find((item) => item.name === id);

  if (window) {
    const element: HTMLElement | null = document.querySelector("." + window.classNamesWindow);
    if (element?.classList.contains("click02")) {
      zIndex++;
      element.style.zIndex = `${zIndex}`;
      element?.classList.remove("click02");
    } else {
      element?.classList.add("click02");
    }
  }
};

export const getUpZIndex = () => {
  return ++zIndex;
};

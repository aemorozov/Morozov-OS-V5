import { ReactElement } from "react";
import { AboutMe, Snake } from "../components/Windows/index";
import { Data } from ".";

export const windows: Data = [
  {
    name: "About me",
    icon: "/icon/text-x-readme-icon.png",
    classNameMenu: "icon-img-readme",
    classNamesWindow: "readme-container display-none",
    component: <AboutMe />,
  },
  {
    name: "Snake 1.5",
    icon: "/icon/snake.jpg",
    classNameMenu: "icon-img-snake",
    classNamesWindow: "snake-container display-none",
    component: <Snake />,
  },
  {
    name: "QR gen",
    icon: "/icon/android-chrome-192x192.png",
    classNameMenu: "icon-img-qr",
    classNamesWindow: "container",
  },
];

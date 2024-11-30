import { AboutMe, Snake, QRGen } from "../components/Windows/index";
import { Data } from "./types";

export const windows: Data = [
  {
    name: "About me",
    icon: "/icon/text-x-readme-icon.png",
    classNameMenu: "icon-img-readme",
    classNamesWindow: "readme-container",
    children: <AboutMe />,
  },
  {
    name: "Snake 1.5",
    icon: "/icon/snake.jpg",
    classNameMenu: "icon-img-snake",
    classNamesWindow: "snake-container",
    children: <Snake />,
  },
  {
    name: "QR gen",
    icon: "/icon/android-chrome-192x192.png",
    classNameMenu: "icon-img-qr",
    classNamesWindow: "container",
    children: <QRGen />,
  },
  {
    name: "GitHub",
    icon: "/img/github_logo.png",
    classNameMenu: "icon-img-github",
    link: "https://github.com/aemorozov",
  },
  {
    name: "Linkedin",
    icon: "/img/LinkedIn_logo.png",
    classNameMenu: "icon-img-li",
    link: "https://www.linkedin.com/in/aemorozov/",
  },
];

"use client";
import { FC, ReactElement, useRef } from "react";
import { getUpZIndex, openWindow } from "../functions";
import cn from "classnames";
import { DataItem } from "../data";

type WindowItemProps = DataItem & { isVisible?: boolean };

export const WindowItem: FC<WindowItemProps> = ({ name, classNamesWindow, icon, children, isVisible }) => {
  const ref = useRef<HTMLDivElement>(null);

  const closeCross = () => {
    const item = document.querySelector("." + classNamesWindow);
    item?.classList.add("click02");
  };

  return (
    <div
      ref={ref}
      className={cn(classNamesWindow, !isVisible && "click02")}
      onClick={() => {
        if (ref.current) ref.current.style.zIndex = String(getUpZIndex());
      }}>
      <div className="top-line">
        <div className="name-in-topline">
          <img className="img-top-line" src={icon} alt={name + " icon"} />
          <p className="p-top-line">{name}</p>
        </div>
        <div className="slide-down-button" onClick={closeCross}>
          ╳
        </div>
      </div>
      {children}
    </div>
  );
};

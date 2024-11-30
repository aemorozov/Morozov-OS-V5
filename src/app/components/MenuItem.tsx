"use client";
import { DataItem } from "../data";
import { getUpZIndex, openWindow } from "../functions";

import { FC, useRef } from "react";

type MenuItemProps = DataItem & { onClick?: VoidFunction };

export const MenuItem: FC<MenuItemProps> = ({ icon, name, classNameMenu, link, onClick }) => {
  return (
    <div>
      <div className="generator-icon icon">
        <a href={link} target="_blank" onClick={onClick}>
          <img src={icon} alt={`icon ${name}`} className={`icon-img ${classNameMenu}`} id={name} />
        </a>
      </div>
      <p className="icon-text">{name}</p>
    </div>
  );
};

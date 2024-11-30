"use client";

import { useState } from "react";
import { DataItem } from "../data";
import { MenuItem } from "./MenuItem";
import { WindowItem } from "./WindowItem";
import { getUpZIndex } from "../functions";

type MenuWindowItemProps = {
  item: DataItem;
  index: number;
};

export const MenuWindowItem = ({ item, index }: MenuWindowItemProps) => {
  const [isVisible, setIsVisible] = useState(index === 0);

  const close = () => {
    setIsVisible(false);
  };

  return (
    <>
      <MenuItem
        {...item}
        onClick={() => {
          setIsVisible(!isVisible);
          const window: HTMLDivElement | null = document.querySelector("." + item.classNamesWindow);
          if (window) window.style.zIndex = String(getUpZIndex());
        }}
      />
      {item.children && <WindowItem {...item} isVisible={isVisible} close={close} />}
    </>
  );
};

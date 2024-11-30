import { ReactChild, ReactElement, ReactNode } from "react";

export type DataItem = {
  name: string;
  icon: string;
  classNameMenu?: string;
  classNamesWindow?: string;
  link?: string;
  children?: ReactElement;
  clickToMenuIcon?: Function;
};

export type Data = Array<DataItem>;

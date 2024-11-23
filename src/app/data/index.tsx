import { ReactElement } from "react";

export { links } from "./data_links";
export { windows } from "./data_windows";

export type Data = Array<{
  name: string;
  icon: string;
  classNameMenu: string;
  link?: string;
  classNamesWindow?: string;
  component?: ReactElement;
}>;

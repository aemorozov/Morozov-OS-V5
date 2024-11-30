import { WindowItem } from "./WindowItem";
import { windows } from "../data";

export const Windows = () => {
  return (
    <>
      {windows.map(({ name, classNamesWindow, icon, children }) => {
        return (
          <WindowItem key={name} name={name} classNamesWindow={classNamesWindow} icon={icon} children={children} />
        );
      })}
    </>
  );
};

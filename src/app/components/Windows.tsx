import { WindowItem } from "./WindowItem";
import { windows } from "../data/index";

export const Windows = () => {
  return (
    <>
      {windows.map(({ name, classNamesWindow, icon, component }) => {
        return (
          <WindowItem key={name} name={name} classNamesWindow={classNamesWindow} icon={icon} component={component} />
        );
      })}
    </>
  );
};

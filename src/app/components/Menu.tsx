import { MenuItem } from "./MenuItem";
import { windows } from "../data/index";
import { WindowItem } from "./WindowItem";

export const Menu = () => {
  return (
    <>
      {windows.map(({ name, classNamesWindow, icon, children }) => {
        return (
          <WindowItem
            key={name}
            name={name}
            classNamesWindow={classNamesWindow}
            icon={icon}
            children={children}
            close={close}
          />
        );
      })}
      <div className="menu-bar">
        {windows.map(({ classNameMenu, icon, name }) => (
          <MenuItem key={"menu" + name} classNameMenu={classNameMenu} icon={icon} name={name} />
        ))}
      </div>
    </>
  );
};

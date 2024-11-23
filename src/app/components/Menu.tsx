import { MenuItem } from "./MenuItem";
import { windows, links } from "../data/index";

export const Menu = () => {
  return (
    <div className="menu-bar">
      {windows.map(({ classNameMenu, icon, name }) => (
        <MenuItem key={name} classNameMenu={classNameMenu} icon={icon} name={name} />
      ))}
      {links.map(({ classNameMenu, icon, name, link }) => (
        <MenuItem key={name} classNameMenu={classNameMenu} icon={icon} name={name} link={link} />
      ))}
    </div>
  );
};

import { FC } from "react";

type MenuItemProps = {
  icon: string;
  name: string;
  classNameMenu: string;
  link?: string;
};

export const MenuItem: FC<MenuItemProps> = ({ icon, name, classNameMenu, link }) => {
  return (
    <div>
      <div className="generator-icon icon">
        <a href={link} target="_blank">
          <img src={icon} alt={`icon ${name}`} className={`icon-img ${classNameMenu}`} />
        </a>
      </div>
      <p className="icon-text">{name}</p>
    </div>
  );
};

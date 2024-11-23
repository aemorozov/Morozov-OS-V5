import { FC } from "react";

type MenuItemProps = {
  icon: string;
  name: string;
  className: string;
  link?: string;
};

export const MenuItem: FC<MenuItemProps> = ({ icon, name, className, link }) => {
  return (
    <div>
      <div className="generator-icon icon">
        <a href={link} target="_blank">
          <img src={icon} alt={`icon ${name}`} className={`icon-img ${className} `} />
        </a>
      </div>
      <p className="icon-text">{name}</p>
    </div>
  );
};

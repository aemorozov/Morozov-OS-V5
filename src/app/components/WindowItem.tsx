import { FC } from "react";

type WindowItemProps = {
  name: string;
  className: string;
  icon: string;
};

export const WindowItem: FC<WindowItemProps> = ({ name, className, icon }) => {
  return (
    <div className={className}>
      <div className="top-line">
        <div className="name-in-topline">
          <img className="img-top-line" src={icon} alt={name + " icon"} />
          <p className="p-top-line">{name}</p>
        </div>
        <div className="slide-down-button">╳</div>
      </div>
    </div>
  );
};

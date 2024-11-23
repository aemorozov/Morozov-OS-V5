import { FC, ReactElement } from "react";

type WindowItemProps = {
  name: string;
  icon: string;
  classNamesWindow?: string;
  component?: ReactElement;
};

export const WindowItem: FC<WindowItemProps> = ({ name, classNamesWindow, icon, component }) => {
  return (
    <div className={classNamesWindow}>
      <div className="top-line">
        <div className="name-in-topline">
          <img className="img-top-line" src={icon} alt={name + " icon"} />
          <p className="p-top-line">{name}</p>
        </div>
        <div className="slide-down-button">╳</div>
      </div>
      {component}
    </div>
  );
};

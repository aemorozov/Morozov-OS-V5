import { WindowItem } from "./WindowItem";

export const Windows = () => {
  return (
    <>
      {windows.map(({ name, classNames, icon }) => {
        return <WindowItem key={name} name={name} className={classNames} icon={icon} />;
      })}
    </>
  );
};

const windows = [
  { name: "Snake 1.5", classNames: "snake-container", icon: "/icon/snake.jpg" },
  { name: "About me", classNames: "readme-container", icon: "/icon/text-x-readme-icon.png" },
];

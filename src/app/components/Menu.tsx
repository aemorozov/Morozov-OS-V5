import { MenuItem } from "./MenuItem";

export const Menu = () => {
  return (
    <div className="menu-bar">
      {menuItems.map(({ className, icon, name, link }) => (
        <MenuItem key={name} className={className} icon={icon} name={name} link={link} />
      ))}
    </div>
  );
};

const menuItems = [
  { className: "icon-img-readme", icon: "/icon/text-x-readme-icon.png", name: "About me" },
  { className: "icon-img-qr", icon: "/icon/android-chrome-192x192.png", name: "QR Gen" },
  { className: "icon-img-snake", icon: "/icon/snake.jpg", name: "Snake 1.5" },
  {
    className: "icon-img-github",
    icon: "/img/github_logo.png",
    name: "GitHub",
    link: "https://github.com/aemorozov",
  },
  {
    className: "icon-img-li",
    icon: "/img/LinkedIn_logo.png",
    name: "Linkedin",
    link: "https://www.linkedin.com/in/aemorozov/",
  },
];

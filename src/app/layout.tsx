import "./globals.css";
import { Menu, Head, UpdateInfo, Windows } from "./components/index";
import { windows } from "./data";
import { MenuWindowItem } from "./components/MenuWindowItem";

export default function RootLayout() {
  return (
    <html lang="en">
      <Head />
      <body className={`antialiased`}>
        <UpdateInfo />
        <div className="menu-bar">
          {windows.map((item, index) => (
            <MenuWindowItem item={item} key={item.name} index={index} />
          ))}
        </div>
      </body>
    </html>
  );
}

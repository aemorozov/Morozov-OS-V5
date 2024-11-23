import "./globals.css";
import { Menu, Head, UpdateInfo, Windows } from "./components/index";

export default function RootLayout() {
  return (
    <html lang="en">
      <Head />
      <body className={`antialiased`}>
        <Menu />
        <UpdateInfo />
        <Windows />
      </body>
    </html>
  );
}

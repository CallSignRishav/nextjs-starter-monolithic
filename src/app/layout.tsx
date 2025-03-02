import { LayoutProps } from "@/lib/types";
import "./globals.css";

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;

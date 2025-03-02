import { LayoutProps } from "@/lib/types";

const FrontendLayout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default FrontendLayout;

import { LayoutProps } from "@/lib/types";

const StudioLayout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default StudioLayout;

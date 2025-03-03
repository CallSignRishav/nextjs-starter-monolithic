import HeaderStudio from "@/components/StudioComps/Headers/HeaderStudio";
import { LayoutProps } from "@/lib/types";

const StudioLayout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <body>
        <HeaderStudio />

        <main className="container mx-auto px-6">{children}</main>
      </body>
    </html>
  );
};

export default StudioLayout;

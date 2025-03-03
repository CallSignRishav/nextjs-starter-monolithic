import HeaderFront from "@/components/FrontendComps/Headers/HeaderFront";
import { LayoutProps } from "@/lib/types";

const FrontendLayout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <body>
        <HeaderFront />

        <main className="container mx-auto px-6">{children}</main>
      </body>
    </html>
  );
};

export default FrontendLayout;

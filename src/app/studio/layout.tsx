import HeaderStudio from "@/components/StudioComps/Headers/HeaderStudio";
import SidebarContainer from "@/components/StudioComps/SidebarComps/SidebarContainer";
import { SidebarProvider } from "@/components/ui/sidebar";
import { LayoutProps } from "@/lib/types";

const StudioLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <HeaderStudio />

      <main className="container mx-auto px-6">{children}</main>
    </>
  );
};

export default StudioLayout;

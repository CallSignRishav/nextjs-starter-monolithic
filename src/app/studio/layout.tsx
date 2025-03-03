import HeaderStudio from "@/components/StudioComps/Headers/HeaderStudio";
import SidebarContainer from "@/components/StudioComps/SidebarComps/SidebarContainer";
import { SidebarProvider } from "@/components/ui/sidebar";
import { LayoutProps } from "@/lib/types";

const StudioLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <SidebarProvider>
        <SidebarContainer />

        <section className="w-full">
          <HeaderStudio />

          <main className="container mx-auto px-6">{children}</main>
        </section>
      </SidebarProvider>
    </>
  );
};

export default StudioLayout;

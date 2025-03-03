"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Clapperboard, DoorClosed, Users } from "lucide-react";

const SidebarContainer = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <>
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <DoorClosed size={28} />
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <button onClick={toggleSidebar}>
                      <DoorClosed /> Toggle Sidebar
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <button onClick={toggleSidebar}>
                    <DoorClosed /> Toggle Sidebar
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarFooter>
      </Sidebar>
    </>
  );
};

export default SidebarContainer;

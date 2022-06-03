import { AppShell, Header } from "@mantine/core";
import React, { FunctionComponent } from "react";
import { SidebarNavigation } from "../SidebarNavigation";

const Layout: FunctionComponent = ({ children }) => {
  return (
    <AppShell
      padding="md"
      navbar={<SidebarNavigation></SidebarNavigation>}
      header={
        <Header height={60} p="xs">
          {/* Header content */}
        </Header>
      }
    >
      {children}
    </AppShell>
  );
};

export default Layout;

import { AppShell, Header, Title } from "@mantine/core";
import React, { FunctionComponent } from "react";
import { SidebarNavigation } from "../SidebarNavigation";

const Layout: FunctionComponent = ({ children }) => {
  return (
    <AppShell
      padding="md"
      navbar={<SidebarNavigation></SidebarNavigation>}
      header={
        <Header height={60} p="xs">
          <Title>JAHCMS</Title>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
};

export default Layout;

import { AppShell, Header } from "@mantine/core";
import React from "react";
import { SidebarNavigation } from "../SidebarNavigation";

export default function Layout({ children }) {
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
}

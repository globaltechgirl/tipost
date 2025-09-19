import type { FC } from "react";
import { AppShell } from "@mantine/core";
import { Outlet } from "react-router-dom";
import Header from "@/component/layout/header";
import Footer from "@/component/layout/footer";

/**
 * PrivateLayout Component
 *
 * Uses Mantine's AppShell for consistent layout structure:
 * - Header at the top
 * - Main content area for routed components (Outlet)
 * - Footer at the bottom
 */

const PrivateLayout: FC = () => {
  return (
    <AppShell
      header={{ height: 60 }}
      styles={{
        header: {
          borderBottom: "none", 
          boxShadow: "none",   
          backgroundColor: "transparent",
        },
        main: {
          minHeight: "100vh",  
          paddingTop: 0,     
        },
      }}
    >
      {/* Header Section */}
      <AppShell.Header>
        <Header />
      </AppShell.Header>

      {/* Main Content Area */}
      <AppShell.Main>
        {/* Render routed component here */}
        <Outlet />

        {/* Footer */}
        <Footer />
      </AppShell.Main>
    </AppShell>
  );
};

export default PrivateLayout;

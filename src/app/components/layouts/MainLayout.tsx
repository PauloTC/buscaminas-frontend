import React from "react";
import NavBar from "../Navbar";
import { ClientProvider } from "@/app/contexts";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <ClientProvider>
      {children}
      <NavBar />
    </ClientProvider>
  );
};

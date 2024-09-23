import React from "react";
import NavBar from "../Navbar";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="dl-p-4">{children}</div>
      <NavBar />
    </>
  );
};

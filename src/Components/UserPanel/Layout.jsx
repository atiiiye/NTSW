import React, { useState } from "react";

//css
import "./../../css/Layout.css";
import "./../../css/MenuItems.css";

//components
import HeaderPanel from "./HeaderPanel";
import SidebarPanel from "./SidebarPanel";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <HeaderPanel />
      <div className="parent-sidebar-content">
        <SidebarPanel />
        {children}
      </div>
    </React.Fragment>
  );
};

export default Layout;

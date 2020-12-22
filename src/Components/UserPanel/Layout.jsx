import React from "react";

//components
import HeaderPanel from "./HeaderPanel";
import SidebarPanel from "./SidebarPanel";

const Layout = () => {
  return (
    <React.Fragment>
      <HeaderPanel />
      <div style={{ display: "flex", flexDirection: "column", width:"100%", height:"100%" }}>
      <SidebarPanel />
      </div>
    </React.Fragment>
  );
};

export default Layout;

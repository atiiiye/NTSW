import React, { useState } from "react";

//components
import HeaderPanel from "./HeaderPanel";
import SidebarPanel from "./SidebarPanel";

const Layout = () => {
  const [toggled, setToggled] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapsedChange = () => console.log('click');;
  const handleToggleSidebar = (value) => console.log(value);

  return (
    <React.Fragment>
      <HeaderPanel
        collapsed={collapsed}
        handleCollapsedChange={handleCollapsedChange}
      />
      <div style={{ display: "flex" }}>
        <SidebarPanel
          toggled={toggled}
          handleToggleSidebar={handleToggleSidebar}
          collapsed={collapsed}
        />
      </div>
    </React.Fragment>
  );
};

export default Layout;

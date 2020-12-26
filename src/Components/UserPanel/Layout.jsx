import React, { useState } from "react";


//css
import "./../../css/Layout.css";
//components
import HeaderPanel from "./HeaderPanel";
import SidebarPanel from "./SidebarPanel";

//packages
// import { Collapse } from "@material-ui/core";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <React.Fragment>
      <HeaderPanel handleCollapsedChange={toggle} />
      <div style={{ display: "flex" }}>
        <SidebarPanel isOpen={isOpen} />
        {children}
      </div>
    </React.Fragment>
  );
};

export default Layout;

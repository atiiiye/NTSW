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

  const onEntering = () => {
    let window = document.querySelector(".window");
    window.style.width = "Calc(100%-350px)";

    // console.log("Opening...");
  };

  const onEntered = () => {
    let window = document.querySelector(".window");
    window.style.width = "Calc(100%-350px)";
    // console.log("Opened...");
  };

  const onExiting = () => {
    let window = document.querySelector(".window");
    window.style.width = "100%";

    // console.log("Closing...");
  };

  const onExited = () => {
    let window = document.querySelector(".window");
    window.style.width = "100%";

    // console.log("Closed...");
  };

  return (
    <React.Fragment>
      <HeaderPanel handleCollapsedChange={toggle} />
      <div className="parent-sidebar-content">
        <SidebarPanel
          isOpen={isOpen}
          onEntering={onEntering}
          onEntered={onEntered}
          onExiting={onExiting}
          onExited={onExited}
        />
        {children}
      </div>
    </React.Fragment>
  );
};

export default Layout;

import React from "react";

//css
import "./../../css/SidebarPanel.css";

//components
import MenuItems from "./MenuItems";

import { Collapse } from "reactstrap";

const SidebarPanel = ({ isOpen, onEntering, onEntered, onExiting, onExited }) => {
  return (
    <Collapse className="mainCollapse" isOpen={isOpen}
      onEntering={onEntering}
      onEntered={onEntered}
      onExiting={onExiting}
      onExited={onExited}
    >
      <MenuItems />
    </Collapse>
  );
};

export default SidebarPanel;

import React from "react";

import MenuItems from "./MenuItems";
import { Collapse } from "reactstrap";

const SidebarPanel = ({ isOpen }) => {
  return (
    <Collapse className="mainCollapse" isOpen={isOpen}>
      <MenuItems />
    </Collapse>
  );
};

export default SidebarPanel;

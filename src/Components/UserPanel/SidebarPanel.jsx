import React from "react";

//css
import "./../../css/SidebarPanel.css";

//components
import MenuItems from "./MenuItems";

import { Collapse } from "reactstrap";

//context
import {Context} from "./../../Contextes";

const SidebarPanel = () => {
  return (
    <Context.Consumer>
      {(context) => (
        <Collapse
          className="mainCollapse"
          isOpen={context.isOpen}
          onEntering={context.onEntering}
          onEntered={context.onEntered}
          onExiting={context.onExiting}
          onExited={context.onExited}
        >
          <MenuItems />
        </Collapse>
      )}
    </Context.Consumer>
  );
};

export default SidebarPanel;

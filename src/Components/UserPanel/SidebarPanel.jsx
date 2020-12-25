import React, { useState, useEffect } from "react";

//bootstrap

// icons
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

//css
import "./../../css/SidebarPanel.css";

//contextes
import { Context } from "../../Contextes";

//packages
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";


import { NavLink } from "react-router-dom";
import MenuItems from "./MenuItems";

// import template from "lodash/template";

const SidebarPanel = (handleToggleSidebar, toggled) => {




  return (
    <React.Fragment>
      <div className="sidebar-brand-wrapper">

        <ProSidebar
          rtl={true}
          toggled={toggled}
          onToggle={handleToggleSidebar}
        // collapsed={collapsed}
        >
          <SidebarContent>
            <Menu iconShape="circle">
              <MenuItem icon={<i className="fa fa-home" />}><NavLink to="#">صفحه اصلی</NavLink></MenuItem>
              <MenuItems />
            </Menu>

          </SidebarContent>
        </ProSidebar>

        {/* <ProSidebar
          rtl={true}
          toggled={toggled}
          onToggle={handleToggleSidebar}
        // collapsed={collapsed}
        >
          <SidebarContent>
            <Menu>
              <MenuItem icon={<i className="fa fa-home" />}>صفحه اصلی</MenuItem>
              {menuItems.map((item) => (
                <SubMenu key={item.id} title={item.title} icon={item.icon}>
                </SubMenu>
              ))}
            </Menu>
          </SidebarContent>
        </ProSidebar> */}


      </div>
    </React.Fragment>
  );
};

export default SidebarPanel;

import React, { useState } from "react";

//bootstrap
import { UncontrolledCollapse, Collapse } from "reactstrap";

// icons
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

//css
import classes from "./../../css/SidebarPanel.module.css";

//contextes
import { Context } from "./../../Contextes";

//packages
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { NavLink } from "react-router-dom";

const SidebarPanel = () => {
  const menuItems = [
    {
      level_1: "صفحه اصلی",
      icon: <i className="fa fa-home" />,
      id: "toggler1",
    },
    {
      level_1: "عملیات پایه",
      icon: <i className="menu-icon fa fa-bar-chart-o" />,
      id: "toggler2",
    },
    {
      level_1: "عملیات شناسه کالا",
      icon: <i className="menu-icon fa fa-cubes" />,
      id: "toggler3",
    },
    {
      level_1: "عملیات تجارت خارجی",
      icon: <i className="menu-icon fa fa-refresh" />,
      id: "toggler4",
    },
    {
      level_1: "عملیات ارزی",
      icon: <i className="menu-icon fa fa-user-plus" />,
      id: "toggler5",
    },
    {
      level_1: "عملیات لجستیک خارجی",
      icon: <i className="menu-icon fa fa-edit" />,
      id: "toggler6",
    },
    {
      level_1: "عملیات شناسه رهگیری",
      icon: <i className="menu-icon fa fa-qrcode" />,
      id: "toggler7",
    },
    {
      level_1: "عملیات گمرکی",
      icon: <i className="menu-icon fa fa-check" />,
      id: "toggler8",
    },
    {
      level_1: "عملیات رتبه بندی و مالی",
      icon: <i className="menu-icon fa fa-bar-chart-o" />,
      id: "toggler9",
    },
  ];
  return (
    <React.Fragment>
      <Context.Consumer>
        {(context) => (
          <Collapse
            toggler="#sidebar"
            expand="lg"
            className={classes.collapse}
            isOpen={context.isOpen}
            onEntering={() => context.onEntering()}
            onEntered={() => context.onEntered()}
            onExiting={() => context.onExiting()}
            onExited={() => context.onExited()}
          >
            <div className={classes.sidebarBrandWrapper}>
              <ul>
                {menuItems.map((item) => (
                  <li className="nav-item" id={item.id}>
                    <div className="nav-link" to="/admin">
                      {item.icon}
                      <span className={classes.menuTitle}>{item.level_1}</span>
                      <ExpandMoreIcon />
                    </div>
                  </li>
                ))}
              </ul>
              {/* <ProSidebar>
                <Menu iconShape="square">
                  {menuItems.map((item) => (
                    <SubMenu title={item.level_1} icon={item.icon}>
                      <MenuItem>{item.level_1}</MenuItem>
                    </SubMenu>
                  ))}
                </Menu>
              </ProSidebar> */}
            </div>
          </Collapse>
        )}
      </Context.Consumer>
    </React.Fragment>
  );
};

export default SidebarPanel;

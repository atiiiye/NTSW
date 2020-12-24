import React from "react";
import { Collapse, List, ListItem } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";


function SidebarItem({ item }) {
    // console.log(item)
    const [collapsed, setCollapsed] = React.useState(true);
    const { items , title} = item;

    function toggleCollapse() {
        setCollapsed(prevValue => !prevValue);
    }

    function onClick() {
        if (Array.isArray(items)) {
            toggleCollapse();
        }
    }

    // let expandIcon;
    // if (Array.isArray(items) && items.length) {
    //     expandIcon = !collapsed ? <ExpandLessIcon /> : <ExpandMoreIcon />;
    // }

    return (
        <>
            <MenuItem onClick={onClick} button dense>
                <div>{title}</div>
                {/* {expandIcon} */}
            </MenuItem>
            <Collapse in={!collapsed}>
                {Array.isArray(items) ? (
                    <List disablePadding dense>
                        {items.map((subItem, index) => (
                            <SidebarItem key={`${subItem.id}${index}`} item={subItem} />
                        ))}
                    </List>
                ) : null}
            </Collapse>
        </>
    );
}

function Sidebar({ items }) {
    // { console.log(items) }
    return (
        <ProSidebar>
            <Menu iconShape="circle">
                {/* <List> */}
                    <SubMenu >
                    {items.map((sidebarItem, index) => (
                            <SidebarItem
                                key={`${sidebarItem.title}${index}`}
                                item={sidebarItem}
                            />
                            ))}
                    </SubMenu>

                {/* </List> */}

            </Menu>

        </ProSidebar>

    );
}

export default Sidebar;
import React, { useState } from "react";

//bootstrap
import { UncontrolledCollapse, Collapse } from "reactstrap";

// icons
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

//css
import "./../../css/SidebarPanel.css";

//contextes
import { Context } from "./../../Contextes";

//packages
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { NavLink } from "react-router-dom";

const SidebarPanel = (collapsed, handleToggleSidebar, toggled) => {
  const menuItems = [
    // {
    //   level_1: "صفحه اصلی",
    //   icon: <i className="fa fa-home" />,
    //   id: "toggler1",
    //   level_2: [""],
    // },
    {
      level_1: "عملیات پایه",
      icon: <i className="menu-icon fa fa-bar-chart-o" />,
      id: "toggler2",
      level_2: ["مدیریت نمایندگان", "مدیریت کارتابل", "بارگذاری صلاحیت ها"],
    },
    {
      level_1: "عملیات شناسه کالا",
      icon: <i className="menu-icon fa fa-cubes" />,
      id: "toggler3",
      level_2: [
        "فهرست کالاهای وارداتی",
        "درخواستهای در گردش",
        "کالاهای منتخب من",
        "جستوجوی کالا",
      ],
    },
    {
      level_1: "عملیات تجارت خارجی",
      icon: <i className="menu-icon fa fa-refresh" />,
      id: "toggler4",
      level_2: [
        "مدیریت پرونده های ثبت آماری ورود موقت",
        "مدیریت فروشندگان خارجی",
        "مدیریت پرونده ثبت سفارش",
        "مدیریت مجوز ها",
        "کالاهای دارای تاییدیه خدمات پس از فروش",
      ],
    },
    {
      level_1: "عملیات ارزی",
      icon: <i className="menu-icon fa fa-user-plus" />,
      id: "toggler5",
      level_2: [
        "مدیریت عملیات ارزی بانکی",
        "مدیریت عملیات ارزی غیر بانکی",
        "مدیریت ارز حاصل از صادرات",
        "پرونده های بدون انتقال ارز",
        "مشاهده اطلاعات ارزی",
        // [
        //   {
        //     level_3: ["خرید ارز", "تعیین منشا ارز"],
        //   },
        // ],
      ],
    },
    {
      level_1: "عملیات لجستیک خارجی",
      icon: <i className="menu-icon fa fa-edit" />,
      id: "toggler6",
      level_2: ["مدیریت بارنامه های بین الملل"],
    },
    {
      level_1: "عملیات شناسه رهگیری",
      icon: <i className="menu-icon fa fa-qrcode" />,
      id: "toggler7",
      level_2: ["استعلام تجهیزات دارای سیم کارت"],
    },
    {
      level_1: "عملیات گمرکی",
      icon: <i className="menu-icon fa fa-check" />,
      id: "toggler8",
      level_2: ["مدیریت اظهارنامه گمرکی", "مشاهده سابقه واردات کالا"],
    },
    {
      level_1: "عملیات رتبه بندی و مالی",
      icon: <i className="menu-icon fa fa-bar-chart-o" />,
      id: "toggler9",
      level_2: [
        "مدیرییت رتبه بندی",
        "استفاده مجدد از سقف واردات",
        "مدیریت صورت های مالی",
      ],
    },
  ];
  return (
    <React.Fragment>
      {/* <Context.Consumer>
        {(context) => (
          <Collapse
            toggler="#sidebar"
            expand="lg"
            className="collapse"
            isOpen={context.isOpen}
            onEntering={() => context.onEntering()}
            onEntered={() => context.onEntered()}
            onExiting={() => context.onExiting()}
            onExited={() => context.onExited()}
          > */}
      <div className="sidebar-brand-wrapper">
        <ProSidebar
          rtl={true}
          toggled={toggled}
          onToggle={handleToggleSidebar}
          // collapsed={collapsed}
        >
          <Menu iconShape="circle">
            <MenuItem icon={<i className="fa fa-home" />}>صفحه اصلی</MenuItem>

            {menuItems.map((item) => (
              <SubMenu title={item.level_1} icon={item.icon}>
                {item.level_2.map((item_2) => (
                  <NavLink to="#"><MenuItem>{item_2}</MenuItem></NavLink>
                ))}
                <SubMenu>
                  {/* {item_2.Level_3.map((item_3) => (
                              // {console.log(item_3)}
                             <MenuItem><NavLink>{item_3}</NavLink></MenuItem> 
                            ))} */}
                </SubMenu>
              </SubMenu>
            ))}
          </Menu>
        </ProSidebar>
      </div>
      {/* </Collapse>
        )}
      </Context.Consumer> */}
    </React.Fragment>
  );
};

export default SidebarPanel;

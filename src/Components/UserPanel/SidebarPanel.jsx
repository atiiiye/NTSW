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
    {
      level_1: { title: "عملیات پایه" },
      icon: <i className="menu-icon fa fa-bar-chart-o" />,
      id: "toggler2",
      level_2: [
        { title: "مدیریت نمایندگان", sub: false },
        { title: "مدیریت کارتابل", sub: false },
        { title: "بارگذاری صلاحیت ها", sub: false }
      ],
    },
    {
      level_1: { title: "عملیات شناسه کالا" },
      icon: <i className="menu-icon fa fa-cubes" />,
      id: "toggler3",
      level_2: [
        { title: "فهرست کالاهای وارداتی", sub: false },
        { title: "درخواستهای در گردش", sub: false },
        { title: "کالاهای منتخب من", sub: false },
        { title: "جستوجوی کالا", sub: false },
      ],
    },
    {
      level_1: { title: "عملیات تجارت خارجی" },
      icon: <i className="menu-icon fa fa-refresh" />,
      id: "toggler4",
      level_2: [
        { title: "مدیریت پرونده های ثبت آماری ورود موقت", sub: false },
        { title: "مدیریت فروشندگان خارجی", sub: false },
        { title: "مدیریت پرونده ثبت سفارش", sub: false },
        { title: "مدیریت مجوز ها", sub: false },
        { title: "کالاهای دارای تاییدیه خدمات پس از فروش", sub: false },
      ],
    },
    {
      level_1: { title: "عملیات ارزی" },
      icon: <i className="menu-icon fa fa-user-plus" />,
      id: "toggler5",
      level_2: [
        {
          title: "مدیریت عملیات ارزی بانکی",
          sub: true,
          level_3: [
            {
              title: "خرید ارز"
            }, {
              title: "تعیین منشا ارز"
            }
          ]
        },
        {
          title: "مدیریت عملیات ارزی غیر بانکی",
          sub: false,
        },
        {
          title: "مدیریت ارز حاصل از صادرات",
          sub: true,
          level_3: [
            { title: "فروش ارز" },
            { title: "واگذاری ارز" },
            { title: "درگاه ثبت پروانه های صادراتی عراق و افغانستان" },
          ]
        },
        {
          title: "پرونده های بدون انتقال ارز",
          sub: true,
          level_3: [
            { title: "تعیین منشا ارز" }
          ]
        },
        {
          title: "مشاهده اطلاعات ارزی",
          sub: false
        },

      ],
    },
    {
      level_1: { title: "عملیات لجستیک خارجی" },
      icon: <i className="menu-icon fa fa-edit" />,
      id: "toggler6",
      level_2: [
        {
          title: "مدیریت بارنامه های بین الملل",
          sub: false
        }
      ],
    },
    {
      level_1: { title: "عملیات شناسه رهگیری" },
      icon: <i className="menu-icon fa fa-qrcode" />,
      id: "toggler7",
      level_2: [
        { title: "استعلام تجهیزات دارای سیم کارت", sub: false },

      ],
    },
    {
      level_1: { title: "عملیات گمرکی" },
      icon: <i className="menu-icon fa fa-check" />,
      id: "toggler8",
      level_2: [
        {
          title: "مدیریت اظهارنامه گمرکی",
          sub: true,
          level_3: [
            { title: "مدیریت اظهارنامه واردات" },
            { title: "مدیریت اظهارنامه صادرات" }
          ]
        },
        { title: "مشاهده سابقه واردات کالا", }],
    },
    {
      level_1: { title: "عملیات رتبه بندی و مالی" },
      icon: <i className="menu-icon fa fa-bar-chart-o" />,
      id: "toggler9",
      level_2: [
        {
          title: "مدیرییت رتبه بندی",
          sub: false,

        },
        {
          title: "استفاده مجدد از سقف واردات",
          sub: false,

        },
        {
          title: "مدیریت صورت های مالی",
          sub: false,
        }
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
              <React.Fragment>

                <SubMenu title={item.level_1.title} icon={item.icon}>
                  {console.log("item :", item)}
                  {item.level_2.map((item_2) => (
                    <React.Fragment>

                      <NavLink to="#">
                        {console.log("item_2:", item_2)}
                        <MenuItem>{item_2.title}</MenuItem>
                      </NavLink>
                      <SubMenu>
                        (
                        item_2.sub ?
                            {
                          item_2.Level_3.map((item_3) => (
                            < NavLink>
                              {console.log('item_3 :', item_3)}
                              <MenuItem>{item_3.title}</MenuItem>
                            </ NavLink>
                          ))
                        }
                            : return null
                  )
                      </SubMenu>
                    </React.Fragment>
                  ))}

                </SubMenu>
              </React.Fragment>
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

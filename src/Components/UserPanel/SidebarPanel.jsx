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

// import template from "lodash/template";

const SidebarPanel = (handleToggleSidebar, toggled, menuItems) => {
  const menuItems = [
    {
      // items: {
      title: "عملیات پایه",
      items: [
        { title: "مدیریت نمایندگان", sub: false },
        { title: "مدیریت کارتابل", sub: false },
        { title: "بارگذاری صلاحیت ها", sub: false },
      ],
      // },
      icon: <i className="menu-icon fa fa-bar-chart-o" />,
      id: "toggler2",
    },
    {
      // items: {
      title: "عملیات شناسه کالا",
      items: [
        { title: "فهرست کالاهای وارداتی", sub: false },
        { title: "درخواستهای در گردش", sub: false },
        { title: "کالاهای منتخب من", sub: false },
        { title: "جستوجوی کالا", sub: false },
      ],
      // },
      icon: <i className="menu-icon fa fa-cubes" />,
      id: "toggler3",
    },
    {
      // items: {
      title: "عملیات تجارت خارجی",
      items: [
        { title: "مدیریت پرونده های ثبت آماری ورود موقت", sub: false },
        { title: "مدیریت فروشندگان خارجی", sub: false },
        { title: "مدیریت پرونده ثبت سفارش", sub: false },
        { title: "مدیریت مجوز ها", sub: false },
        { title: "کالاهای دارای تاییدیه خدمات پس از فروش", sub: false },
      ],
      // },
      icon: <i className="menu-icon fa fa-refresh" />,
      id: "toggler4",
    },
    {
      // items: {
      title: "عملیات ارزی",
      items: [
        {
          title: "مدیریت عملیات ارزی بانکی",
          sub: true,
          items: [
            {
              title: "خرید ارز",
            },
            {
              title: "تعیین منشا ارز",
            },
          ],
        },
        {
          title: "مدیریت عملیات ارزی غیر بانکی",
          sub: false,
        },
        {
          title: "مدیریت ارز حاصل از صادرات",
          sub: true,
          items: [
            { title: "فروش ارز" },
            { title: "واگذاری ارز" },
            { title: "درگاه ثبت پروانه های صادراتی عراق و افغانستان" },
          ],
        },
        {
          title: "پرونده های بدون انتقال ارز",
          sub: true,
          items: [{ title: "تعیین منشا ارز" }],
        },
        {
          title: "مشاهده اطلاعات ارزی",
          sub: false,
        },
      ],
      // },
      icon: <i className="menu-icon fa fa-user-plus" />,
      id: "toggler5",
    },
    {
      // items: {
      title: "عملیات لجستیک خارجی",
      items: [
        {
          title: "مدیریت بارنامه های بین الملل",
          sub: false,
        },
      ],
      // },
      icon: <i className="menu-icon fa fa-edit" />,
      id: "toggler6",
    },
    {
      // items: {
      title: "عملیات شناسه رهگیری",
      items: [{ title: "استعلام تجهیزات دارای سیم کارت", sub: false }],
      // },
      icon: <i className="menu-icon fa fa-qrcode" />,
      id: "toggler7",
    },
    {
      // items: {
      title: "عملیات گمرکی",
      items: [
        {
          title: "مدیریت اظهارنامه گمرکی",
          sub: true,
          items: [
            { title: "مدیریت اظهارنامه واردات" },
            { title: "مدیریت اظهارنامه صادرات" },
          ],
        },
        { title: "مشاهده سابقه واردات کالا" },
      ],
      // },
      icon: <i className="menu-icon fa fa-check" />,
      id: "toggler8",
    },
    {
      // items: {
      title: "عملیات رتبه بندی و مالی",
      items: [
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
        },
      ],
      // },
      icon: <i className="menu-icon fa fa-bar-chart-o" />,
      id: "toggler9",
    },
  ];

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
            <Menu>
              <MenuItem icon={<i className="fa fa-home" />}>صفحه اصلی</MenuItem>
              {console.log("menuItems :", menuItems)}
              {menuItems.map((item) => (
                <SubMenu key={item.id} title={item.title} icon={item.icon}>
                  {console.log("item :", item)}
                </SubMenu>
              ))}
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </div>
    </React.Fragment>
  );
};

export default SidebarPanel;

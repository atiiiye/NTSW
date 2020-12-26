import React, { useState } from "react";

//css
import "./../../css/MenuItems.css";

//packages
import { NavLink } from "react-router-dom";
import { Collapse, List, ListItem } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

// function SidebarItem({ item, key }) {
//   const [collapsed, setCollapsed] = useState(true);

//   function toggleCollapse() {
//     setCollapsed((prevValue) => !prevValue);
//   }

//   function onClick() {
//     if (Array.isArray(item)) {
//       toggleCollapse();
//     }
//   }
//   return (
//     <React.Fragment>
//       <li>
//         <MenuItem key={key} icon={item.icon} id={`${item.id}`}>
//           {item.title}
//           {/* <UncontrolledCollapse toggler={`#${item.id}`}> */}
//             <Collapse in={!collapsed}>
//               <MenuItem>
//                 {item.items &&
//                   item.items.map((item2, index2) => (
//                     <MenuItem>
//                       <SidebarItem key={index2} item={item2} />
//                     </MenuItem>
//                   ))}
//               </MenuItem>
//             </Collapse>
//           {/* </UncontrolledCollapse> */}
//         </MenuItem>
//       </li>
//     </React.Fragment>
//   );
// }

function SidebarItem({ depthStep = 48, depth = 0, expanded, item, ...rest }) {
  const [collapsed, setCollapsed] = useState(true);
  const { title, items, icon, onClick: onClickProp } = item;

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const onClick = (e) => {
    if (Array.isArray(items)) {
      toggleCollapse();
    }
    if (onClickProp) {
      onClickProp(e, item);
    }
  };

  let expandIcon;

  if (Array.isArray(items) && items.length) {
    expandIcon = !collapsed ? (
      <ExpandLessIcon
        className={
          "sidebar-item-expand-arrow" + " sidebar-item-expand-arrow-expanded"
        }
      />
    ) : (
      <ExpandMoreIcon className="sidebar-item-expand-arrow" />
    );
  }

  return (
    <React.Fragment>
      <ListItem
        iconShape="circle"
        className="sidebar-item"
        onClick={onClick}
        button
        dense
        {...rest}
      >
        <div
          iconShape="circle"
          style={{ paddingRight: depth * depthStep }}
          className="sidebar-item-content"
        >
          {icon}
          <div className="sidebar-item-text">{title}</div>
        </div>
        {expandIcon}
      </ListItem>
      <Collapse in={!collapsed} timeout="auto" unmountOnExit>
        {Array.isArray(items) ? (
          <List disablePadding dense>
            {items.map((subItem, index) => (
              <React.Fragment key={index}>
                {subItem === "divider" ? (
                  <Divider style={{ margin: "8px 0" }} />
                ) : (
                  <SidebarItem
                    depth={depth + 1}
                    depthStep={depthStep}
                    item={subItem}
                  />
                )}
              </React.Fragment>
            ))}
          </List>
        ) : null}
      </Collapse>
    </React.Fragment>
  );
}
const MenuItems = () => {
  const menuItems = [
    {
      title: "صفحه اصلی",
      icon: <i className="fa fa-home" />,
      id: "toggler1",
    },
    {
      title: "عملیات پایه",
      items: [
        { title: "مدیریت نمایندگان", id: "toggler2.1" },
        { title: "مدیریت کارتابل", id: "toggler2.2" },
        { title: "بارگذاری صلاحیت ها", id: "toggler2.3" },
      ],
      icon: <i className="menu-icon fa fa-bar-chart-o" />,
      id: "toggler2",
    },
    {
      title: "عملیات شناسه کالا",
      items: [
        { title: "فهرست کالاهای وارداتی", id: "toggler3.1" },
        { title: "درخواستهای در گردش", id: "toggler3.2" },
        { title: "کالاهای منتخب من", id: "toggler3.3" },
        { title: "جستوجوی کالا", id: "toggler3.4" },
      ],
      icon: <i className="menu-icon fa fa-cubes" />,
      id: "toggler3",
    },
    {
      title: "عملیات تجارت خارجی",
      items: [
        { title: "مدیریت پرونده های ثبت آماری ورود موقت", id: "toggler4.1" },
        { title: "مدیریت فروشندگان خارجی", id: "toggler4.2" },
        { title: "مدیریت پرونده ثبت سفارش", id: "toggler4.3" },
        { title: "مدیریت مجوز ها", id: "toggler4.4" },
        { title: "کالاهای دارای تاییدیه خدمات پس از فروش", id: "toggler4.5" },
      ],
      icon: <i className="menu-icon fa fa-refresh" />,
      id: "toggler4",
    },
    {
      title: "عملیات ارزی",
      items: [
        {
          title: "مدیریت عملیات ارزی بانکی",
          id: "toggler5.1",
          items: [
            {
              title: "خرید ارز",
              items: [{ title: "Salam :)))" }],
            },
            {
              title: "تعیین منشا ارز",
            },
          ],
        },
        {
          title: "مدیریت عملیات ارزی غیر بانکی",
          id: "toggler5.2",
          items: [
            {
              title: "ثبت سفارش ها غیر بانکی",
            },
          ],
        },
        {
          title: "مدیریت ارز حاصل از صادرات",
          id: "toggler5.3",
          items: [
            { title: "فروش ارز" },
            { title: "واگذاری پروانه و تهاتر ارز" },
            { title: "درگاه ثبت پروانه های صادراتی عراق و افغانستان" },
          ],
        },
        {
          title: "پرونده های بدون انتقال ارز",
          id: "toggler5.4",
          items: [{ title: "تعیین منشا ارز" }],
        },
        {
          title: "مشاهده اطلاعات ارزی",
          id: "toggler5.5",
        },
      ],
      icon: <i className="menu-icon fa fa-user-plus" />,
      id: "toggler5",
    },
    {
      title: "عملیات لجستیک خارجی",
      items: [
        {
          title: "مدیریت بارنامه های بین الملل",
          id: "toggler6.1",
        },
      ],
      icon: <i className="menu-icon fa fa-edit" />,
      id: "toggler6",
    },
    {
      title: "عملیات شناسه رهگیری",
      items: [{ title: "استعلام تجهیزات دارای سیم کارت", id: "toggler7.1" }],
      icon: <i className="menu-icon fa fa-qrcode" />,
      id: "toggler7",
    },
    {
      title: "عملیات گمرکی",
      items: [
        {
          title: "مدیریت اظهارنامه گمرکی",
          id: "toggler8.1",
          items: [
            { title: "مدیریت اظهارنامه واردات" },
            { title: "مدیریت اظهارنامه صادرات" },
          ],
        },
        { title: "مشاهده سابقه واردات کالا" },
      ],
      icon: <i className="menu-icon fa fa-check" />,
      id: "toggler8",
    },
    {
      title: "عملیات رتبه بندی و مالی",
      items: [
        {
          title: "مدیرییت رتبه بندی",
          id: "toggler9.1",
        },
        {
          title: "استفاده مجدد از سقف واردات",
          id: "toggler9.2",
        },
        {
          title: "مدیریت صورت های مالی",
          id: "toggler9.3",
        },
      ],
      icon: <i className="menu-icon fa fa-bar-chart-o" />,
      id: "toggler9",
    },
  ];

  return (
    <div className="sidebar">
      <List disablePadding dense>
        {menuItems.map((item, index) => (
          <React.Fragment>
            {item === "divider" ? (
              <Divider style={{ margin: "8px 0" }} />
            ) : (
              <SidebarItem item={item} key={index} />
            )}
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};

export default MenuItems;

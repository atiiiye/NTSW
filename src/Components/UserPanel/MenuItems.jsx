import React from 'react';
import { NavLink } from 'react-router-dom';

//packages
import {
    MenuItem,
    SubMenu,
    Menu
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

function SidebarItem({ item, key }) {
    return (
        <React.Fragment>
            <li>
                <MenuItem key={key} icon={item.icon}>
                    {item.title}
                    <MenuItem>
                        {
                            // Array.isArray(item.items) ? item.items.map((item2, index2) => (
                            //<NavLinK></NavLinl>
                            //     <MenuItem>
                            //         <SidebarItem key={index2} item={item2} />
                            //     </MenuItem>
                            //     // <li key={index2}>
                            //     //     <NavLink to="#">{item2.title}</NavLink>
                            //     //     <ul>
                            //     //         {
                            //     //             Array.isArray(item2.items)
                            //     //                 ? item2.items.flatMap((item3, index3) =>
                            //     //                     <li key={index3}>
                            //     //                         <NavLink to="#">{item3.title}</NavLink>
                            //     //                     </li>
                            //     //                 )
                            //     //                 : null
                            //     //         }
                            //     //     </ul>
                            //     // </li>
                            // )) : null

                            item.items && item.items.map((item2, index2) => (
                                <MenuItem>
                                    <SidebarItem key={index2} item={item2} />
                                </MenuItem>
                            ))

                        }
                    </MenuItem>
                </MenuItem>

            </li>
        </React.Fragment>
    )

}

const MenuItems = () => {

    const menuItems = [
        {
            title: "عملیات پایه",
            items: [
                { title: "مدیریت نمایندگان", sub: false },
                { title: "مدیریت کارتابل", sub: false },
                { title: "بارگذاری صلاحیت ها", sub: false },
            ],
            icon: <i className="menu-icon fa fa-bar-chart-o" />,
            id: "toggler2",
        },
        {
            title: "عملیات شناسه کالا",
            items: [
                { title: "فهرست کالاهای وارداتی", sub: false },
                { title: "درخواستهای در گردش", sub: false },
                { title: "کالاهای منتخب من", sub: false },
                { title: "جستوجوی کالا", sub: false },
            ],
            icon: <i className="menu-icon fa fa-cubes" />,
            id: "toggler3",
        },
        {
            title: "عملیات تجارت خارجی",
            items: [
                { title: "مدیریت پرونده های ثبت آماری ورود موقت", sub: false },
                { title: "مدیریت فروشندگان خارجی", sub: false },
                { title: "مدیریت پرونده ثبت سفارش", sub: false },
                { title: "مدیریت مجوز ها", sub: false },
                { title: "کالاهای دارای تاییدیه خدمات پس از فروش", sub: false },
            ],
            icon: <i className="menu-icon fa fa-refresh" />,
            id: "toggler4",
        },
        {
            title: "عملیات ارزی",
            items: [
                {
                    title: "مدیریت عملیات ارزی بانکی",
                    sub: true,
                    items: [
                        {
                            title: "خرید ارز",
                            items: [
                                { title: "Salam :)))" }
                            ]
                        },
                        {
                            title: "تعیین منشا ارز",
                        },
                    ],
                },
                {
                    title: "مدیریت عملیات ارزی غیر بانکی",
                    sub: true,
                    items: [
                        {
                            title: "ثبت سفارش ها غیر بانکی",
                        },
                    ],
                },
                {
                    title: "مدیریت ارز حاصل از صادرات",
                    sub: true,
                    items: [
                        { title: "فروش ارز" },
                        { title: "واگذاری پروانه و تهاتر ارز" },
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
            icon: <i className="menu-icon fa fa-user-plus" />,
            id: "toggler5",
        },
        {
            title: "عملیات لجستیک خارجی",
            items: [
                {
                    title: "مدیریت بارنامه های بین الملل",
                    sub: false,
                },
            ],
            icon: <i className="menu-icon fa fa-edit" />,
            id: "toggler6",
        },
        {
            title: "عملیات شناسه رهگیری",
            items: [{ title: "استعلام تجهیزات دارای سیم کارت", sub: false }],
            icon: <i className="menu-icon fa fa-qrcode" />,
            id: "toggler7",
        },
        {
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
            icon: <i className="menu-icon fa fa-check" />,
            id: "toggler8",
        },
        {
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
            icon: <i className="menu-icon fa fa-bar-chart-o" />,
            id: "toggler9",
        },
    ];

    return (
        <React.Fragment>

            {menuItems.map((item, index) => (
                <SidebarItem key={index} item={item} />

            ))
            }

        </React.Fragment >
    );
}

export default MenuItems;
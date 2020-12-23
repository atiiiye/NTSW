import React, { useState } from "react";

//css
import "./../../css/HeaderPanel.css";

//imgages
import LogoWhite from "./../../images/logoWhite.png";

//icons
import MenuIcon from "@material-ui/icons/Menu";

//bootstrap
import { Navbar, Button, Tooltip } from "reactstrap";
import { NavLink } from "react-router-dom";

//contexts
import { Context } from "./../../Contextes";

const HeaderPanel = (Collapsed, handleCollapsedChange) => {
  const [isOpenExit, setIsOpenExit] = useState(false);
  const [isOpenMessages, setIsOpenMessages] = useState(false);

  const toggleExit = () => setIsOpenExit(!isOpenExit);
  const toggleMessage = () => setIsOpenMessages(!isOpenMessages);

  return (
    // <Context.Consumer>
    //   {(context) => (
    <Navbar>
      <div className="navbar-menu-wrapper">
        <div className="navbar-menu-wrapper-right">
          <img src={LogoWhite} alt="" />
          <Button
            className="navbar-toggler"
            type="button"
            onClick={handleCollapsedChange}
          >
            <MenuIcon className="hamburger-menu" id="sidebar" />
          </Button>
        </div>
        <div className="navbar-menu-wrapper-left">
          <div>
            <NavLink to="#">
              {/* <i class="fas fa-cogs" /> */}
                  مدیریت حساب کاربری
                </NavLink>
            <NavLink to="#">
              {/* <i class="fas fa-money-check" /> */}
                  ثبت و پیگیری مشکل
                </NavLink>
            <NavLink to="#">
              {/* <i class="fas fa-user-circle" /> */}
                  کاربر تستی
                </NavLink>
            <NavLink to="#" id="messages">
              <i class="material-icons">&#xe0be;</i>
            </NavLink>
            <Tooltip
              placement="bottom"
              target="messages"
              isOpen={isOpenMessages}
              toggle={toggleMessage}
              style={{ fontFamily: "Vazir" }}
            >
              پیام ها
                </Tooltip>

            <NavLink to="#" id="exit">
              <i class="material-icons">exit_to_app</i>
            </NavLink>
            <Tooltip
              placement="bottom"
              target="exit"
              isOpen={isOpenExit}
              toggle={toggleExit}
              style={{ fontFamily: "Vazir" }}
            >
              خروج
                </Tooltip>
          </div>
        </div>
      </div>
    </Navbar>
    //   )}
    // </Context.Consumer>
  );
};

export default HeaderPanel;

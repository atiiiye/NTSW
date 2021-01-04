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

const HeaderPanel = ({ handleCollapsedChange }) => {
  const [isOpenExit, setIsOpenExit] = useState(false);
  const [isOpenMessages, setIsOpenMessages] = useState(false);

  const toggleExit = () => setIsOpenExit(!isOpenExit);
  const toggleMessage = () => setIsOpenMessages(!isOpenMessages);

  return (
    <Navbar>
      <div className="navbar-menu-wrapper flex-column flex-md-row">
        <div className="navbar-menu-wrapper-right d-none d-md-flex">
          <div className="navbar-menu-box-right">
            <img src={LogoWhite} alt="" />
            <Button className="navbar-toggler" type="button">
              <MenuIcon
                className="hamburger-menu"
                id="sidebar"
                onClick={handleCollapsedChange}
              />
            </Button>
          </div>
        </div>
        <div className="navbar-menu-wrapper-left d-none d-md-flex">
          <div className="navbar-menu-box-left">
            <div>
              <NavLink to="#">
                <i className="fas fa-cog d-flex d-md-none" />
                <p className="d-none d-md-flex">مدیریت حساب کاربری</p>
              </NavLink>
              <NavLink to="#">
                <i class="fas fa-money-check d-flex d-md-none" />
                <p className="d-none d-md-flex">ثبت و پیگیری مشکل</p>
              </NavLink>
              <NavLink to="#">
                <i className="fas fa-user-circle d-flex d-md-none" />
                <p className="d-none d-md-flex">کاربر تستی</p>
              </NavLink>
              <NavLink to="#" id="messages">
                <i className="material-icons">&#xe0be;</i>
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

        <div className="navbar-menu-wrapper-right d-flex d-md-none  ">
          <div className="navbar-menu-box-right">
            <img src={LogoWhite} alt="" />
          </div>
        </div>
        <div className="navbar-menu-wrapper-left d-flex d-md-none">
          <div className="navbar-menu-box-left">
            <div>
              <Button className="navbar-toggler" type="button">
                <MenuIcon
                  className="hamburger-menu"
                  id="sidebar"
                  onClick={handleCollapsedChange}
                />
              </Button>
              <NavLink to="#">
                <i className="fas fa-cog d-flex d-md-none" />
                <p className="d-none d-md-flex">مدیریت حساب کاربری</p>
              </NavLink>
              <NavLink to="#">
                <i class="fas fa-money-check d-flex d-md-none" />
                <p className="d-none d-md-flex">ثبت و پیگیری مشکل</p>
              </NavLink>
              <NavLink to="#">
                <i className="fas fa-user-circle d-flex d-md-none" />
                <p className="d-none d-md-flex">کاربر تستی</p>
              </NavLink>
              <NavLink to="#" id="messages">
                <i className="material-icons">&#xe0be;</i>
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
      </div>
    </Navbar>
  );
};

export default HeaderPanel;
